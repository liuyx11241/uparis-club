package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_PRODUCT_ITINERARY")
public class ProductItinerary {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(insertable = false, updatable = false)
    private ProductPo product;

    @ManyToOne(optional = false)
    @JoinColumn(insertable = false, updatable = false)
    private ItineraryPo itinerary;

    @Column(nullable = false)
    private Integer dayOrder;
}
