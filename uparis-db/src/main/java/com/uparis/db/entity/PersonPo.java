package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "T_PERSON")
public class PersonPo extends AbstractPo {

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String birthday;

    @Column(nullable = false)
    private String birthplace;

    @Column(nullable = false)
    private String wechat;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String address;

    private String addressComplement;

    @Column(nullable = false)
    private String zipCode;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String country;

}
