package com.uparis.dto;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class TripDto extends AbstractDto {
    private Long idProduct;

    private String nameProduct;

    private Integer durationProduct;

    private String dateStart;

    private String dateEnd;

    private Integer stock;

    private BigDecimal price;

    private BigDecimal priceVAT;

    private String currency;

    private String urlCodeQR;

    private List<OptionDto> listOption = new ArrayList<>();

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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getPriceVAT() {
        return priceVAT;
    }

    public void setPriceVAT(BigDecimal priceVAT) {
        this.priceVAT = priceVAT;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getUrlCodeQR() {
        return urlCodeQR;
    }

    public void setUrlCodeQR(String urlCodeQR) {
        this.urlCodeQR = urlCodeQR;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Integer getDurationProduct() {
        return durationProduct;
    }

    public void setDurationProduct(Integer durationProduct) {
        this.durationProduct = durationProduct;
    }

    public List<OptionDto> getListOption() {
        return listOption;
    }

    public void setListOption(List<OptionDto> listOption) {
        this.listOption = listOption;
    }
}
