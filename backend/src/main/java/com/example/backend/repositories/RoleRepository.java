package com.example.backend.repositories;

import com.example.backend.models.RoleEnum;
import com.example.backend.models.entities.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Roles, Long> {
    Optional<Roles> findByName(RoleEnum name);
}
