package com.uparis.db.repo;

import com.uparis.db.entity.OrderPo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderPo, Long> {
    List<OrderPo> findAllByReference(String reference);
}
