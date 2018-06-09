package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_ITINERARY")
public class ItineraryRlt {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Integer numOrder;

    @ManyToOne(optional = false)
    private ItineraryPo itinerary;

    @ManyToOne
    private ProductPo product;

    @ManyToOne
    private TripPo trip;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumOrder() {
        return numOrder;
    }

    public void setNumOrder(Integer numOrder) {
        this.numOrder = numOrder;
    }

    public ItineraryPo getItinerary() {
        return itinerary;
    }

    public void setItinerary(ItineraryPo itinerary) {
        this.itinerary = itinerary;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }
}
