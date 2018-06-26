package com.uparis.dto;

public class StockDto {
    private String id;

    private Integer quantity;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public static StockDto valueOf(String id, Integer quantity) {
        StockDto stock = new StockDto();
        stock.id = id;
        stock.quantity = quantity;
        return stock;
    }
}
