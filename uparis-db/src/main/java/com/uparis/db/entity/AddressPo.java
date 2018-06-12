package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "T_ADDRESS")
public class AddressPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String address;

    private String address2;

    @Column(nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String country;

    @ManyToOne(optional = false)
    private PersonPo person;
}
