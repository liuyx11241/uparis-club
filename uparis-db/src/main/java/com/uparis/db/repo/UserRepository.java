package com.uparis.db.repo;

import com.uparis.db.entity.UserPo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserPo, Long> {
    UserPo findByUsername(String username);
}
