package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_ITINERARY")
public class ItineraryRlt {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Integer dayStart;

    @Column(nullable = false)
    private Integer dayEnd;

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

    public Integer getDayStart() {
        return dayStart;
    }

    public void setDayStart(Integer dayStart) {
        this.dayStart = dayStart;
    }

    public Integer getDayEnd() {
        return dayEnd;
    }

    public void setDayEnd(Integer dayEnd) {
        this.dayEnd = dayEnd;
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
