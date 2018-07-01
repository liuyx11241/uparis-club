package com.uparis.db.repo;

import com.uparis.db.entity.StockPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<StockPo, Long> {
}
