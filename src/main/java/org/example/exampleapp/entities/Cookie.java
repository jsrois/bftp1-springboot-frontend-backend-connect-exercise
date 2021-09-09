package org.example.exampleapp.entities;

import javax.persistence.*;

@Entity
@Table(name="cookies")
public class Cookie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private int calories;

    public Cookie() {

    }

    public Cookie(String name, String type, int calories) {
        this.name = name;
        this.type = type;
        this.calories = calories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }
}
