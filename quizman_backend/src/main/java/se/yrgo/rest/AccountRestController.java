package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.yrgo.data.AccountRepository;
import se.yrgo.domain.Account;
import se.yrgo.quizman.quizman.Player;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class AccountRestController {

    @Autowired
    public AccountRepository data;
    private SimpleJpaRepository playerRepository;

    @RequestMapping("/accounts")
    public AccountList allAccounts(){
        List<Account> accounts = data.findAll();
        return new AccountList(accounts);
    }

    @RequestMapping(value = "/accounts", method = RequestMethod.POST)
    public ResponseEntity createUser(@RequestBody Account account) {
        data.save(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }
    @GetMapping("/accounts/{id}")
    public void getPlayerById(@PathVariable("id") long id){
        Optional<Player> playerData = playerRepository.findById(id);
    //public Player getUserById(@PathVariable("id") long id, @RequestBody Player player) {
        //return player;
        return ;
    }
    @GetMapping
    public  ResponseEntity<List<Player>> getAllPlayers(@RequestParam(required = false) String name){
        try {
            List<Player> players = new ArrayList<Player>();
            if (players.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(players, HttpStatus.OK);
        }catch  (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            // if (name == null)
             //{

            // }
             //else
        }
    }



}
