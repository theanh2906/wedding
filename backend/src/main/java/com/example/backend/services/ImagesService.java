package com.example.backend.services;

import com.example.backend.mappers.ImagesMapper;
import com.example.backend.models.dtos.GalleryImage;
import com.example.backend.models.dtos.ImagesDto;
import com.example.backend.models.entities.Images;
import com.example.backend.repositories.ImagesRepository;
import com.example.backend.utils.HelpUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class ImagesService {
    private final Logger LOGGER = LoggerFactory.getLogger(getClass());
    @Autowired
    private ImagesRepository imagesRepository;

    @Transactional
    public List<ImagesDto> upload(List<MultipartFile> files, Integer type) {
        try {
            List<Images> result = files.stream().map(ImagesMapper::toEntity).collect(Collectors.toList());
            result.forEach(each -> each.setType(type));
            return imagesRepository.saveAll(result).stream().map(ImagesMapper::toDto).collect(Collectors.toList());
        } catch (Exception e) {
            LOGGER.error("Could not upload file {}", e.getLocalizedMessage());
        }
        return null;
    }

    public List<ImagesDto> getAllImages() {
        return imagesRepository.findAll().stream().map(ImagesMapper::toDto).collect(Collectors.toList());
    }

    public List<String> getNames() {
        return imagesRepository.getNames();
    }

    public ImagesDto getImage(String name) {
        return ImagesMapper.toDto(imagesRepository.findByNameIgnoreCase(name).orElse(new Images()));
    }

    public List<GalleryImage> getAllGalleryImages() {
        return imagesRepository.getNames().stream().map(ImagesMapper::toGalleryImage).collect(Collectors.toList());
    }
}
