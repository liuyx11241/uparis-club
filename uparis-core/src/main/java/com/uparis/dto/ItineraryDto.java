package com.uparis.dto;

import java.util.ArrayList;
import java.util.List;

public class ItineraryDto {

    private Long id;

    private String movement;

    private Integer dayStart;

    private Integer duration;

    private Long idProduct;

    private Long idTrip;

    private List<ScheduleDto> listSchedule = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMovement() {
        return movement;
    }

    public void setMovement(String movement) {
        this.movement = movement;
    }

    public Integer getDayStart() {
        return dayStart;
    }

    public void setDayStart(Integer dayStart) {
        this.dayStart = dayStart;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public Long getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(Long idTrip) {
        this.idTrip = idTrip;
    }

    public List<ScheduleDto> getListSchedule() {
        return listSchedule;
    }

    public void setListSchedule(List<ScheduleDto> listSchedule) {
        this.listSchedule = listSchedule;
    }
}
