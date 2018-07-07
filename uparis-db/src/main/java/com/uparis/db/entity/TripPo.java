package com.uparis.db.entity;

import com.uparis.db.constant.TypeCurrency;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "T_TRIP")
public class TripPo extends AbstractPo {
    @Column(nullable = false, name = "date_start")
    private String dateStart;

    @Column(nullable = false)
    private String dateEnd;

    @Column(nullable = false)
    private Integer stock;

    @Column(nullable = false)
    private BigDecimal price;

    private BigDecimal priceVAT;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeCurrency currency;

    @ManyToOne(optional = false)
    private ProductPo product;

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("level asc, num_order asc")
    private List<OptionPo> listOption;

    @ManyToMany
    @JoinTable(name = "R_TRIP_LEADER",
            joinColumns = @JoinColumn(name = "ID_USER"),
            inverseJoinColumns = @JoinColumn(name = "ID_TRIP"))
    private List<UserPo> listLeader;

    public TripPo() {
        // Empty Constructor
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

    public TypeCurrency getCurrency() {
        return currency;
    }

    public void setCurrency(TypeCurrency currency) {
        this.currency = currency;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }

    public List<OptionPo> getListOption() {
        return listOption;
    }

    public void setListOption(List<OptionPo> listOption) {
        this.listOption = listOption;
    }
}
