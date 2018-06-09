package com.uparis.db.repo;

import com.uparis.db.entity.PricePo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceRepository extends JpaRepository<PricePo, Long> {
}
