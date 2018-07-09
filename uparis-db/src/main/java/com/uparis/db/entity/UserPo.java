package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_USER")
public class UserPo extends AbstractPo {
    @OneToOne(optional = false)
    private PersonPo person;

    @OneToOne(optional = true)
    private MultimediaPo portrait;

    private String login;

    private String passwordHashCode;

}
