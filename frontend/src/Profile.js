import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Profile = () => {
    const url = 'http://localhost:8080/accounts/' + localStorage.getItem('userId');

    const [accounts, setAccounts] = useState('')
    const [login, setLogin] = useState(false);

    useEffect(() => {
        axios.get(url).then(response => {
            setAccounts(response.data.accounts)
        })
    }, [url])

    return (
        <div>
           <h1>This is the profile page</h1>
            <h1>{accounts.email}</h1>
        </div>
    )

}