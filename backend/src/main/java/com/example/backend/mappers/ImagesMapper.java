package com.example.backend.mappers;

import com.example.backend.models.dtos.GalleryImage;
import com.example.backend.models.dtos.ImagesDto;
import com.example.backend.models.entities.Images;
import com.example.backend.utils.HelpUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Objects;

public class ImagesMapper {
    @Value("${root.url}")
    private static String API_URL;

    public static Images toEntity(ImagesDto dto) {
        final Images model = new Images();
        BeanUtils.copyProperties(dto, model);
        return model;
    }

    public static Images toEntity(MultipartFile file) {
        try {
            final Images entity = new Images();
            entity.setName(file.getOriginalFilename());
            entity.setData(file.getBytes());
            entity.setCreatedDate(LocalDateTime.now());
            entity.setExtension(Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().lastIndexOf(".") + 1).toLowerCase());
            entity.setSize(file.getSize());
            entity.setThumbnail(HelpUtils.createThumbnailByteArr(file.getBytes()));
            return entity;
        } catch (IOException e) {
            return null;
        }
    }

    public static ImagesDto toDto(Images model) {
        final ImagesDto dto = new ImagesDto();
        BeanUtils.copyProperties(model, dto);
        dto.setUrl(HelpUtils.createBase64Image(model.getData()));
        return dto;
    }

    public static GalleryImage toGalleryImage(Images entity) {
        final GalleryImage dto = new GalleryImage();
        dto.setThumbnailImageSrc("/api/images/thumbnails/" + entity.getName());
        dto.setPreviewImageSrc("/api/images/thumbnails/" + entity.getName());
        dto.setTitle(entity.getName());
        dto.setAlt(entity.getName());
        return dto;
    }

    public static GalleryImage toGalleryImage(String name) {
        final GalleryImage dto = new GalleryImage();
        dto.setThumbnailImageSrc("/api/images/thumbnails/" + name);
        dto.setPreviewImageSrc("/api/images/" + name);
        dto.setTitle(name);
        dto.setAlt(name);
        return dto;
    }
}
