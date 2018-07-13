package com.uparis.dto;

import java.math.BigDecimal;
import java.util.List;

public class OrderDto extends AbstractDto {
    private String reference;

    private TripDto trip;

    private String status;

    private BigDecimal amount;

    private PersonDto payer;

    private String paymentMode;

    private PersonDto participant;

    private List<OptionDto> listOption;

    private List<AnswerDto> listAnswer;

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public PersonDto getPayer() {
        return payer;
    }

    public void setPayer(PersonDto payer) {
        this.payer = payer;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public PersonDto getParticipant() {
        return participant;
    }

    public void setParticipant(PersonDto participant) {
        this.participant = participant;
    }

    public List<OptionDto> getListOption() {
        return listOption;
    }

    public void setListOption(List<OptionDto> listOption) {
        this.listOption = listOption;
    }

    public List<AnswerDto> getListAnswer() {
        return listAnswer;
    }

    public void setListAnswer(List<AnswerDto> listAnswer) {
        this.listAnswer = listAnswer;
    }

    public TripDto getTrip() {
        return trip;
    }

    public void setTrip(TripDto trip) {
        this.trip = trip;
    }
}
