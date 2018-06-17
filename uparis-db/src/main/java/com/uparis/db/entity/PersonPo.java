package com.uparis.db.entity;

import com.uparis.db.constant.TypeGender;

import javax.persistence.*;

@Entity
@Table(name = "T_PERSON")
public class PersonPo extends AbstractPo {

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeGender gender;

    private String fullName;

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
    private String telephone;

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
