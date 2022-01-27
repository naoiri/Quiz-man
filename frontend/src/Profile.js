import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';

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
            <div>
                <Link to="/game">
                    <button style={{backgroundColor: "#40F934"}}>Start a new game</button>
                </Link>
            </div>
        </div>
    )

}
export default Profile;