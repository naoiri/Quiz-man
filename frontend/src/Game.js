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
    //const [questionArray, setQuestionArray] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [text, setText] = useState("");
    const [test, setTest] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        Axios.get(url).then(response => {
            //setQuestionArray(response.data.questionAnswers)
            setData(response.data.questionAnswers)
            setQuestion(response.data.questionAnswers[currentQuestion].question);
            setCorrectAnswer(response.data.questionAnswers[currentQuestion].correctAnswer)
            setAnswer2(response.data.questionAnswers[currentQuestion].answer2)
            setAnswer3(response.data.questionAnswers[currentQuestion].answer3)
            setAnswer4(response.data.questionAnswers[currentQuestion].answer4)

            //setTest(response.data.questionAnswers[1].question)

        })
    }, [url])


    const handleAnswerButtonClick = () => {
        setCurrentQuestion(currentQuestion + 1)
        setQuestion(data[currentQuestion].question);
        console.log(question)
        console.log(currentQuestion) //0
        setCorrectAnswer(data[currentQuestion].correctAnswer)
        setAnswer2(data[currentQuestion].answer2)
        setAnswer3(data[currentQuestion].answer3)
        setAnswer4(data[currentQuestion].answer4)
    }
    const checkAnswer = (e) => {
        console.log(correctAnswer)
        console.log(e)
        console.log(question)


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
            <div className="grid-item grid-item-1" onClick={handleAnswerButtonClick}>{question}</div>
            <div className="grid-item grid-item-2" onClick={handleAnswerButtonClick}>{correctAnswer} </div>
            <div className="grid-item grid-item-3"  onClick={handleAnswerButtonClick}>{answer2}</div>
            <div className="grid-item grid-item-4"  onClick={handleAnswerButtonClick}>{answer3}</div>
            <div className="grid-item grid-item-5"  onClick={handleAnswerButtonClick}>{answer4}</div>
            <div className="grid-item grid-item-6" onClick={handleAnswerButtonClick}>{text}</div>
        </div>
    )
}
export default Game;