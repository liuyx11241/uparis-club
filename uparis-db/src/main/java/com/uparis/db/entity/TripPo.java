package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_TRIP")
public class TripPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, name = "date_start")
    private String dateStart;

    @Column(nullable = false)
    private String dateEnd;

    @Column(nullable = false)
    private Integer stock;

    @ManyToOne(optional = false)
    private ProductPo product;

    @OneToMany(mappedBy = "trip", orphanRemoval = true)
    @OrderBy("day_start asc")
    private List<ItineraryPo> listItinerary;

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "trip")
    @OrderBy("level asc, num_order asc")
    private List<TripOptionGroup> listOptionGroup;

    @OneToMany(mappedBy = "trip", orphanRemoval = true)
    @OrderBy("level asc, num_order asc")
    private List<TripOption> listOption;

    @OneToMany(mappedBy = "trip", orphanRemoval = true)
    private List<OrderPo> listOrder;

    public TripPo() {
        // Empty Constructor
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public List<ItineraryPo> getListItinerary() {
        return listItinerary;
    }

    public void setListItinerary(List<ItineraryPo> listItinerary) {
        this.listItinerary = listItinerary;
    }

    public List<TripOption> getListOption() {
        return listOption;
    }

    public void setListOption(List<TripOption> listOption) {
        this.listOption = listOption;
    }
}
