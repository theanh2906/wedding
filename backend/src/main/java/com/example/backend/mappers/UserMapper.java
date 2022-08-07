package com.example.backend.mappers;

import com.example.backend.models.dtos.SignupRequest;
import com.example.backend.models.entities.Users;
import org.springframework.beans.BeanUtils;

public class UserMapper {
    public static Users toModel(SignupRequest dto) {
        final Users model = new Users();
        BeanUtils.copyProperties(dto, model);
        return model;
    }
}
