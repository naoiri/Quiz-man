package se.yrgo.domain;

import javax.persistence.*;

@Entity
@Table(name= "player")
public class Account {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String email;
    private String password;
    private int highscore;

    public Account(){}

    public Account(Long id, String email, String password, int highscore) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.highscore = highscore;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public  long getId(){
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "email", nullable = false)
    public String getEmail(){
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "password", nullable = false)
    public String getPassword(){
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "highscore", nullable = false)
    public int getHighscore() {
        return highscore;
    }
    public void setHighscore(int highscore) {
        this.highscore = highscore;
    }


    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", highscore=" + highscore +
                '}';
    }


}
