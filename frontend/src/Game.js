import './Test.css';
import Axios from 'axios';
import {useState} from "react";
import React, {useEffect} from "react";
import Animation from "./Animation";
import {FaRegLaughWink} from 'react-icons/fa';


const Game = () => {

    const [timer, setTimer] = useState();

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
        if (e.target.innerText === questionAnswers[currentIndex].correctAnswer?.trim()) {
            setText("Correct!")
            setScore(score + 1)

        } else {
            setText("Incorrect...")
        }

        const nextIndex = currentIndex + 1;

        if (nextIndex < questionAnswers.length) {
            setCurrentIndex(nextIndex);
        } else {
            showScoreBoard(true)
        }

    }

    const handleCategory = (e) => {
        const category = e.target.innerText.toLowerCase();
        setUrl('http://localhost:8080/questionAnswers/' + category);
        setChosenCategory(category);
    }
    async function updateHighscore(){
        Axios.patch('http://localhost:8080/accounts/'+localStorage.getItem('userId')+ '/'+ score)
    }
    const gameAreaSwitch = () =>{ //This function returns a component
        if(scoreBoard){
            updateHighscore()
            return (
                <div className="score-board-win">
                    <h2>Brilliant job, Quizman survived! </h2> <br/>
                    <FaRegLaughWink className="fa-icons" style={{fontSize:'90px'}}/>
                    <h2>Your score: {score} </h2>
                </div>
            )
        } else if (timer===0) {
            updateHighscore()
            return (
                <div className="score-board-lose">
                    <Animation setValue={setTimer} />{/*Receives timer data from child component(Animation.js)*/}
                    <h2>Time is up! Quizman is now dead. </h2>
                    <h2>Your score: {score} </h2>
                </div>

            )
        } else {
            return (
                <div className='quiz-container'>
                    <Animation setValue={setTimer} />{/*Receives timer data from child component(Animation.js)*/}
                    <div className='question-text'>{questionAnswers[currentIndex]?.question}</div>
                    <div className='option1' onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer1}</div>
                    <div className='option2' onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer2}</div>
                    <div className='option3' onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer3}</div>
                    <div className='option4' onClick={handleAnswer}>{questionAnswers[currentIndex]?.answer4}</div>
                    <div>{text}</div>
                </div>
            )
        }

    }

    return (
        <div>
            {chosenCategory == null ? (
                <div className='container'>
                    <h1>Choose category</h1>
                    <button className='button' style={{marginLeft: '10px'}} onClick={handleCategory}>Movie</button>
                    <button className='button' style={{marginLeft: '10px'}} onClick={handleCategory}>Sport</button>
                    <button className='button' style={{marginLeft: '10px'}} onClick={handleCategory}>Biology</button>
                </div>
            ) : (
                <div>
                    <h1>Category: {chosenCategory}</h1>

                    <div className="grid-container">
                        {gameAreaSwitch()}
                    </div>
                </div>

            )}

        </div>
    )
}
export default Game;