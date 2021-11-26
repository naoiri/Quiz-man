import React, { useEffect, useState } from "react";
import axios from 'axios';

function Account() {

    const url = 'http://localhost:8080/accounts';
    const [account, setAccount] = useState('')

    useEffect(() => {
        axios.get(url).then(response => {
            setAccount(response.data.accounts)

        })
    }, [url])


    return (
        <div>
            <h1>{account[0].id}</h1>
            <h1>{account[0].email}</h1>
            <h1>{account[0].password}</h1>
            <h1>{account[0].highscore}</h1>

            <h1>{account[1].id}</h1>
            <h1>{account[1].email}</h1>
            <h1>{account[1].password}</h1>
            <h1>{account[1].highscore}</h1>
        </div>
    )



}

export default Account
