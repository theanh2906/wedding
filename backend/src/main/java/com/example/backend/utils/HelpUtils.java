package com.example.backend.utils;

import com.example.backend.models.entities.Images;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.coobird.thumbnailator.Thumbnails;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.json.JSONObject;
import org.springframework.http.MediaType;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.Map;

public class HelpUtils {

    public static String decodeBase64Str(String base64) {
        return new String(Base64.getDecoder().decode(base64));
    }

    public static String encodeBase64Str(String json) {
        return Base64.getEncoder().encodeToString(json.getBytes());
    }

    public static <T> T getObjectFromEncodedStr(String encodedStr, Class<T> clazz) {
        ObjectMapper mapper = new ObjectMapper();
        String decodedStr = decodeBase64Str(encodedStr);
        try {
            return mapper.readValue(decodedStr, clazz);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String stringifyJson(Map json) {
        return new JSONObject(json).toString();
    }

    public static String stringifyJson(Object object) {
        return new JSONObject(object).toString();
    }

    public static String createBase64Image(byte[] bytes) {
        return "data:image/jpeg;base64," + toBase64(bytes);
    }

    public static String toBase64(byte[] bytes) {
        return Base64.getEncoder().encodeToString(bytes);
    }

    public static byte[] createThumbnailByteArr(byte[] source, int size) throws IOException {
        InputStream in = new ByteArrayInputStream(source);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Thumbnails.of(in).width(size).outputFormat("JPG").outputQuality(1).toOutputStream(outputStream);
        return outputStream.toByteArray();
    }
}
