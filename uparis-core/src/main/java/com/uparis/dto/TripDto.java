package com.uparis.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.SortedMap;
import java.util.TreeMap;

public class TripDto {
    private String id;

    private String idProduct;

    private String dateStart;

    private String dateEnd;

    private Integer stock;

    private BigDecimal price;

    private String priceCurrency;

    private SortedMap<Integer, List<OptionDto>> mappedListOption = new TreeMap<>();

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

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getPriceCurrency() {
        return priceCurrency;
    }

    public void setPriceCurrency(String priceCurrency) {
        this.priceCurrency = priceCurrency;
    }

    public SortedMap<Integer, List<OptionDto>> getMappedListOption() {
        return mappedListOption;
    }

    public void setMappedListOption(SortedMap<Integer, List<OptionDto>> mappedListOption) {
        this.mappedListOption = mappedListOption;
    }
}
