package com.uparis.db.repo;

import com.uparis.db.entity.ItineraryPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItineraryRepository extends JpaRepository<ItineraryPo, Long> {
}
