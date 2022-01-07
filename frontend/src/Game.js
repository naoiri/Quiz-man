import './Test.css';
import Axios from 'axios';
import { useState } from "react";
import React, { useEffect } from "react";
import Animation from "./Animation";

const Game = () => {

    const[timer, setTimer] = useState();

    const [url, setUrl] = useState('')
    const [chosenCategory, setChosenCategory] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [text, setText] = useState("");
    const [scoreBoard, showScoreBoard] = useState(false)
    const [questionAnswers, setQuestionAnswers] = useState([])
    const [score, setScore] = useState(0)

    useEffect(() => {
        Axios.get(url).then(response => {
            setQuestionAnswers(response.data.questionAnswers)

        })
    }, [url])

    const handleAnswer = (e) => {
        if(e.target.innerText === questionAnswers[currentIndex].correctAnswer.trim()){
            setText("Correct!")
            setScore(score + 1)

        }
        else{
            setText("Incorrect...")
        }

        const nextIndex = currentIndex + 1;

        if(nextIndex < questionAnswers.length){
            setCurrentIndex(nextIndex);
        } else {
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
                    <Animation setValue = {setTimer}/>{/*Receives timer data from child component(Animation.js)*/}
                    <div className="grid-container">
                        {(() => {
                            if (timer === 0) {
                                return <div className="scoreBoard">Your score: {score}</div>
                            } else if(scoreBoard){
                                return <div className="scoreBoard">Your score: {score}</div>
                            } else {
                                return <div className='quiz-container'>
                                    <div className='question-text'>{questionAnswers[currentIndex]?.question}</div>
                                    <div className='answer-section'>
                                        <button onClick={handleAnswer}>{questionAnswers[currentIndex]?.correctAnswer}</button>
                                        <button onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer2}</button>
                                        <button onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer3}</button>
                                        <button onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer4}</button>
                                        <div>{text}</div>
                                    </div>
                                </div>
                            }


                        })()}
                    </div>


                </div>

            )}



        </div>
    )
}
export default Game;