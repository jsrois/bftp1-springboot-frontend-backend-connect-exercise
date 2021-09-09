package org.example.exampleapp.repositories;

import org.example.exampleapp.entities.Cookie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class CookieDataLoader {


    private CookieRepository cookieRepository;

    @Autowired
    public CookieDataLoader(CookieRepository cookieRepository) {
        this.cookieRepository = cookieRepository;
    }

    @PostConstruct
    public void loadExampleCookies() {
        cookieRepository.deleteAll();
        cookieRepository.saveAll(List.of(
                new Cookie("Galleta dinosaurio", "cereales", 50),
                new Cookie("Príncipe", "chocolate", 100),
                new Cookie("Oreo", "chocolate", 120),
                new Cookie("Digestive", "cereales", 125),
                new Cookie("Maria Fontaneda", "classic", 30),
                new Cookie("American cookie", "chocolate", 3500)
        ));
    }
}
