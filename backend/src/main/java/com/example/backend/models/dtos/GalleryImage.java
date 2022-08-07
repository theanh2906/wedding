package com.example.backend.models.dtos;

import lombok.Data;

import java.io.Serializable;

@Data
public class GalleryImage implements Serializable {
    private String previewImageSrc;
    private String thumbnailImageSrc;
    private String alt;
    private String title;
}
