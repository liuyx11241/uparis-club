package com.uparis.dto;

import java.math.BigDecimal;

public class OptionDto {
    private Long id;

    private Long idTrip;

    private String name;

    private int level;

    private int numOrder;

    private String description;

    private PriceDto priceFactor;

    private StockDto stock;

    public OptionDto() {
        // Empty Constructor
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(Long idTrip) {
        this.idTrip = idTrip;
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

    public PriceDto getPriceFactor() {
        return priceFactor;
    }

    public void setPriceFactor(PriceDto priceFactor) {
        this.priceFactor = priceFactor;
    }

    public StockDto getStock() {
        return stock;
    }

    public void setStock(StockDto stock) {
        this.stock = stock;
    }

    public static OptionDto valueOf(Long idTrip, String name, int level, int numOrder, PriceDto priceFactor) {
        OptionDto option = new OptionDto();
        option.idTrip = idTrip;
        option.name = name;
        option.level = level;
        option.numOrder = numOrder;
        option.priceFactor = priceFactor;
        return option;
    }

    public static OptionDto valueOf(Long idTrip, String name, int level, int numOrder, BigDecimal priceFactor, String currency) {
        OptionDto option = new OptionDto();
        option.idTrip = idTrip;
        option.name = name;
        option.level = level;
        option.numOrder = numOrder;
        option.priceFactor = PriceDto.valueOf(priceFactor, currency);
        return option;
    }

    public static OptionDto valueOf(Long idTrip, String name, int level, int numOrder, BigDecimal priceFactor, String currency,
                                    Long idStock, Integer quantity, String description) {
        OptionDto option = new OptionDto();
        option.idTrip = idTrip;
        option.name = name;
        option.level = level;
        option.numOrder = numOrder;
        option.priceFactor = PriceDto.valueOf(priceFactor, currency);
        option.stock = StockDto.valueOf(idStock, quantity);
        option.description = description;
        return option;
    }

}
