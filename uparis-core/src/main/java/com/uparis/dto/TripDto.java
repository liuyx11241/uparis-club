package com.uparis.dto;

import java.util.ArrayList;
import java.util.List;

public class TripDto extends AbstractDto {
    private Long idProduct;

    private String nameProduct;

    private Integer durationProduct;

    private String dateStart;

    private String dateEnd;

    private Integer stock;

    private PriceDto mainPrice;

    private List<PriceDto> listPrice = new ArrayList<>();

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

    public PriceDto getMainPrice() {
        return mainPrice;
    }

    public void setMainPrice(PriceDto mainPrice) {
        this.mainPrice = mainPrice;
    }

    public List<OptionDto> getListOption() {
        return listOption;
    }

    public void setListOption(List<OptionDto> listOption) {
        this.listOption = listOption;
    }

    public List<PriceDto> getListPrice() {
        return listPrice;
    }

    public void setListPrice(List<PriceDto> listPrice) {
        this.listPrice = listPrice;
    }
}
