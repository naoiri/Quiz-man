import { FaLaughBeam } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaGrinBeamSweat } from 'react-icons/fa';

import { IconContext } from "react-icons";

import { useState } from "react";

const Game = () => {

    const [text, setText] = useState('Answer here')
    const checkAnswer = (e) => {

        if(e.target.innerText === 'Apa'){
            console.log("Rätt!")
            setText('Rätt!')
        } else {
            console.log("Fel!")
            setText('Fel!')
        }
    }

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

    return (
        <div className= "Game" style={{ fontSize: "30px" }}>
            
            <div className="figure" style={{
                fontSize: "30px",
                marginBottom: "10px"
            }}>Figure Area!
                <IconContext.Provider value={{ color: "#ff6b6b", size: "50px", backgroundColor: "red" }}>
                    <div>
                        <FaLaughBeam />
                        <FaSmile />
                        <FaGrinBeamSweat />
                    </div>
                </IconContext.Provider>
               
               
            </div>
            <div className="question"> 
                <p >Vad heter apan?</p>
            </div>
            <div className="text">
               <button value="Apa" onClick={(e)=> checkAnswer(e)}>Apa</button>
               <button onClick={(e)=> checkAnswer(e)}>Bpa</button>
               <button onClick={(e)=> checkAnswer(e)}>Cpa</button>
               <button onClick={(e)=> checkAnswer(e)}>Dpa</button>
               <p>{text}</p>

            </div>
            <div className='app'>
            {/* HINT: replace "false" with  oncklick logic to display the 
      score when the user has answered all the questions */}
            {false ? (
                <div className='score-section'>You scored 1 out of {questions.length}</div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question 1</span>/{questions.length}
                        </div>
                        <div className='question-text'>This is where the question text should go</div>
                    </div>
                    <div className='answer-section'>
                        <button>Answer 1</button>
                        <button>Answer 2</button>
                        <button>Answer 3</button>
                        <button>Answer 4</button>
                    </div>
                </>
            )}
        </div>
        </div>

    );
}

export default Game;
