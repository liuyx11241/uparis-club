package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

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

    @OneToMany(mappedBy = "person", orphanRemoval = true)
    private List<AddressPo> listAddress;

}
