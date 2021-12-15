package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import se.yrgo.data.QuestionRepository;
import se.yrgo.domain.QuestionAnswer;


import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
public class QuestionRestController {

    @Autowired
    public QuestionRepository data;

    @RequestMapping("/questionAnswers")
    public QuestionList allQuestionAnswers(){
        List<QuestionAnswer> questionAnswers = data.findAll();
        return new QuestionList(questionAnswers);
    }

    @RequestMapping("/questionAnswers/movie")
    public QuestionList movieQuestionAnswers(){
        List<QuestionAnswer> questionAnswers = data.getMovieQuestions();

        return new QuestionList(questionAnswers);
    }

    @RequestMapping("/questionAnswers/sport")
    public QuestionList sportQuestionAnswers(){
        List<QuestionAnswer> questionAnswers = data.getSportQuestions();

        return new QuestionList(questionAnswers);
    }

    @RequestMapping("/questionAnswers/biology")
    public QuestionList biologyQuestionAnswers(){
        List<QuestionAnswer> questionAnswers = data.getBiologyQuestions();

        return new QuestionList(questionAnswers);
    }

}
