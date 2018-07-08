package com.uparis.db.repo;

import com.uparis.db.entity.TagPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<TagPo, Long> {
}
