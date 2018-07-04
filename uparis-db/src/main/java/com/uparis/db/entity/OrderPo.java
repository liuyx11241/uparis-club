package com.uparis.db.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "T_ORDER")
public class OrderPo extends AbstractPo {

    @ManyToOne
    private PersonPo payer;

    @ManyToOne(optional = false)
    private TripPo trip;

    private BigDecimal amount;

    @ManyToOne(optional = false, cascade = CascadeType.PERSIST)
    private PersonPo participant;

    private String reference;

    @ManyToMany
    @JoinTable(name = "R_ORDER_OPTION",
            joinColumns = @JoinColumn(name = "OPTION_ID"),
            inverseJoinColumns = @JoinColumn(name = "ORDER_ID"))
    private List<OptionPo> listSelectedOption;

    public PersonPo getPayer() {
        return payer;
    }

    public void setPayer(PersonPo payer) {
        this.payer = payer;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public PersonPo getParticipant() {
        return participant;
    }

    public void setParticipant(PersonPo participant) {
        this.participant = participant;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public List<OptionPo> getListSelectedOption() {
        return listSelectedOption;
    }

    public void setListSelectedOption(List<OptionPo> listSelectedOption) {
        this.listSelectedOption = listSelectedOption;
    }
}
