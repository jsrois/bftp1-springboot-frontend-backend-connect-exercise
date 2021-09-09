package org.example.exampleapp.repositories;

import org.example.exampleapp.entities.Cookie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CookieRepository extends JpaRepository<Cookie, Long> {}
