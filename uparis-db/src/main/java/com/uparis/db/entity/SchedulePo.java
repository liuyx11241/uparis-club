package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "T_Schedule")
public class SchedulePo {
    @Id
    @GeneratedValue
    private Long id;

    private String time;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @Column(nullable = false)
    private String activity;

    @ManyToOne(optional = false)
    private ItineraryPo itinerary;

}
