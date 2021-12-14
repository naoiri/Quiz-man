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
    const [currentIndex, setCurrentIndex] = useState(0)
    const [text, setText] = useState("");
    const [data, setData] = useState("");
    const [scoreBoard, showScoreBoard] = useState(false)

    useEffect(() => {
        Axios.get(url).then(response => {
            setData(response.data.questionAnswers)
            setQuestion(response.data.questionAnswers[currentIndex].question);
            setCorrectAnswer(response.data.questionAnswers[currentIndex].correctAnswer)
            setAnswer2(response.data.questionAnswers[currentIndex].answer2)
            setAnswer3(response.data.questionAnswers[currentIndex].answer3)
            setAnswer4(response.data.questionAnswers[currentIndex].answer4)

        })
    }, [url])


    const handleAnswerButtonClick = (e) => {

        if(e.target.innerText === correctAnswer.trim()){
               setText("Correct!")
        }
        else{
               setText("Incorrect...")
        }
        setCurrentIndex(currentIndex + 1)
        if(currentIndex < data.length){
                setQuestion(data[currentIndex].question);
                setCorrectAnswer(data[currentIndex].correctAnswer)
                setAnswer2(data[currentIndex].answer2)
                setAnswer3(data[currentIndex].answer3)
                setAnswer4(data[currentIndex].answer4)
        }
        else{
        showScoreBoard(true)
        }



    }

    return (
        <div className="grid-container">
            {scoreBoard ? (
                <div className="scoreBoard">Yea Boiii!</div>
            )   :     (
                <>
                <div className="grid-item grid-item-1">{question}</div>
                <div className="grid-item grid-item-2" onClick={handleAnswerButtonClick}>{correctAnswer} </div>
                <div className="grid-item grid-item-3"  onClick={handleAnswerButtonClick}>{answer2}</div>
                <div className="grid-item grid-item-4"  onClick={handleAnswerButtonClick}>{answer3}</div>
                <div className="grid-item grid-item-5"  onClick={handleAnswerButtonClick}>{answer4}</div>
                <div className="grid-item grid-item-6" onClick={handleAnswerButtonClick}>{text}</div>
                </>

            )}

        </div>
    )
}
export default Game;