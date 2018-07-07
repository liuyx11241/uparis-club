package com.uparis.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProductDto extends AbstractDto implements Serializable {

    @NotNull
    private String name;

    @Length(max = 32)
    private String alias;

    private String status;

    @Length(max = 128)
    private String shortDescription;

    @Length(max = 512)
    private String longDescription;

    @Min(1L)
    private Integer duration;

    private List<TripDto> listTrip = new ArrayList<>();

    private List<ItineraryDto> listItinerary = new ArrayList<>();

    private List<MultimediaDto> listMultimedia = new ArrayList<>();

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public List<TripDto> getListTrip() {
        return listTrip;
    }

    public void setListTrip(List<TripDto> listTrip) {
        this.listTrip = listTrip;
    }

    public List<ItineraryDto> getListItinerary() {
        return listItinerary;
    }

    public void setListItinerary(List<ItineraryDto> listItinerary) {
        this.listItinerary = listItinerary;
    }

    public List<MultimediaDto> getListMultimedia() {
        return listMultimedia;
    }

    public void setListMultimedia(List<MultimediaDto> listMultimedia) {
        this.listMultimedia = listMultimedia;
    }
}
