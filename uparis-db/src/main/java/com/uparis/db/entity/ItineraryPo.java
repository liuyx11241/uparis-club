package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "T_ITINERARY")
public class ItineraryPo {

    @Id
    @GeneratedValue
    private Long id;

}
