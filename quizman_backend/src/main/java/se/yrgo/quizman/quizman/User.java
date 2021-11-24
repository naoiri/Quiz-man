package se.yrgo.quizman.quizman;

@Entity
@Table(name = "user_tbl")
public class User {
    private int id;
    private String name;
    public User(){

    }
    public User(String name, int id){
        int id1 = this.id;
        String name1 = null;

    }
}
