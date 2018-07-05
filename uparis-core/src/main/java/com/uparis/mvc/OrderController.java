package com.uparis.mvc;

import com.uparis.db.constant.TypeStatus;
import com.uparis.db.entity.OrderPo;
import com.uparis.db.entity.PersonPo;
import com.uparis.db.repo.OrderRepository;
import com.uparis.db.repo.PersonRepository;
import com.uparis.dto.OrderDto;
import com.uparis.util.HashCodeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderRepository repoOrder;

    @Autowired
    private PersonRepository repoPerson;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private HashCodeService hashCodeService;

    @Value("${uparis.order.reference.length}")
    private int referenceLength;

    @GetMapping
    public Page<OrderDto> getOrders(
            @RequestParam(value = "filter", required = false, defaultValue = "") String filter,
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
    public ResponseEntity<OrderDto> createOrder(@RequestBody List<OrderDto> listOrder) {
        String orderReference = hashCodeService.generate(referenceLength);

        List<OrderPo> orderPoList =
                listOrder.stream().map(orderDto -> modelMapper.map(orderDto, OrderPo.class)).collect(Collectors.toList());

        for (OrderPo orderPo : orderPoList) {
            orderPo.setParticipant(repoPerson.findOptionalByWechat(orderPo.getParticipant().getWechat()).orElse(orderPo.getParticipant()));
            PersonPo payer = orderPo.getPayer();
            if (payer != null) {
                orderPo.setPayer(repoPerson.findOptionalByWechat(payer.getWechat()).orElse(payer));
            }
            orderPo.setReference(orderReference);
            orderPo.setStatus(TypeStatus.PENDING);
        }
        repoOrder.saveAll(orderPoList);

        OrderDto orderDto = new OrderDto();
        orderDto.setReference(orderReference);
        return ResponseEntity.ok(orderDto);
    }
}
