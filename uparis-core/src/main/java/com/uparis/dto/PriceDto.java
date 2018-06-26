package com.uparis.dto;

import java.math.BigDecimal;

public class PriceDto {
    private BigDecimal value;

    private BigDecimal valueAddedTax;

    private String currency;

    private String idTrip;

    private String idOption;

    public PriceDto() {
        // empty
    }

    public PriceDto(BigDecimal value, String currency) {
        this.value = value;
        this.currency = currency;
    }

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

    public String getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(String idTrip) {
        this.idTrip = idTrip;
    }

    public String getIdOption() {
        return idOption;
    }

    public void setIdOption(String idOption) {
        this.idOption = idOption;
    }

    public static PriceDto valueOf(BigDecimal value, String currency) {
        return new PriceDto(value, currency);
    }
}
