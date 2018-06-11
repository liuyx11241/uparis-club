package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "R_PRODUCT_OPTION_GROUP")
public class ProductOptionGroup {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Integer level;

    @Column(nullable = false, name = "num_order")
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;

    @ManyToOne(optional = false)
    private ProductPo product;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public OptionGroupPo getOptionGroup() {
        return optionGroup;
    }

    public void setOptionGroup(OptionGroupPo optionGroup) {
        this.optionGroup = optionGroup;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }
}
