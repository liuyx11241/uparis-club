package com.uparis.db.entity;

import com.uparis.db.constant.TypeOrderStatus;
import com.uparis.db.constant.TypePayment;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "T_ORDER")
public class OrderPo extends AbstractPo {

    @ManyToOne
    private PersonPo payer;

    @Enumerated(EnumType.STRING)
    private TypePayment paymentMode;

    @ManyToOne(optional = false)
    private TripPo trip;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeOrderStatus status;

    @Column(nullable = false)
    private BigDecimal amount;

    @ManyToOne(optional = false)
    private PersonPo participant;

    private String reference;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "R_ORDER_OPTION",
        joinColumns = @JoinColumn(name = "OPTION_ID"),
        inverseJoinColumns = @JoinColumn(name = "ORDER_ID"))
    private List<OptionPo> listOption;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true)
    private List<AnswerPo> listAnswer;

    public PersonPo getPayer() {
        return payer;
    }

    public void setPayer(PersonPo payer) {
        this.payer = payer;
    }

    public TypePayment getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(TypePayment paymentMode) {
        this.paymentMode = paymentMode;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }

    public TypeOrderStatus getStatus() {
        return status;
    }

    public void setStatus(TypeOrderStatus status) {
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

    public List<AnswerPo> getListAnswer() {
        return listAnswer;
    }

    public void setListAnswer(List<AnswerPo> listAnswer) {
        this.listAnswer = listAnswer;
    }
}
