package com.akbartravels.travel.controller;

import com.akbartravels.travel.model.User;
import com.akbartravels.travel.model.Role;
import com.akbartravels.travel.repository.UserRepository;
import com.akbartravels.travel.security.JwtUtils;
import com.akbartravels.travel.security.UserDetailsImpl;
import com.akbartravels.travel.payload.request.LoginRequest;
import com.akbartravels.travel.payload.request.SignupRequest;
import com.akbartravels.travel.payload.response.JwtResponse;
import com.akbartravels.travel.payload.response.MessageResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String role = userDetails.getRole().name(); // Get role as String

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getEmail(),
                role)); // Return role as String
    }

    @PostMapping("/register") // For agents to register themselves (or admin to register users)
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(null,
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                Role.valueOf(signUpRequest.getRole().toUpperCase()), // Convert string role to enum
                signUpRequest.getName());

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}