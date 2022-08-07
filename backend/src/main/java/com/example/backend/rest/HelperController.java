package com.example.backend.rest;

import com.example.backend.models.dtos.LoginRequest;
import com.example.backend.models.dtos.ResponseDto;
import com.example.backend.utils.HelpUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/helpers")
public class HelperController {

    @PostMapping("/encode-login")
    public String encodeLogin(@RequestBody LoginRequest loginRequest) {
        String json = HelpUtils.stringifyJson(loginRequest);
        return HelpUtils.encodeBase64Str(json);
    }

    @PostMapping("/encode")
    public ResponseEntity<ResponseDto<String>> encode(@RequestBody String string) {
        String encodedStr = "";
        try {
            encodedStr = HelpUtils.encodeBase64Str(string);
            return ResponseEntity.ok(new ResponseDto<>(true, encodedStr));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ResponseDto<>(false, e.getLocalizedMessage()));
        }
    }
}
