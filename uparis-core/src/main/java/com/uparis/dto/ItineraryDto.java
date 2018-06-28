package com.uparis.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ItineraryDto implements Comparable<ItineraryDto> {

    private Long id;

    private String movement;

    private Integer dayStart;

    private Integer duration;

    private Long idProduct;

    private List<ScheduleDto> listSchedule = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItineraryDto that = (ItineraryDto) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public int compareTo(ItineraryDto o) {
        if (this.equals(o)) {
            return 0;
        }
        return Objects.compare(this.dayStart, o.dayStart, Integer::compareTo);
    }

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

    public List<ScheduleDto> getListSchedule() {
        return listSchedule;
    }

    public void setListSchedule(List<ScheduleDto> listSchedule) {
        this.listSchedule = listSchedule;
    }
}
