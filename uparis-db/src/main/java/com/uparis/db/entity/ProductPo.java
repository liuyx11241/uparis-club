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
    @OneToMany(mappedBy = "product")
    @OrderBy("date_start")
    private List<TripPo> listTrip;

    @OneToMany(mappedBy = "product")
    @OrderBy("day_start asc")
    private List<ItineraryPo> listItinerary;

    @OneToMany(mappedBy = "product")
    private List<MultimediaPo> listMultimedia;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public List<TripPo> getListTrip() {
        return listTrip;
    }

    public void setListTrip(List<TripPo> listTrip) {
        this.listTrip = listTrip;
    }

    public List<ItineraryPo> getListItinerary() {
        return listItinerary;
    }

    public void setListItinerary(List<ItineraryPo> listItinerary) {
        this.listItinerary = listItinerary;
    }

    public List<MultimediaPo> getListMultimedia() {
        return listMultimedia;
    }

    public void setListMultimedia(List<MultimediaPo> listMultimedia) {
        this.listMultimedia = listMultimedia;
    }
}
