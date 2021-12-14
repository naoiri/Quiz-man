package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.yrgo.data.QuestionRepository;
import se.yrgo.domain.QuestionAnswer;

import java.util.List;

@RestController
public class QuestionRestController {

    @Autowired
    public QuestionRepository data;

    @RequestMapping("/questionAnswers")
    public QuestionList allQuestionAnswers(){
        List<QuestionAnswer> questionAnswers = data.findAll();
        return new QuestionList(questionAnswers);
    }

    @RequestMapping("/questionAnswers/movies")
    public QuestionList movieQuestionAnswers(){
        List<QuestionAnswer> questionAnswers = data.getMovieQuestions();

        return new QuestionList(questionAnswers);
    }

}
