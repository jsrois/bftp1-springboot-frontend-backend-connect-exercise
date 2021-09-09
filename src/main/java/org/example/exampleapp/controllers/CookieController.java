package org.example.exampleapp.controllers;

import org.example.exampleapp.entities.Cookie;
import org.example.exampleapp.repositories.CookieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
}
