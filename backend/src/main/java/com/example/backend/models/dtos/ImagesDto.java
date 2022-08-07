package com.example.backend.models.dtos;

import lombok.Data;

import java.io.Serializable;

@Data
public class ImagesDto implements Serializable {
    private Long id;
    private String name;
    private String createdDate;
    private Integer size;
    private String url;
    private byte[] data;
}
