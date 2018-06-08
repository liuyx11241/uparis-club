package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "T_OPTION")
public class OptionPo {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;

}
