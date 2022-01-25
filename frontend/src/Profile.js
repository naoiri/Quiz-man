import React, { useState, useEffect } from 'react';
import axios from "axios";

const Profile = () => {
    const url = 'http://localhost:8080/accounts/' + localStorage.getItem('userId');

    const [account, setAccount] = useState('')

    useEffect(() => {
        axios.get(url).then(response => {
            setAccount(response.data)
        })
    }, [url])

    return (
        <div>
           <h1>This is the profile page</h1>
            <h1>{account?.email}</h1>
            <h1>{account?.highscore}</h1>
        </div>
    )

}
export default Profile;