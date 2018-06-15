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
}
