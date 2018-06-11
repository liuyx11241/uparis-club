package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "T_ITINERARY")
public class ItineraryPo {

    @Id
    @GeneratedValue
    private Long id;

    private String movement;

    @Column(nullable = false, name = "day_start")
    private Integer dayStart;

    @Column(nullable = false)
    private Integer dayEnd;

    @ManyToOne
    private ProductPo product;

    @ManyToOne
    private TripPo trip;

    @OneToMany(mappedBy = "itinerary", orphanRemoval = true)
    @OrderBy("num_order asc")
    private List<SchedulePo> listSchedule;

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

    public Integer getDayEnd() {
        return dayEnd;
    }

    public void setDayEnd(Integer dayEnd) {
        this.dayEnd = dayEnd;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }

    public List<SchedulePo> getListSchedule() {
        return listSchedule;
    }

    public void setListSchedule(List<SchedulePo> listSchedule) {
        this.listSchedule = listSchedule;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ItineraryPo that = (ItineraryPo) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id);
    }
}
