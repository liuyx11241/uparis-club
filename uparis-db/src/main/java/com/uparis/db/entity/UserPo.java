package com.uparis.db.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_User")
public class UserPo extends AbstractPo {
    @OneToOne(optional = false, orphanRemoval = true)
    private PersonPo person;

    @ManyToOne
    private MultimediaPo portrait;

    private String login;

    private String password;

}
