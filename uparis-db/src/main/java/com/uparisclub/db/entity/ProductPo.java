package com.uparisclub.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class ProductPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    public ProductPo() {
        // Empty Constructor
    }

    public ProductPo(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("ProductPo{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
