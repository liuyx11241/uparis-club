package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_TRIP_OPTION_GROUP")
public class TripOptionGroup extends AbstractPo {
    private Integer maxStock;

    @Column(nullable = false)
    private Integer level;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;

    @ManyToOne(optional = false)
    private TripPo trip;

}
