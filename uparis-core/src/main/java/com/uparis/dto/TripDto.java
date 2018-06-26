package com.uparis.dto;

import java.util.List;
import java.util.SortedMap;
import java.util.TreeMap;

public class TripDto {
    private String id;

    private String idProduct;

    private String nameProduct;

    private String dateStart;

    private String dateEnd;

    private Integer stock;

    private PriceDto mainPrice;

    private SortedMap<String, PriceDto> mappedPrice = new TreeMap<>();

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

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public PriceDto getMainPrice() {
        return mainPrice;
    }

    public void setMainPrice(PriceDto mainPrice) {
        this.mainPrice = mainPrice;
    }

    public SortedMap<Integer, List<OptionDto>> getMappedListOption() {
        return mappedListOption;
    }

    public void setMappedListOption(SortedMap<Integer, List<OptionDto>> mappedListOption) {
        this.mappedListOption = mappedListOption;
    }

    public SortedMap<String, PriceDto> getMappedPrice() {
        return mappedPrice;
    }

    public void setMappedPrice(SortedMap<String, PriceDto> mappedPrice) {
        this.mappedPrice = mappedPrice;
    }
}
