package com.uparis.mvc;

import com.stripe.model.Charge;
import com.uparis.db.constant.TypeCurrency;
import com.uparis.db.constant.TypeOrderStatus;
import com.uparis.db.constant.TypePayment;
import com.uparis.db.entity.*;
import com.uparis.db.repo.OrderRepository;
import com.uparis.db.repo.PersonRepository;
import com.uparis.db.repo.StockRepository;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.OrderDto;
import com.uparis.util.HashCodeService;
import com.uparis.util.OrderValidator;
import com.uparis.util.StripeClient;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderRepository repoOrder;

    @Autowired
    private PersonRepository repoPerson;

    @Autowired
    private StockRepository repoStock;

    @Autowired
    private TripRepository repoTrip;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private HashCodeService hashCodeService;

    @Autowired
    private OrderValidator orderValidator;

    @Autowired
    private StripeClient stripeClient;

    @Value("${uparis.order.reference.length}")
    private int referenceLength;

    private static final Logger LOGGER = LoggerFactory.getLogger(OrderController.class);

    @GetMapping
    public Page<OrderDto> getOrders(
        @RequestParam Map<String, String> filter,
        @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
        @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
        @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
        @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        if (filter.containsKey("idTrip")) {
            return new PageImpl<>(repoOrder.findAllByTrip_Id(Long.valueOf(filter.get("idTrip"))))
                .map(orderPo -> modelMapper.map(orderPo, OrderDto.class));
        }

        Page<OrderPo> orderPoPage = repoOrder.findAll(
            PageRequest.of(pageIndex, pageSize, Sort.by(Sort.Direction.fromString(direction), sort)));
        return orderPoPage.map(orderPo -> modelMapper.map(orderPo, OrderDto.class));
    }

    @GetMapping("/{reference}")
    public List<OrderDto> getOrders(@PathVariable String reference) {
        return repoOrder.findAllByReference(reference).stream()
            .map(orderPo -> modelMapper.map(orderPo, OrderDto.class))
            .collect(Collectors.toList());
    }

    @PostMapping
    @Transactional
    public ResponseEntity<OrderDto> createOrder(@RequestBody List<OrderDto> listOrder) {
        List<OrderPo> orderPoList =
            listOrder.stream().map(orderDto -> modelMapper.map(orderDto, OrderPo.class)).collect(Collectors.toList());
        if (!orderValidator.validateParticipant(orderPoList)
            || !orderValidator.validateAndRefactorOrder(orderPoList)) {
            return ResponseEntity.badRequest().build();
        }

        if (!orderValidator.validateStock(orderPoList)) {
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).build();
        }

        String orderReference = hashCodeService.generate(referenceLength);
        for (OrderPo orderPo : orderPoList) {
            orderPo.setAmount(calculateOrderAmount(orderPo));
            // todo : Detect duplicated Participant
            PersonPo participant = repoPerson.findOptionalByBirthdayAndWechat(
                orderPo.getParticipant().getBirthday(),
                orderPo.getParticipant().getWechat()).orElse(orderPo.getParticipant());
            orderPo.getParticipant().setId(participant.getId());
            repoPerson.save(orderPo.getParticipant());

            orderPo.setReference(orderReference);
            orderPo.setStatus(TypeOrderStatus.PENDING);

            orderPo.getListAnswer().forEach(answerPo -> answerPo.setOrder(orderPo));
            orderPo.getTrip().getListQuestion().forEach(questionPo -> questionPo.setTrip(orderPo.getTrip()));
        }

        orderPoList = repoOrder.saveAll(orderPoList);
        if (isZeroOrderAmount(calculateAllOrderAmount(orderPoList))) {
            updateOrderIntoSuccess(orderPoList);
        }

        OrderDto response = new OrderDto();
        response.setReference(orderReference);
        return ResponseEntity.ok(response);
    }

    @PutMapping
    @Transactional
    public ResponseEntity<OrderDto> updateOrder(@RequestBody OrderDto orderRef) {
        String reference = orderRef.getReference();
        String paymentToken = orderRef.getPaymentToken();
        TypePayment typePayment = TypePayment.valueOf(orderRef.getPaymentMode());
        PersonPo payer = modelMapper.map(orderRef.getPayer(), PersonPo.class);

        if (Objects.isNull(reference)
            || !orderValidator.validatePerson(payer)
            || !orderValidator.validatePayment(typePayment, paymentToken)) {
            return ResponseEntity.badRequest().body(orderRef);
        }

        List<OrderPo> orderPoList = repoOrder.findAllByReference(reference);
        if (!orderValidator.validateStock(orderPoList)) {
            return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).build();
        }
        TypeCurrency currency = orderPoList.get(0).getTrip().getCurrency();

        // Save payer
        PersonPo payerPo = repoPerson.findOptionalByBirthdayAndWechat(payer.getBirthday(), payer.getWechat()).orElse(payer);
        repoPerson.save(payerPo);

        orderPoList.forEach(orderPo -> {
            orderPo.setPayer(payerPo);
            orderPo.setPaymentMode(typePayment);
            orderPo.setPaymentToken(paymentToken);
        });

        BigDecimal totalAmount = calculateAllOrderAmount(orderPoList);
        try {
            Charge charge = stripeClient.chargeCreditCard(paymentToken, totalAmount, currency.name());
            if (charge.getPaid()) {
                updateOrderIntoSuccess(orderPoList);
                return ResponseEntity.ok(orderRef);
            } else {
                updateOrderIntoFailure(orderPoList);
                return ResponseEntity.status(HttpStatus.PAYMENT_REQUIRED).body(orderRef);
            }
        } catch (Exception e) {
            LOGGER.error("payment error", e);
            return ResponseEntity.status(HttpStatus.PAYMENT_REQUIRED).body(orderRef);
        }
    }

    private boolean isZeroOrderAmount(@NotNull BigDecimal amount) {
        return BigDecimal.ZERO.compareTo(amount) == 0;
    }

    private BigDecimal calculateOrderAmount(@NotNull OrderPo orderPo) {
        BigDecimal amount = BigDecimal.ZERO;
        amount = amount.add(orderPo.getTrip().getPrice());
        for (OptionPo optionPo : orderPo.getListOption()) {
            amount = amount.add(optionPo.getPrice());
        }
        return amount;
    }

    private BigDecimal calculateAllOrderAmount(@NotNull List<OrderPo> orderPoList) {
        BigDecimal amount = BigDecimal.ZERO;
        for (OrderPo orderPo : orderPoList) {
            amount = amount.add(calculateOrderAmount(orderPo));
        }
        return amount;
    }

    private void updateOrderIntoSuccess(@NotNull List<OrderPo> orderPoList) {
        orderPoList.forEach(orderPo -> {
            for (OptionPo optionPo : orderPo.getListOption()) {
                StockPo stockPo = optionPo.getStock();
                if (null != stockPo) {
                    stockPo.setQuantity(stockPo.getQuantity() - 1);
                    repoStock.save(stockPo);
                }
            }
            TripPo tripPo = orderPo.getTrip();
            tripPo.setStock(tripPo.getStock() - 1);
            tripPo.getListQuestion().forEach(questionPo -> questionPo.setTrip(tripPo));
            repoTrip.save(tripPo);

            orderPo.setStatus(TypeOrderStatus.SUCCESS);
            orderPo.getListAnswer().forEach(answerPo -> answerPo.setOrder(orderPo));
            repoOrder.save(orderPo);
        });
    }

    private void updateOrderIntoFailure(@NotNull List<OrderPo> orderPoList) {
        orderPoList.forEach(orderPo -> {
            orderPo.setStatus(TypeOrderStatus.FAILURE);
            orderPo.getListAnswer().forEach(answerPo -> answerPo.setOrder(orderPo));
            repoOrder.save(orderPo);
        });
    }
}
