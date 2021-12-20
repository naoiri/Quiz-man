import './Test.css';
import Axios from 'axios';
import { useState } from "react";
import React, { useEffect } from "react";
import Timer from "./Timer"


const Game = () => {

    const [timer, resetTimer] = useState(false)
    const [url, setUrl] = useState('')
    const [chosenCategory, setChosenCategory] = useState(null)

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

    const handleAnswer = (e) => {
        resetTimer(true) //Send the press to Timer component



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

    const handleCategory = (e) =>{
        const category = e.target.innerText.toLowerCase();
        setUrl('http://localhost:8080/questionAnswers/'+ category);
        setChosenCategory(category);
    }

    return (
        <div>
            {chosenCategory==null ? (
                <div >
                    <h1>Choose category</h1>
                    <button onClick={handleCategory}>Movie</button>
                    <button onClick={handleCategory}>Sport</button>
                    <button onClick={handleCategory}>Biology</button>
                </div>
            ):(
                <div>
                    <h1>Category: {chosenCategory}</h1>
                    <div className="grid-container">

                        {scoreBoard ? (
                            <div className="scoreBoard">Your score: </div>
                        )   :     (
                            <>
                                <Timer />
                                <div className="grid-item grid-item-1">{question}</div>
                                <button className="grid-item grid-item-2" onClick={handleAnswer}>{correctAnswer} </button>
                                <button className="grid-item grid-item-3" onClick={handleAnswer}>{answer2}</button>
                                <button className="grid-item grid-item-4" onClick={handleAnswer}>{answer3}</button>
                                <button className="grid-item grid-item-5" onClick={handleAnswer}>{answer4}</button>
                                <div className="grid-item grid-item-6">{text}</div>
                            </>

                        )}
                    </div>

                </div>

            )}



        </div>
    )
}
export default Game;