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

    public BigDecimal getValue() {
        return value;
    }

    public void setValue(BigDecimal value) {
        this.value = value;
    }

    public BigDecimal getValueAddedTax() {
        return valueAddedTax;
    }

    public void setValueAddedTax(BigDecimal valueAddedTax) {
        this.valueAddedTax = valueAddedTax;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }

    public OptionPo getOption() {
        return option;
    }

    public void setOption(OptionPo option) {
        this.option = option;
    }
}
