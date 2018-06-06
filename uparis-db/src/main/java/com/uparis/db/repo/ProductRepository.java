package com.uparis.db.repo;

import com.uparis.db.entity.ProductPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductPo, Long> {
    ProductPo findByName(String name);
}
