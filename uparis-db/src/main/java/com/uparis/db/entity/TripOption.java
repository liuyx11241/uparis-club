package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_TRIP_OPTION")
public class TripOption {
    @Id
    @GeneratedValue
    private Long id;

    private String type;

    @Column(nullable = false)
    private Integer level;

    @Column(nullable = false)
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionPo option;

    @ManyToOne(optional = false)
    private TripPo trip;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getNumOrder() {
        return numOrder;
    }

    public void setNumOrder(Integer numOrder) {
        this.numOrder = numOrder;
    }

    public OptionPo getOption() {
        return option;
    }

    public void setOption(OptionPo option) {
        this.option = option;
    }
}
