package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "T_OPTION_GROUP")
public class OptionGroupPo {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String description;



}
