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
    private Integer dayEnd;

    @ManyToOne
    private ProductPo product;

    @OneToMany(mappedBy = "itinerary", orphanRemoval = true)
    @OrderBy("num_order asc")
    private List<SchedulePo> listSchedule;
}
