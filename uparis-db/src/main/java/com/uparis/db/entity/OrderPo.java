package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "T_ORDER")
public class OrderPo extends AbstractPo {

    @ManyToOne(optional = false)
    private PersonPo payer;

    @ManyToOne(optional = false)
    private TripPo trip;

    private BigDecimal amount;

    @OneToMany(mappedBy = "order")
    private List<OrderDetailPo> listOrderDetail;
}
