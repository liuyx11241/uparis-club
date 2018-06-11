package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_OPTION_GROUP")
public class OptionGroupPo {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String description;

    @OneToMany(mappedBy = "optionGroup", cascade = CascadeType.REMOVE, orphanRemoval = true)
    @OrderBy("num_order asc")
    private List<OptionPo> listOption;

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

    public List<OptionPo> getListOption() {
        return listOption;
    }

    public void setListOption(List<OptionPo> listOption) {
        this.listOption = listOption;
    }
}
