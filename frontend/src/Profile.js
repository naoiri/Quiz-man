import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Login from "./Login";

const Profile = () => {
    const url = 'http://localhost:8080/accounts/' + localStorage.getItem('userId');

    const [accounts, setAccounts] = useState('')
    const [login, setLogin] = useState(false);

    useEffect(() => {
        axios.get(url).then(response => {
            setAccounts(response.data)
            console.log("hej")
            console.log(response.data);
        })
    }, [url])

    return (
        <div>
           <h1>This is the profile page</h1>
            <h1>{accounts?.email}</h1>
            <h1>{accounts?.highscore}</h1>
        </div>
    )

}
export default Profile;