import React, { useEffect } from "react";
import axios from 'axios';

import { useState } from "react";

function Account() {

    const url = 'http://localhost:8080/accounts';
    const [account, setAccount] = useState('xxx')

    useEffect(() => {
        axios.get(url).then(response => {
            console.log("Maybe working now")
            setAccount(response.data.accounts)
            console.log(account[0].email);
            console.log("YEa boiiii")

        })
    }, [url])


    return (
        <div>
        </div>
    )



}

export default Account
