package com.uparis.dto;

import java.math.BigDecimal;

public class PriceDto extends AbstractDto {
    private BigDecimal value;

    private BigDecimal valueAddedTax;

    private String currency;

    private Long idTrip;

    private Long idOption;

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
}
