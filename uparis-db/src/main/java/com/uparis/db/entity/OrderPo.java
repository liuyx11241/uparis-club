package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_ORDER")
public class OrderPo {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(optional = false)
    private PersonPo payer;

    @ManyToOne(optional = false)
    private TripPo trip;

    @ManyToMany
    @JoinTable(name = "R_ORDER_PERSON")
    private List<PersonPo> listParticipant;

}
