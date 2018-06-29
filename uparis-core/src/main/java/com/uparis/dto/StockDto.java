package com.uparis.dto;

public class StockDto extends AbstractDto {
    private Integer quantity;

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public static StockDto valueOf(Integer quantity) {
        StockDto stock = new StockDto();
        stock.quantity = quantity;
        return stock;
    }
}
