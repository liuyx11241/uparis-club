package com.uparis.db.entity;

import javax.persistence.*;
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

    @ManyToOne(optional = false)
    private ProductPo product;

    @OneToMany(mappedBy = "trip")
    private List<PricePo> listPrice;

    @OneToMany(mappedBy = "trip", orphanRemoval = true)
    @OrderBy("level asc, num_order asc")
    private List<OptionPo> listOption;

    @OneToMany(mappedBy = "trip", orphanRemoval = true)
    private List<OrderPo> listOrder;

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

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }
}
