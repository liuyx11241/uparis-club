package com.uparis.db.repo;

import com.uparis.db.entity.SchedulePo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<SchedulePo, Long> {
}
