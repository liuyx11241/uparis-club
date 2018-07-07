package com.uparis.mvc;

import com.uparis.db.constant.TypeOrderStatus;
import com.uparis.db.entity.*;
import com.uparis.db.repo.OrderRepository;
import com.uparis.db.repo.PersonRepository;
import com.uparis.db.repo.StockRepository;
import com.uparis.db.repo.TripRepository;
import com.uparis.dto.OrderDto;
import com.uparis.util.HashCodeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
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

    @Value("${uparis.order.reference.length}")
    private int referenceLength;

    @GetMapping
    public Page<OrderDto> getOrders(
            @RequestParam Map<String, String> filter,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
            @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
            @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        Page<OrderPo> orderPoPage = repoOrder.findAll(
                PageRequest.of(
                        pageIndex,
                        pageSize,
                        Sort.by(Sort.Direction.fromString(direction), sort)));
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
        String orderReference = hashCodeService.generate(referenceLength);

        List<OrderPo> orderPoList =
                listOrder.stream().map(orderDto -> modelMapper.map(orderDto, OrderPo.class)).collect(Collectors.toList());

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
        }

        for (OrderPo orderPo : repoOrder.saveAll(orderPoList)) {
            if (isZeroOrderAmount(orderPo)) {
                updateOrderIntoSuccess(orderPo);
            }
        }

        OrderDto orderDto = new OrderDto();
        orderDto.setReference(orderReference);
        return ResponseEntity.ok(orderDto);
    }

    @PutMapping
    @Transactional
    public List<OrderDto> updateOrder(@RequestBody List<OrderDto> listOrder) {
        List<OrderPo> orderPoList =
                listOrder.stream().map(orderDto -> modelMapper.map(orderDto, OrderPo.class)).collect(Collectors.toList());

        for (OrderPo orderPo : orderPoList) {
            PersonPo payer = repoPerson.findOptionalByBirthdayAndWechat(
                    orderPo.getPayer().getBirthday(),
                    orderPo.getPayer().getWechat()).orElse(orderPo.getPayer());
            repoPerson.save(orderPo.getPayer());

            // todo check payment
            updateOrderIntoSuccess(orderPo);
        }

        return orderPoList.stream().map(orderPo -> modelMapper.map(orderPo, OrderDto.class)).collect(Collectors.toList());
    }

    private boolean isZeroOrderAmount(@NotNull OrderPo orderPo) {
        return BigDecimal.ZERO.compareTo(orderPo.getAmount()) == 0;
    }

    private BigDecimal calculateOrderAmount(@NotNull OrderPo orderPo) {
        BigDecimal amount = BigDecimal.ZERO;
        amount = amount.add(orderPo.getTrip().getPrice());
        for (OptionPo optionPo : orderPo.getListOption()) {
            amount = amount.add(optionPo.getPrice());
        }
        return amount;
    }

    private void updateOrderIntoSuccess(@NotNull OrderPo orderPo) {
        for (OptionPo optionPo : orderPo.getListOption()) {
            StockPo stockPo = optionPo.getStock();
            if (null != stockPo) {
                stockPo.setQuantity(stockPo.getQuantity() - 1);
                repoStock.save(stockPo);
            }
        }
        TripPo tripPo = orderPo.getTrip();
        tripPo.setStock(tripPo.getStock() - 1);
        repoTrip.save(tripPo);

        orderPo.setStatus(TypeOrderStatus.SUCCESS);
        repoOrder.save(orderPo);
    }
}
