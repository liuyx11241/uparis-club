package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_OPTION")
public class OptionPo extends AbstractPo {
    private String name;

    private String description;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @Column(nullable = false)
    private Integer level;

    @ManyToOne(optional = false)
    private TripPo trip;

    @ManyToOne
    private StockPo stock;

    @OneToMany(mappedBy = "option")
    private List<PricePo> listPriceFactor;

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

    public Integer getNumOrder() {
        return numOrder;
    }

    public void setNumOrder(Integer numOrder) {
        this.numOrder = numOrder;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }

    public StockPo getStock() {
        return stock;
    }

    public void setStock(StockPo stock) {
        this.stock = stock;
    }

    public List<PricePo> getListPriceFactor() {
        return listPriceFactor;
    }

    public void setListPriceFactor(List<PricePo> listPriceFactor) {
        this.listPriceFactor = listPriceFactor;
    }
}
