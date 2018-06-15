package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "T_STOCK")
public class StockPo extends AbstractPo {

    private Integer quantity;

    @OneToMany(mappedBy = "stock")
    private List<OptionPo> listOption;
}
