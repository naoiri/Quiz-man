package se.yrgo.quizman.quizman;

import javax.swing.text.AbstractDocument;
import java.util.List;

public class PlayerController {
    private PlayerRepository playerRepository;
    private AbstractDocument.AbstractElement game;

    public String listAll(Player player) {
        List<Player> listPlayer = playerRepository.findAll();
        game.addAttribute("listPlayers", listPlayer);
        return "players";
    }
}
