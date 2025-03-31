package com.avocadomo.lms.service;

import com.avocadomo.lms.dto.JwtResponse;
import com.avocadomo.lms.dto.LoginRequest;
import com.avocadomo.lms.dto.RegisterRequest;
import com.avocadomo.lms.dto.UserDto;
import com.avocadomo.lms.model.User;
import com.avocadomo.lms.repository.UserRepository;
import com.avocadomo.lms.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public JwtResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                loginRequest.getEmail(),
                loginRequest.getPassword()
            )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = tokenProvider.generateToken(authentication);
        User user = userRepository.findByEmail(loginRequest.getEmail())
            .orElseThrow(() -> new RuntimeException("User not found"));

        return new JwtResponse(token, convertToDto(user));
    }

    public JwtResponse register(RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            throw new RuntimeException("Email is already taken");
        }

        User user = new User();
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        
        // Set role
        Set<String> roles = new HashSet<>();
        String role = registerRequest.getRole() != null ? registerRequest.getRole().toUpperCase() : "STUDENT";
        roles.add("ROLE_" + role);
        user.setRoles(roles);

        User savedUser = userRepository.save(user);
        Authentication authentication = new UsernamePasswordAuthenticationToken(
            savedUser.getEmail(),
            savedUser.getPassword()
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = tokenProvider.generateToken(authentication);

        return new JwtResponse(token, convertToDto(savedUser));
    }

    public UserDto validateToken(String token) {
        Long userId = tokenProvider.getUserIdFromJWT(token);
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found"));
        return convertToDto(user);
    }

    public User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng"));
    }

    private UserDto convertToDto(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setRole(user.getRoles().iterator().next().replace("ROLE_", "")); // Loại bỏ prefix ROLE_
        return dto;
    }
} 