package com.uparis.db.entity;

import com.uparis.db.constant.TypeMultimedia;

import javax.persistence.Column;
import javax.persistence.Entity;
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

}
