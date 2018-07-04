package com.uparis.db.repo;

import com.uparis.db.entity.PersonPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<PersonPo, Long> {
    PersonPo findByWechat(String wechat);
}
