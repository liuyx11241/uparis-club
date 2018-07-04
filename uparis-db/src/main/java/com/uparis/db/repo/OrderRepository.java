package com.uparis.db.repo;

import com.uparis.db.entity.OrderPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderPo, Long> {
}
