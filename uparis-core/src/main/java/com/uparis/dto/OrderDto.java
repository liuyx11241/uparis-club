package com.uparis.dto;

import java.math.BigDecimal;
import java.util.List;

public class OrderDto extends AbstractDto {
    private String reference;

    private String idTrip;

    private String dateStartTrip;

    private String idProductTrip;

    private String nameProductTrip;

    private String status;

    private BigDecimal amount;

    private PersonDto payer;

    private PersonDto participant;

    private List<OptionDto> listSelectedOption;

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

    public List<OptionDto> getListSelectedOption() {
        return listSelectedOption;
    }

    public void setListSelectedOption(List<OptionDto> listSelectedOption) {
        this.listSelectedOption = listSelectedOption;
    }

    public String getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(String idTrip) {
        this.idTrip = idTrip;
    }

    public String getDateStartTrip() {
        return dateStartTrip;
    }

    public void setDateStartTrip(String dateStartTrip) {
        this.dateStartTrip = dateStartTrip;
    }

    public String getIdProductTrip() {
        return idProductTrip;
    }

    public void setIdProductTrip(String idProductTrip) {
        this.idProductTrip = idProductTrip;
    }

    public String getNameProductTrip() {
        return nameProductTrip;
    }

    public void setNameProductTrip(String nameProductTrip) {
        this.nameProductTrip = nameProductTrip;
    }
}
