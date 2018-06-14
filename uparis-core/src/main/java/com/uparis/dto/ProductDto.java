package com.uparis.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProductDto implements Serializable {
    private String id;

    @NotNull
    private String name;

    @Length(max = 32)
    private String alias;

    @Length(max = 128)
    private String shortDescription;

    @Length(max = 512)
    private String longDescription;

    @Min(1L)
    private Integer duration;

    private List<TripDto> listTrip = new ArrayList<>();

    private List<ItineraryDto> listItinerary = new ArrayList<>();

    private List<PictureDto> listPicture = new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public List<PictureDto> getListPicture() {
        return listPicture;
    }

    public void setListPicture(List<PictureDto> listPicture) {
        this.listPicture = listPicture;
    }
}
