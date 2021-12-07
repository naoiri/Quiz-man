package se.yrgo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.yrgo.domain.QuestionAnswer;

@Repository
public interface QuestionRepository extends JpaRepository<QuestionAnswer, Long> {
}
