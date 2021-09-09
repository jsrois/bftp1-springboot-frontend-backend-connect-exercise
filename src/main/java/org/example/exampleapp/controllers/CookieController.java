package org.example.exampleapp.controllers;

import org.example.exampleapp.entities.Cookie;
import org.example.exampleapp.repositories.CookieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class CookieController {

    private CookieRepository cookieRepository;

    @Autowired
    public CookieController(CookieRepository cookieRepository) {
        this.cookieRepository = cookieRepository;
    }

    @GetMapping("/cookies")
    public List<Cookie> allCookies() {
        return cookieRepository.findAll();
    }

    @PostMapping("/cookies")
    public Cookie saveCookie(@RequestBody Cookie cookie) {
        return cookieRepository.save(cookie);
    }

    @DeleteMapping("/cookies/{id}")
    public ResponseEntity<String> deleteCookie(@PathVariable Long id) {
        cookieRepository.deleteById(id);
        return ResponseEntity.of(Optional.of("eliminada cookie"));
    }
}
