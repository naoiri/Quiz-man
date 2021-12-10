package se.yrgo.quizman.quizman;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.yrgo.domain.Account;

import javax.swing.text.AbstractDocument;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/accounts")

public class PlayerController {
    private PlayerRepository playerRepository;
    private AbstractDocument.AbstractElement game;

    public PlayerController() {
    }

    /*– findByTitleContaining(): returns all Tutorials which title contains input title.*/
    public String listAll(Player player) {
        List<Player> listPlayer = playerRepository.findByTitleContaining();
        game.addAttribute("listPlayers", listPlayer);
        return "players";
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


