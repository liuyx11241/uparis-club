package com.uparis.db.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "T_PRICE")
@MappedSuperclass
public class PricePo {

    @Id
    @GeneratedValue
    private Long id;

    private BigDecimal value;

    private String currency;

}
