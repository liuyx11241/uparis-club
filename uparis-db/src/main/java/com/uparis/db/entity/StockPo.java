package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "T_STOCK")
public class StockPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Integer value;

    @ManyToOne(optional = false)
    private TripPo trip;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public TripPo getTrip() {
        return trip;
    }

    public void setTrip(TripPo trip) {
        this.trip = trip;
    }

    public OptionGroupPo getOptionGroup() {
        return optionGroup;
    }

    public void setOptionGroup(OptionGroupPo optionGroup) {
        this.optionGroup = optionGroup;
    }
}
