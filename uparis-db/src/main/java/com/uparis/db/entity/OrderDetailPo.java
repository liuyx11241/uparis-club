package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "T_ORDER_DETAIL")
public class OrderDetailPo extends AbstractPo {

    @ManyToOne(optional = false)
    private OrderPo order;

    @ManyToOne(optional = false)
    private PersonPo participant;

    @ManyToOne(optional = true)
    private OptionPo option;

    private BigDecimal subAmount;
}
