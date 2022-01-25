import React from "react";

function CreateQuestion() {

    const axios = require('axios');
    let cid;
    let correctAnswer;

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
        }).then(function (response) {
            console.log(response);
        })
    }

    return (
        <div>
            <h1>This is the Create Question Page</h1>
            <form onSubmit={postData}>
                <input type="number" name="category" placeholder="category" min="1" max="3"/>
                <div>1=Film, 2=Sport, 3=Biology</div>
                <input type="text" name="question" placeholder="question"/>
                <input type="text" name="answer1" placeholder="answer1"/>
                <input type="text" name="answer2" placeholder="answer2"/>
                <input type="text" name="answer3" placeholder="answer3"/>
                <input type="text" name="answer4" placeholder="answer4"/>
                <input type="number" name="correctanswer" placeholder="correct answer" min="1" max="4"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default CreateQuestion;