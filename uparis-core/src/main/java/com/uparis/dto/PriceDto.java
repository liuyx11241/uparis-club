package com.uparis.dto;

import java.math.BigDecimal;

public class PriceDto {
    private BigDecimal value;

    private BigDecimal valueAddedTax;

    private String currency;

    private Long idTrip;

    private Long idOption;

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

    public Long getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(Long idTrip) {
        this.idTrip = idTrip;
    }

    public Long getIdOption() {
        return idOption;
    }

    public void setIdOption(Long idOption) {
        this.idOption = idOption;
    }

    public static PriceDto valueOf(BigDecimal value, String currency) {
        return new PriceDto(value, currency);
    }
}
