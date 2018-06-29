package com.uparis.dto;

public class OptionDto extends AbstractDto {

    private Long idTrip;

    private String name;

    private int level;

    private int numOrder;

    private String description;

    private PriceDto priceFactor;

    private StockDto stock;

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
}
