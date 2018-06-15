package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_PRODUCT")
public class ProductPo extends AbstractPo {

    @Column(nullable = false)
    private String name;

    @Column(length = 32)
    private String alias;

    @Column(length = 128)
    private String shortDescription;

    @Column(length = 512)
    private String longDescription;

    @Column(nullable = false)
    private Integer duration;

    // Relationship
    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "product")
    @OrderBy("date_start")
    private List<TripPo> listTrip;

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "product")
    @OrderBy("day_start asc")
    private List<ItineraryPo> listItinerary;

    public ProductPo() {
        // Empty Constructor
    }

    public ProductPo(String name) {
        this(name, 1);
    }

    public ProductPo(String name, Integer duration) {
        this.name = name;
        this.duration = duration;
    }
}
