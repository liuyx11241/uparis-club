package com.uparis.db.entity;

import com.uparis.db.constant.TypeContact;

import javax.persistence.*;

@Entity
@Table(name = "T_CONTACT")
public class ContactPo {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    @Enumerated(value = EnumType.STRING)
    private TypeContact type;

    @Column(nullable = false)
    private String value;

    @Column(nullable = false)
    private Integer numOrder;

    @ManyToOne(optional = false)
    private PersonPo person;

}
