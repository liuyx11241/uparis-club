package com.uparis.mvc;

import com.uparis.db.constant.TypeOrderStatus;
import com.uparis.db.entity.PersonPo;
import com.uparis.db.repo.OrderRepository;
import com.uparis.db.repo.PersonRepository;
import com.uparis.dto.PersonDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    private PersonRepository repoPerson;

    @Autowired
    private OrderRepository repoOrder;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public Page<PersonDto> getPersons(
            @RequestParam Map<String, String> filter,
            @RequestParam(value = "pageIndex", required = false, defaultValue = "0") Integer pageIndex,
            @RequestParam(value = "pageSize", required = false, defaultValue = "50") Integer pageSize,
            @RequestParam(value = "sort", required = false, defaultValue = "id") String sort,
            @RequestParam(value = "direction", required = false, defaultValue = "ASC") String direction) {
        if (filter.containsKey("idTrip")) {
            return new PageImpl<>(repoOrder.findAllByStatusEqualsAndTrip_Id(
                    TypeOrderStatus.valueOf(filter.get("orderStatus")),
                    Long.valueOf(filter.get("idTrip")))
            ).map(orderPo -> modelMapper.map(orderPo.getParticipant(), PersonDto.class));
        }

        Page<PersonPo> personPoPage = repoPerson.findAll(
                PageRequest.of(pageIndex, pageSize, Sort.by(Sort.Direction.fromString(direction), sort)));
        return personPoPage.map(personPo -> modelMapper.map(personPo, PersonDto.class));
    }
}
