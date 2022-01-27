import "./CreateQuestion.css"
import React from "react";
import {Link} from 'react-router-dom';
function CreateQuestion() {

    const axios = require('axios');
    let cid;
    let correctAnswer;
    let create = false;

    async function postData(e) {

        cid = e.target.category.value;
        if(e.target.correctanswer.value === '1'){
            correctAnswer = e.target.answer1.value;
        } else if(e.target.correctanswer.value === '2') {
            correctAnswer = e.target.answer2.value;
        } else if(e.target.correctanswer.value === '3') {
            correctAnswer = e.target.answer3.value;
        } else if(e.target.correctanswer.value === '4') {
            correctAnswer = e.target.answer4.value;
        }

        axios.post('http://localhost:8080/questionAnswers', {
            category: {
                id: cid
            },
            question: e.target.question.value,
            answer1: e.target.answer1.value,
            answer2: e.target.answer2.value,
            answer3: e.target.answer3.value,
            answer4: e.target.answer4.value,
            correctAnswer: correctAnswer
        })

        create = true;

    }

    return (
        <div>
            <h1>Create your own question</h1>
            <div className="question-container">
            <form onSubmit={postData}>
                <input type="number" name="category" min="1" max="3"/>
                <div>1=Film, 2=Sport, 3=Biology</div>
                <label>Question</label>
                <input type="text" name="question" placeholder="question"/>
                <input type="text" name="answer1" placeholder="answer1"/>
                <input type="text" name="answer2" placeholder="answer2"/>
                <input type="text" name="answer3" placeholder="answer3"/>
                <input type="text" name="answer4" placeholder="answer4"/>
                <input type="number" name="correctanswer" min="1" max="4"/>
                <button className='button'>Submit</button>
            </form>

            <Link to="/login">
                <button className="button">To Login page</button>
            </Link>

                
            </div>
        </div>
    );
}
export default CreateQuestion;