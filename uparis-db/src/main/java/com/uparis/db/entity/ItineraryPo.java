package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_ITINERARY")
public class ItineraryPo extends AbstractPo {
    private String movement;

    @Column(nullable = false, name = "day_start")
    private Integer dayStart;

    @Column(nullable = false)
    private Integer duration;

    @ManyToOne(optional = false)
    private ProductPo product;

    @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("num_order asc")
    private List<SchedulePo> listSchedule;

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

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }

    public List<SchedulePo> getListSchedule() {
        return listSchedule;
    }

    public void setListSchedule(List<SchedulePo> listSchedule) {
        this.listSchedule = listSchedule;
    }
}
