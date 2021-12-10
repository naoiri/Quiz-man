package se.yrgo.quizman.quizman;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player,Long>{
    List<Player> findByTitleContaining(String username);

    //findAll();
}
