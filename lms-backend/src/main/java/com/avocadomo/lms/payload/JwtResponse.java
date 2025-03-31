package com.avocadomo.lms.payload;

import com.avocadomo.lms.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private User user;
} 