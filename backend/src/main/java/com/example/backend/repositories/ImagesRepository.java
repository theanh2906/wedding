package com.example.backend.repositories;

import com.example.backend.models.entities.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImagesRepository extends JpaRepository<Images, String> {
    Optional<Images> findByNameIgnoreCase(String name);
    @Query("SELECT i.name FROM Images i")
    List<String> getNames();
    @Query("SELECT i.name FROM Images i WHERE i.type = :folder")
    List<String> getNamesWithFolder(Integer folder);

    @Query("SELECT i.name, i.size FROM Images i")
    List<Images> getMigrateData();
}
