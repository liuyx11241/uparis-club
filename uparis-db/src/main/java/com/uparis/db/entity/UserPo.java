package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_User")
public class UserPo extends AbstractPo {
    @OneToOne(optional = false, orphanRemoval = true)
    private PersonPo person;

    private String login;

    private String password;

}
