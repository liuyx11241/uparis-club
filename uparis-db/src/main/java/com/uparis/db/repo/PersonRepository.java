package com.uparis.db.repo;

import com.uparis.db.entity.PersonPo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PersonRepository extends JpaRepository<PersonPo, Long> {
    Optional<PersonPo> findOptionalByBirthdayAndWechat(String birthday, String wechat);

    Page<PersonPo> findAllByListGrantedAuthority(String grantedAuthority, Pageable pageable);
}
