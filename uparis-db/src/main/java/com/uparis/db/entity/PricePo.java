package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "T_PRICE")
public class PricePo extends AbstractPo {

    private BigDecimal value;
    
    private BigDecimal valueAddedTax;

    private String currency;

    @ManyToOne
    private TripPo trip;

    @ManyToOne
    private OptionPo option;

}
