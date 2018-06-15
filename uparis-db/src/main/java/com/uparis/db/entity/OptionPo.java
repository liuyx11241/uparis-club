package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_OPTION")
public class OptionPo extends AbstractPo {
    private String name;

    private String description;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;
}
