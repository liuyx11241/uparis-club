package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_TRIP_ITINERARY")
public class TripItinerary {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(insertable = false, updatable = false)
    private TripPo trip;

    @ManyToOne(optional = false)
    @JoinColumn(insertable = false, updatable = false)
    private ItineraryPo itinerary;

    @Column(nullable = false)
    private Integer dayOrder;
}
