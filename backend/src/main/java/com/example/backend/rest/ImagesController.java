package com.example.backend.rest;

import com.example.backend.models.dtos.GalleryImage;
import com.example.backend.models.dtos.ImagesDto;
import com.example.backend.services.ImagesService;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/images")
public class ImagesController {
    @Autowired
    private ImagesService imagesService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") List<MultipartFile> file) {
        try {
            return ResponseEntity.ok().body(String.format("Successfully upload %s images", imagesService.upload(file).size()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(String.format("Failed to upload. Error: %s", e.getMessage()));
        }
    }

    @GetMapping("/{name}")
    public void getImage(@PathVariable String name, final HttpServletResponse response) throws IOException {
        InputStream in = new ByteArrayInputStream(imagesService.getImage(name).getData());
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        IOUtils.copy(in, response.getOutputStream());
    }

    @GetMapping("/thumbnails/{name}")
    public void getThumbnail(@PathVariable String name, final HttpServletResponse response) throws IOException {
        InputStream in = new ByteArrayInputStream(imagesService.getThumbnail(name));
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        IOUtils.copy(in, response.getOutputStream());
    }

    @GetMapping("/base64")
    public List<String> getImagesAsBase64() {
        try {
            return imagesService.getAllImages().stream().map(ImagesDto::getUrl).collect(Collectors.toList());
        } catch (Exception e){
            return new ArrayList<>();
        }
    }

    @GetMapping("/base64/{name}")
    public String getImageAsBase64(@PathVariable String name) {
        try {
            return imagesService.getImage(name).getUrl();
        } catch (Exception e){
            return "";
        }
    }

    @GetMapping("/names")
    public List<String> getImagesNames() {
        try {
            return imagesService.getNames();
        } catch (Exception e){
            return new ArrayList<>();
        }
    }

    @GetMapping("/gallery")
    public List<GalleryImage> getAllImagesForGallery() {
        try {
            return imagesService.getAllGalleryImages();
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }
}
