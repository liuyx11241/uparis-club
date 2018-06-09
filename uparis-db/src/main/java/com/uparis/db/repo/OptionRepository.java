package com.uparis.db.repo;

import com.uparis.db.entity.OptionPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OptionRepository extends JpaRepository<OptionPo, Long> {
}
