package se.yrgo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.yrgo.data.QuestionRepository;
import se.yrgo.domain.QuestionAnswer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
public class QuestionRestController {

    @Autowired
    private QuestionRepository data;

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

    @RequestMapping(value = "/questionAnswers", method = RequestMethod.POST)
    public ResponseEntity createQuestion(@RequestBody QuestionAnswer qa) {
        data.save(qa);
        return new ResponseEntity<>(qa, HttpStatus.CREATED);
    }

}
