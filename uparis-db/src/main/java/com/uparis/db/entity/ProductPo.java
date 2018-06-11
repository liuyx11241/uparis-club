package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "T_PRODUCT")
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
    @OrderBy("date_start")
    private List<TripPo> listTrip;

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "product")
    @OrderBy("dayStart asc")
    private List<ItineraryRlt> listItinerary;

    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true, mappedBy = "product")
    @OrderBy("level asc, numOrder asc")
    private List<ProductOptionGroup> listOptionGroup;

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

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public List<TripPo> getListTrip() {
        return listTrip;
    }

    public void setListTrip(List<TripPo> listTrip) {
        this.listTrip = listTrip;
    }

    public List<ItineraryRlt> getListItinerary() {
        return listItinerary;
    }

    public void setListItinerary(List<ItineraryRlt> listItinerary) {
        this.listItinerary = listItinerary;
    }

    public List<ProductOptionGroup> getListOptionGroup() {
        return listOptionGroup;
    }

    public void setListOptionGroup(List<ProductOptionGroup> listOptionGroup) {
        this.listOptionGroup = listOptionGroup;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
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
