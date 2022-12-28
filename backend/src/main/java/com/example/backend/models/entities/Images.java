package com.example.backend.models.entities;

import com.example.backend.models.Orientation;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "IMAGES")
@Getter @Setter
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;
    @Column
    private String name;
    @Column
    private LocalDateTime createdDate;
    @Column
    private Long size;
    @Column
    private String extension;
    @Column
    private byte[] data;
    @Column
    private Integer type;
    @Column
    @Enumerated(EnumType.STRING)
    private Orientation orientation;
}
