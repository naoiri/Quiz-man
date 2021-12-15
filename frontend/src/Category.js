import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import axios from "axios";

const Category = () => {

/*
    const url = 'http://localhost:8080/questionAnswers';
    const [questionAnswers, setQuestionAnswers] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [categorisedQuestions, setCategorisedQuestions] = useState([])



    const [scoreBoard, showScoreBoard] = useState(true)

    useEffect(() => {
        axios.get(url).then(response => {
            setQuestionAnswers(response.data.questionAnswers)

        })
    }, [])

    function chosenQuestions(category){
        setCategorisedQuestions([])
        for(let i = 0; i<questionAnswers.length; i++){
            if(questionAnswers[i].category.name === category){
                setCategorisedQuestions(prevArr =>
                    [...prevArr, questionAnswers[i]
                    ])
            }
        }
    }

    function setUp()

    function checkAnswer(e){
        if(e.target.innerText === categorisedQuestions)
    }
    */


    return (

        <div>
            Choose category:


        </div>
    )
}

export default Category;