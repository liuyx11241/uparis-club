package com.uparis.dto;

public class StockDto {
    private Long id;

    private Integer quantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public static StockDto valueOf(Long id, Integer quantity) {
        StockDto stock = new StockDto();
        stock.id = id;
        stock.quantity = quantity;
        return stock;
    }
}
