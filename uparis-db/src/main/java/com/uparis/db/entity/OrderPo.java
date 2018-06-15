package com.uparis.db.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "T_ORDER")
public class OrderPo extends AbstractPo {

    @ManyToOne(optional = false)
    private PersonPo payer;

    @ManyToOne(optional = false)
    private TripPo trip;

    private BigDecimal amount;

    @ManyToOne(optional = false)
    private PersonPo participant;

    @ManyToMany
    @JoinTable(name = "R_ORDER_OPTION",
            joinColumns = @JoinColumn(name = "OPTION_ID"),
            inverseJoinColumns = @JoinColumn(name = "ORDER_ID"))
    private List<OptionPo> listSelectedOption;

}
