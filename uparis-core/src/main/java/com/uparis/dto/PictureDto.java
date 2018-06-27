package com.uparis.dto;

public class PictureDto {
    private Long id;

    private Long idProduct;

    private String srcUrl;

    private String altText;

    private String title;

    private String description;

    public PictureDto() {
        //Serializable
    }

    public PictureDto(Long id, Long idProduct, String srcUrl, String altText, String title, String description) {
        this.id = id;
        this.idProduct = idProduct;
        this.srcUrl = srcUrl;
        this.altText = altText;
        this.title = title;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public String getSrcUrl() {
        return srcUrl;
    }

    public void setSrcUrl(String srcUrl) {
        this.srcUrl = srcUrl;
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
}
