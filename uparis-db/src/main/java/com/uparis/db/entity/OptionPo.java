package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "T_OPTION")
public class OptionPo {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String description;

    @Column(nullable = false)
    private Integer numOrder;

    @ManyToOne(optional = false)
    private OptionGroupPo optionGroup;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
}
