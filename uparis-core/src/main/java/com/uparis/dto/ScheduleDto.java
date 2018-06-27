package com.uparis.dto;

public class ScheduleDto {

    private Long id;

    private Long idItinerary;

    private String time;

    private Integer numOrder;

    private String activity;

    public ScheduleDto() {
        //Serializable
    }

    public ScheduleDto(Long id, String time, Integer numOrder, String activity) {
        this.id = id;
        this.time = time;
        this.numOrder = numOrder;
        this.activity = activity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdItinerary() {
        return idItinerary;
    }

    public void setIdItinerary(Long idItinerary) {
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
