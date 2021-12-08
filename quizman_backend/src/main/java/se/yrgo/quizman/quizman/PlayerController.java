package se.yrgo.quizman.quizman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.AbstractDocument;
import java.util.List;
@RestController
@RequestMapping("/accounts")

public class PlayerController {
    private PlayerRepository playerRepository;
    private AbstractDocument.AbstractElement game;

    public String listAll(Player player) {
        List<Player> listPlayer = playerRepository.findAll();
        game.addAttribute("listPlayers", listPlayer);
        return "players";
    }
}
