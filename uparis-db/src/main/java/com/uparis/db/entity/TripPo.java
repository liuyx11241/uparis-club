package com.uparis.db.entity;

import javax.persistence.*;

@Entity
@Table(name = "t_trip")
public class TripPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String dateStart;

    @Column(nullable = false)
    private String dateEnd;

    @ManyToOne(optional = false)
    private ProductPo product;

    public TripPo() {
        // Empty Constructor
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(String dateStart) {
        this.dateStart = dateStart;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
        this.dateEnd = dateEnd;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }
}
