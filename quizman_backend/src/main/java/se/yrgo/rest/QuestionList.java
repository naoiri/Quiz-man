package se.yrgo.rest;

import se.yrgo.domain.QuestionAnswer;

import java.util.List;

public class QuestionList {
    private List<QuestionAnswer> questionAnswers;

    public QuestionList() {};

    public QuestionList(List<QuestionAnswer> questionAnswers) {
        this.questionAnswers = questionAnswers;
    }

    public List<QuestionAnswer> getQuestionAnswers() {
        return questionAnswers;
    }

    public void setQuestionAnswers(List<QuestionAnswer> questionAnswers) {
        this.questionAnswers = questionAnswers;
    }

}
