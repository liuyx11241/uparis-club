package com.uparis.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "T_PICTURE")
public class PicturePo extends AbstractPo {

    @Column(nullable = false)
    private String srcUrl;

    private String altText;

    private String captionTitle;

    private String captionDescription;

}
