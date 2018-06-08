package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "t_product")
public class ProductPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(length = 32)
    private String alias;

    @Column(length = 128)
    private String shortDescription;

    @Column(length = 512)
    private String longDescription;

    @Column(nullable = false)
    private Integer duration;

    // Relationship
    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "product")
    private List<TripPo> listJourney;

    public ProductPo() {
        // Empty Constructor
    }

    public ProductPo(String name) {
        this(name, 1);
    }

    public ProductPo(String name, Integer duration) {
        this.name = name;
        this.duration = duration;
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
