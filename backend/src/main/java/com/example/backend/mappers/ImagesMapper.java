package com.example.backend.mappers;

import com.example.backend.models.Orientation;
import com.example.backend.models.dtos.GalleryImage;
import com.example.backend.models.dtos.ImagesDto;
import com.example.backend.models.entities.Images;
import com.example.backend.utils.HelpUtils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
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
            ImageIcon img = new ImageIcon(file.getBytes());
            final Images entity = new Images();
            entity.setName(file.getOriginalFilename());
            entity.setData(file.getBytes());
            entity.setCreatedDate(LocalDateTime.now());
            entity.setExtension(Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().lastIndexOf(".") + 1).toLowerCase());
            entity.setSize(file.getSize());
            if (img.getIconWidth() < img.getIconHeight()) {
                entity.setOrientation(Orientation.PORTRAIT);
            } else {
                entity.setOrientation(Orientation.LANDSCAPE);
            }
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
        dto.setThumbnailImageSrc("/api/images/thumbnails/" + name + "?s=1280");
        dto.setPreviewImageSrc("/api/images/thumbnails/" + name + "?s=1280");
        dto.setTitle(name);
        dto.setAlt(name);
        return dto;
    }
}
