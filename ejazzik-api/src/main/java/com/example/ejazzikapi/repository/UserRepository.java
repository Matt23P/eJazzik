package com.example.ejazzikapi.repository;

import com.example.ejazzikapi.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@EnableJpaRepositories
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByEmail(String email);
    UserEntity findById(int id);
    boolean existsByEmail(String email);
    boolean existsById(int id);
    void deleteById(int id);

    @Modifying
    @Transactional
    @Query("UPDATE UserEntity u SET u.firstName = :#{#user.firstName}, u.lastName = :#{#user.lastName}, u.email = :#{#user.email}, u.password = :#{#user.password}, u.phoneNumber = :#{#user.phoneNumber}, u.creationDate = :#{#user.creationDate} WHERE u.userId = :userId")
    void updateByUserId(@Param("userId") int userId, @Param("user") UserEntity user);
}
