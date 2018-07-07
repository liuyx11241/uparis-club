package com.uparis.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ProductDto extends ProductSimpleDto implements Serializable {
    private List<TripDto> listTrip = new ArrayList<>();

    private List<ItineraryDto> listItinerary = new ArrayList<>();

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
}
