package com.akbartravels.travel.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "users") // Table name as specified
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password; // Storing hashed password

    @Enumerated(EnumType.STRING) // Store enum as String in DB
    @Column(nullable = false)
    private Role role;

    private String name; // Optional
}