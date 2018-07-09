package com.uparis.db.repo;

import com.uparis.db.constant.TypeOrderStatus;
import com.uparis.db.entity.OrderPo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderPo, Long> {
    List<OrderPo> findAllByReference(String reference);

    List<OrderPo> findAllByTrip_Id(Long idTrip);

    List<OrderPo> findAllByStatusEqualsAndTrip_Id(TypeOrderStatus status, Long idTrip);
}
