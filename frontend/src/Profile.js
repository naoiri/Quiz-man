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
            <div>Your account: {account?.email}</div>
            <div>Highscore: {account?.highscore}</div>
        </div>
    )

}
export default Profile;