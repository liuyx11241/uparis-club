package com.uparis.db.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "T_CATEGORY")
public class CategoryPo {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "category")
    private List<ProductPo> listProduct;

}
