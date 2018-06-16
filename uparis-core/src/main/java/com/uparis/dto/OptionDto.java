package com.uparis.dto;

import java.math.BigDecimal;

public class OptionDto {
    private String id;

    private String idTrip;

    private String name;

    private int level;

    private int numOrder;

    private BigDecimal priceFactor;

    private String priceFactorCurrency;

    private String idStock;

    private Integer quantity;

    private String description;

    public OptionDto() {
        // Empty Constructor
    }

    public OptionDto(String id, String idTrip, String name, int level, int numOrder, BigDecimal priceFactor, String priceFactorCurrency) {
        this.id = id;
        this.idTrip = idTrip;
        this.name = name;
        this.level = level;
        this.numOrder = numOrder;
        this.priceFactor = priceFactor;
        this.priceFactorCurrency = priceFactorCurrency;
    }

    public OptionDto(String id, String idTrip, String name, int level, int numOrder, BigDecimal priceFactor, String priceFactorCurrency, String idStock, Integer quantity, String description) {
        this.id = id;
        this.idTrip = idTrip;
        this.name = name;
        this.level = level;
        this.numOrder = numOrder;
        this.priceFactor = priceFactor;
        this.priceFactorCurrency = priceFactorCurrency;
        this.idStock = idStock;
        this.quantity = quantity;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(String idTrip) {
        this.idTrip = idTrip;
    }

    public String getIdStock() {
        return idStock;
    }

    public void setIdStock(String idStock) {
        this.idStock = idStock;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getNumOrder() {
        return numOrder;
    }

    public void setNumOrder(int numOrder) {
        this.numOrder = numOrder;
    }
}
