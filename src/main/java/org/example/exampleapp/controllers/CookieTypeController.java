package org.example.exampleapp.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CookieTypeController {

    @GetMapping("/cookies/types")
    public List<String> cookieTypes() {
        return List.of("classic", "cereales", "chocolate");
    }
}
