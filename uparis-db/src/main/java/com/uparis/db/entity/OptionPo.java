package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_OPTION")
public class OptionPo extends AbstractPo {
    private String name;

    private String description;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @Column(nullable = false)
    private Integer level;

    @ManyToOne(optional = false)
    private TripPo trip;

    @ManyToOne
    private StockPo stock;

    @OneToMany(mappedBy = "tripOption")
    private List<PricePo> listPriceFactor;
}
