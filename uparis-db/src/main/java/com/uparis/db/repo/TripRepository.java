package com.uparis.db.repo;

import com.uparis.db.entity.TripPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<TripPo, Long> {
}
