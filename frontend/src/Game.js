import './Test.css';
import Axios from 'axios';
import { useState } from "react";
import React, { useEffect } from "react";


const Game = () => {
    const url = 'http://localhost:8080/questionAnswers';
    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [questionArray, setQuestionArray] = useState("");
    const [text, setText] = useState("");
    useEffect(() => {
        Axios.get(url).then(response => {
            setQuestionArray(response.data.questionAnswers)
            setQuestion(response.data.questionAnswers[0].question);
            setCorrectAnswer(response.data.questionAnswers[0].correctAnswer)
            setAnswer2(response.data.questionAnswers[0].answer2)
            setAnswer3(response.data.questionAnswers[0].answer3)
            setAnswer4(response.data.questionAnswers[0].answer4)
        })
    }, [url])
    const checkAnswer = (e) => {
        console.log(correctAnswer)
        console.log(questionArray)
        console.log(e)

        console.log(e.target.innerText)
        if(e.target.innerText === correctAnswer){
            setText("Yeaboii")
        }
        else{
            setText("Noboii")
        }

    }
    return (
        <div className="grid-container">
            <div className="grid-item grid-item-1">{question}</div>
            <div className="grid-item grid-item-2" onClick={checkAnswer}>{correctAnswer} </div>
            <div className="grid-item grid-item-3"  onClick={checkAnswer}>{answer2}</div>
            <div className="grid-item grid-item-4"  onClick={checkAnswer}>{answer3}</div>
            <div className="grid-item grid-item-5"  onClick={checkAnswer}>{answer4}</div>
            <div className="grid-item grid-item-6" onClick={checkAnswer}>{text}</div>
        </div>
    )
}
export default Game;