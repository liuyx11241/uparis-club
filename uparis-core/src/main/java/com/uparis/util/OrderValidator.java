package com.uparis.util;

import com.uparis.db.entity.*;
import com.uparis.db.repo.OptionRepository;
import com.uparis.db.repo.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import javax.validation.constraints.NotNull;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class OrderValidator {

    @Autowired
    private TripRepository repoTrip;

    @Autowired
    private OptionRepository repoOption;

    public boolean validateAndRefactorOrder(@NotNull List<OrderPo> listOrder) {
        if (CollectionUtils.isEmpty(listOrder)) {
            return false;
        }
        Map<Long, Integer> stockMap = new HashMap<>();
        for (OrderPo orderPo : listOrder) {
            // trip
            if (Objects.isNull(orderPo.getTrip()) || Objects.isNull(orderPo.getTrip().getId())) {
                return false;
            }
            Optional<TripPo> tripPoOptional = repoTrip.findById(orderPo.getId());
            if (!tripPoOptional.isPresent()) {
                return false;
            }

            // refactor Trip
            TripPo tripPo = tripPoOptional.get();
            orderPo.setTrip(tripPo);

            // answer
            Set<String> expectedQuestion =
                tripPo.getListQuestion().stream().map(QuestionPo::getQuestion).collect(Collectors.toSet());
            if (CollectionUtils.isEmpty(orderPo.getListAnswer())) {
                if (!CollectionUtils.isEmpty(expectedQuestion)) {
                    return false;
                }
            } else {
                for (AnswerPo answerPo : orderPo.getListAnswer()) {
                    if (!expectedQuestion.contains(answerPo.getQuestion())) {
                        return false;
                    }
                    expectedQuestion.remove(answerPo.getQuestion());
                }
            }

            // check option
            Map<Integer, List<OptionPo>> expectedOptionMap =
                tripPo.getListOption().stream().collect(Collectors.groupingBy(OptionPo::getLevel));
            if (CollectionUtils.isEmpty(orderPo.getListOption())) {
                if (!CollectionUtils.isEmpty(expectedOptionMap)) {
                    return false;
                }
                orderPo.setListOption(new ArrayList<>());
            } else {
                for (OptionPo optionPo : orderPo.getListOption()) {
                    Integer key = optionPo.getLevel();
                    if (!expectedOptionMap.containsKey(key) ||
                        expectedOptionMap.get(key).stream().noneMatch(expectedOption -> expectedOption.getId().equals(optionPo.getId()))) {
                        return false;
                    }

                    expectedOptionMap.remove(key);
                }

                // refactor Option
                orderPo.setListOption(
                    orderPo.getListOption().stream()
                        .map(optionPo -> repoOption.getOne(optionPo.getId()))
                        .collect(Collectors.toList()));
            }

            // check stock
            stockMap.putIfAbsent(tripPo.getId(), tripPo.getStock());
            stockMap.compute(tripPo.getId(), (key, stock) -> stock - 1);

            tripPo.getListOption().stream()
                .filter(optionPo -> Objects.nonNull(optionPo.getStock()))
                .map(OptionPo::getStock)
                .forEach(stockPo -> stockMap.putIfAbsent(stockPo.getId(), stockPo.getQuantity()));

            orderPo.getListOption().stream().filter(optionPo -> Objects.nonNull(optionPo.getStock()))
                .map(OptionPo::getStock)
                .forEach(stockPo -> stockMap.compute(stockPo.getId(), (key, quantity) -> quantity - 1));

            for (Integer stock : stockMap.values()) {
                if (stock < 0) {
                    return false;
                }
            }
        }
        return true;
    }
}
