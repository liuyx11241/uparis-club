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

    private String captionTitle;

    private String captionDescription;

    @ManyToOne
    private ProductPo product;

    @ManyToOne
    private UserPo user;

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

    public String getCaptionTitle() {
        return captionTitle;
    }

    public void setCaptionTitle(String captionTitle) {
        this.captionTitle = captionTitle;
    }

    public String getCaptionDescription() {
        return captionDescription;
    }

    public void setCaptionDescription(String captionDescription) {
        this.captionDescription = captionDescription;
    }

    public ProductPo getProduct() {
        return product;
    }

    public void setProduct(ProductPo product) {
        this.product = product;
    }

    public UserPo getUser() {
        return user;
    }

    public void setUser(UserPo user) {
        this.user = user;
    }
}
