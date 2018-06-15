package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_OPTION_GROUP")
public class OptionGroupPo extends AbstractPo {
    private String name;

    private String description;

    @OneToMany(mappedBy = "optionGroup", cascade = CascadeType.REMOVE, orphanRemoval = true)
    @OrderBy("num_order asc")
    private List<OptionPo> listOption;
}
