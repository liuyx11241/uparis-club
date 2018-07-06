package com.uparis.mvc;

import com.uparis.db.entity.OptionPo;
import com.uparis.db.entity.OrderPo;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Component
public class ControllerUtil {

    public BigDecimal calculateAmount(@NotNull OrderPo orderPo) {
        BigDecimal amount = BigDecimal.ZERO;
        amount = amount.add(orderPo.getTrip().getPrice());
        for (OptionPo optionPo : orderPo.getListOption()) {
            amount = amount.add(optionPo.getPrice());
        }
        return amount;
    }
}
