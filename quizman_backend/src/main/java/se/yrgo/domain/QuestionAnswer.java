package se.yrgo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.CascadeType;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;


@Entity
public class QuestionAnswer {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", referencedColumnName="id")
    private Category category;
    private String question;
    private String answer1;
    private String answer2;
    private String answer3;
    private String answer4;
    private String correctAnswer;

    public QuestionAnswer(){}

    public QuestionAnswer(Long id, Category category, String question, String answer1, String answer2, String answer3, String answer4, String correctAnswer) {
        this.id = id;
        this.category = category;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer1() {
        return answer1;
    }

    public void setAnswer1(String answer1) {
        this.answer1 = answer1;
    }

    public String getAnswer2() {
        return answer2;
    }

    public void setAnswer2(String answer2) {
        this.answer2 = answer2;
    }

    public String getAnswer3() {
        return answer3;
    }

    public void setAnswer3(String answer3) {
        this.answer3 = answer3;
    }

    public String getAnswer4() { return answer4; }

    public void setAnswer4(String answer4) { this.answer4 = answer4; }

    public String getCorrectAnswer() { return correctAnswer; }

    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }

}