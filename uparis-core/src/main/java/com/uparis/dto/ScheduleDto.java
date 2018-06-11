package com.uparis.dto;

public class ScheduleDto {

    private String id;

    private String idItinerary;

    private String time;

    private Integer numOrder;

    private String activity;

    public ScheduleDto() {
        //Serializable
    }

    public ScheduleDto(String id, String time, Integer numOrder, String activity) {
        this.id = id;
        this.time = time;
        this.numOrder = numOrder;
        this.activity = activity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdItinerary() {
        return idItinerary;
    }

    public void setIdItinerary(String idItinerary) {
        this.idItinerary = idItinerary;
    }

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
}
