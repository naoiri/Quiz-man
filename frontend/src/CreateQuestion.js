import React, {useState} from "react";

function CreateQuestion() {

    const axios = require('axios');
    let cid = 0;

    async function postData(e) {

        if(e.target.category.value === "Film"){
            cid = 1;
        } else if(e.target.category.value === "Sport"){
            cid = 2;
        } else if(e.target.category.value === "Biology"){
            cid = 3;
        }

        axios.post('http://localhost:8080/questionAnswers', {
            category: {
                id: cid,
                name: e.target.category.value
            },
            question: e.target.question.value,
            answer1: e.target.answer1.value,
            answer2: e.target.answer2.value,
            answer3: e.target.answer3.value,
            answer4: e.target.answer4.value,
            correctAnswer: e.target.correctanswer.value
        }).then(function (response) {
            console.log(response);
        })
    }

    return (
        <div>
            <h1>This is the Create Question Page</h1>
            <form onSubmit={postData}>
                <input type="text" name="category" placeholder="category"/>
                <input type="text" name="question" placeholder="question"/>
                <input type="text" name="answer1" placeholder="answer1"/>
                <input type="text" name="answer2" placeholder="answer2"/>
                <input type="text" name="answer3" placeholder="answer3"/>
                <input type="text" name="answer4" placeholder="answer4"/>
                <input type="text" name="correctanswer" placeholder="correct answer"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default CreateQuestion;