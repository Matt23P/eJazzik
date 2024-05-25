package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByEmail(String email);
    UserEntity findById(int id);
    boolean existsByEmail(String email);
    boolean existsById(int id);
    void deleteById(int id);
    void updateByUserId(int id, UserEntity user);
}
