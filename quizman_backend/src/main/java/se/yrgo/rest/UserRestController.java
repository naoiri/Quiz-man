package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.yrgo.data.UserRepository;
import se.yrgo.domain.User;

import java.util.List;

@RestController
public class UserRestController {

    @Autowired
    public UserRepository data;

    @RequestMapping("/users")
    public UserList allUsers(){
        List<User> users = data.findAll();
        return new UserList(users);
    }
}
