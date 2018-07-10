package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_USER")
public class UserPo extends AbstractPo {
    @OneToOne(optional = false)
    private PersonPo person;

    @Column(nullable = false, length = 64, unique = true)
    private String username;

    @Column(nullable = false, length = 512)
    private String password;

    private boolean enabled;

    private String portraitUrl;

    public PersonPo getPerson() {
        return person;
    }

    public void setPerson(PersonPo person) {
        this.person = person;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPortraitUrl() {
        return portraitUrl;
    }

    public void setPortraitUrl(String portraitUrl) {
        this.portraitUrl = portraitUrl;
    }
}
