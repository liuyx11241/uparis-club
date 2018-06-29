package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_Schedule")
public class SchedulePo extends AbstractPo {

    private String time;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @Column(nullable = false)
    private String activity;

    @ManyToOne(optional = false)
    private ItineraryPo itinerary;

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getNumOrder() {
        return numOrder;
    }

    public void setNumOrder(Integer numOrder) {
        this.numOrder = numOrder;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public ItineraryPo getItinerary() {
        return itinerary;
    }

    public void setItinerary(ItineraryPo itinerary) {
        this.itinerary = itinerary;
    }
}
