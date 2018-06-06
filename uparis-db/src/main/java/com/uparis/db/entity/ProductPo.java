package com.uparis.db.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "t_product")
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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductPo productPo = (ProductPo) o;
        return Objects.equals(id, productPo.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
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
