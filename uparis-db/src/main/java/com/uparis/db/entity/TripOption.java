package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "R_TRIP_OPTION")
public class TripOption extends AbstractPo {
    private String type;

    private Integer maxStock;

    @Column(nullable = false)
    private Integer level;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionPo option;

    @ManyToOne(optional = false)
    private TripPo trip;

    @OneToMany(mappedBy = "tripOption")
    private List<PricePo> listPrice;
}
