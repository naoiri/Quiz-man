package se.yrgo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.yrgo.domain.QuestionAnswer;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import org.springframework.data.repository.query.Param;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionAnswer, Long> {

    @Query("SELECT qa FROM QuestionAnswer qa WHERE qa.category = 1")
    List<QuestionAnswer> getMovieQuestions();

    @Query("SELECT qa FROM QuestionAnswer qa WHERE qa.category = 2")
    List<QuestionAnswer> getSportQuestions();

    @Query("SELECT qa FROM QuestionAnswer qa WHERE qa.category = 3")
    List<QuestionAnswer> getBiologyQuestions();
}
