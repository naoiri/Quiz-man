import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import axios from "axios";

const Category = () => {

    const url = 'http://localhost:8080/questionAnswers';
    const [questionAnswers, setQuestionAnswers] = useState('');
    const [categorisedQuestions, setCategorisedQuestions] = useState([])

    useEffect(() => {
        axios.get(url).then(response => {
            setQuestionAnswers(response.data.questionAnswers)
        })
    }, [])

    function showQuestions(category){
        setCategorisedQuestions([])
        for(let i = 0; i<questionAnswers.length; i++){
            if(questionAnswers[i].category.name === category){
                setCategorisedQuestions(prevArr =>
                    [...prevArr, questionAnswers[i]
                    ])
            }
        }

    }

    return (

        <div>
            CategoryTest page
            <button onClick={()=>showQuestions('Film')}>Film</button>
            <button onClick={()=>showQuestions('Sport')}>Sport</button>
            <button onClick={()=>showQuestions('Biologi')}>Biologi</button>
            <div>
                {
                    categorisedQuestions.map(question => <h1>{ question.question}, {question.category.name }</h1> )
                }
            </div>
        </div>
    )
}

export default Category;