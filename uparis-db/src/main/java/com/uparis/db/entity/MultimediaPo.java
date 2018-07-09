package com.uparis.db.entity;

import com.uparis.db.constant.TypeMultimedia;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_MULTIMEDIA")
public class MultimediaPo extends AbstractPo {

    @Column(nullable = false)
    private String srcUrl;

    @Column(nullable = false)
    private TypeMultimedia type;

    private String altText;

    private String title;

    private String description;

    @ManyToOne
    private ProductPo product;

    public String getSrcUrl() {
        return srcUrl;
    }

    public void setSrcUrl(String srcUrl) {
        this.srcUrl = srcUrl;
    }

    public TypeMultimedia getType() {
        return type;
    }

    public void setType(TypeMultimedia type) {
        this.type = type;
    }

    public String getAltText() {
        return altText;
    }

    public void setAltText(String altText) {
        this.altText = altText;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }
}
