package com.uparis.mvc;

import com.uparis.db.entity.OrderPo;
import com.uparis.db.entity.PersonPo;
import com.uparis.db.repo.OrderRepository;
import com.uparis.db.repo.PersonRepository;
import com.uparis.dto.OrderDto;
import com.uparis.util.HashCodeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.util.Calendar;
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

    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody List<OrderDto> listOrder) {
        String orderReference =
            hashCodeService.generate(DateFormat.getTimeInstance().format(Calendar.getInstance().getTime()));

        List<OrderPo> orderPoList =
            listOrder.stream().map(orderDto -> modelMapper.map(orderDto, OrderPo.class)).collect(Collectors.toList());

        for (OrderPo orderPo : orderPoList) {
            PersonPo participant = orderPo.getParticipant();
            PersonPo participantByWechat = repoPerson.findByWechat(participant.getWechat());
            if (participantByWechat != null) {
                orderPo.setParticipant(participantByWechat);
            }
            PersonPo payer = orderPo.getPayer();
            if (payer != null) {
                PersonPo payerByWechat = repoPerson.findByWechat(payer.getWechat());
                if (participantByWechat != null) {
                    orderPo.setPayer(payerByWechat);
                }
            }
            orderPo.setReference(orderReference);
        }
        repoOrder.saveAll(orderPoList);

        return ResponseEntity.ok(orderReference);
    }
}
