package se.yrgo.rest;

import se.yrgo.domain.User;

import java.util.List;

public class UserList {

    private List<User> users;

    public UserList() {};

    public UserList(List<User> users) {
        this.users = users;
    }

    //@XmlElement(name="vehicle")
    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

}
