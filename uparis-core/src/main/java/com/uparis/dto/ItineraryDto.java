package com.uparis.dto;

import java.util.ArrayList;
import java.util.List;

public class ItineraryDto {

    private String id;

    private String movement;

    private Integer dayStart;

    private Integer dayEnd;

    private String idProduct;

    private String idTrip;

    private List<ScheduleDto> listSchedule = new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Integer getDayEnd() {
        return dayEnd;
    }

    public void setDayEnd(Integer dayEnd) {
        this.dayEnd = dayEnd;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getIdTrip() {
        return idTrip;
    }

    public void setIdTrip(String idTrip) {
        this.idTrip = idTrip;
    }

    public List<ScheduleDto> getListSchedule() {
        return listSchedule;
    }

    public void setListSchedule(List<ScheduleDto> listSchedule) {
        this.listSchedule = listSchedule;
    }
}
