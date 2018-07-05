package com.uparis.db.entity;

import com.uparis.db.constant.TypeStatus;

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

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeStatus status;

    private BigDecimal amount;

    @ManyToOne(optional = false, cascade = CascadeType.PERSIST)
    private PersonPo participant;

    private String reference;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "R_ORDER_OPTION",
            joinColumns = @JoinColumn(name = "OPTION_ID"),
            inverseJoinColumns = @JoinColumn(name = "ORDER_ID"))
    private List<OptionPo> listOption;

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

    public TypeStatus getStatus() {
        return status;
    }

    public void setStatus(TypeStatus status) {
        this.status = status;
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

    public List<OptionPo> getListOption() {
        return listOption;
    }

    public void setListOption(List<OptionPo> listOption) {
        this.listOption = listOption;
    }
}
