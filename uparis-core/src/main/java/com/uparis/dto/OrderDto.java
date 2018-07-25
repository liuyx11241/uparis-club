package com.uparis.dto;

import java.math.BigDecimal;
import java.util.List;

public class OrderDto extends AbstractDto {
    private String reference;

    private TripDto trip;

    private String status;

    private BigDecimal amount;

    private PersonSimpleDto payer;

    private String paymentMode;

    private String paymentToken;

    private PersonSimpleDto participant;

    private List<OptionDto> listOption;

    private List<AnswerDto> listAnswer;

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public PersonSimpleDto getPayer() {
        return payer;
    }

    public void setPayer(PersonSimpleDto payer) {
        this.payer = payer;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getPaymentToken() {
        return paymentToken;
    }

    public void setPaymentToken(String paymentToken) {
        this.paymentToken = paymentToken;
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

    public PersonSimpleDto getParticipant() {
        return participant;
    }

    public void setParticipant(PersonSimpleDto participant) {
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
