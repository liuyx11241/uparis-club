package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_PRODUCT_OPTION_GROUP")
public class ProductOptionGroup {
    @Id
    @GeneratedValue
    private Long id;

    private String type;

    @Column(nullable = false)
    private Integer level;

    @Column(nullable = false)
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;

    @ManyToOne(optional = false)
    private ProductPo product;



}
