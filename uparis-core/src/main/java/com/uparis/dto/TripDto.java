package com.uparis.dto;

import java.math.BigDecimal;

public class TripDto {
    private String id;

    private String idProduct;

    private String dateStart;

    private String dateEnd;

    private Integer stock;

    private BigDecimal price;

    private String priceCurrency;

    public TripDto() {
        // Empty Constructor
    }

    public TripDto(String dateStart, String dateEnd, Integer stock) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.stock = stock;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(String dateStart) {
        this.dateStart = dateStart;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}
