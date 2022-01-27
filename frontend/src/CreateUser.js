import React, {useState} from "react";
import {Link} from 'react-router-dom';

function CreateUser() {
    const axios = require('axios');
    const [created, setCreated] = useState(false);

    async function postData(e) {
        const email = e.target.email.value;
        const removeExtraSpace = (s) => s.trim().split(/ +/).join('');

        axios.post('http://localhost:8080/accounts', {
            email: removeExtraSpace(email),
            password: e.target.password.value,
            highscore: 0
        }).then(function (response) {
            console.log(response);
        })
        setCreated(true)
    }

    return (
        <div className="wrapper">
            Create User
            {created?(
                <div>Account created!
                    <Link to ="/login">
                        <button className="button">Login</button>
                    </Link>
                </div>
            ):(
                <form onSubmit={postData}>
                    <input type="text" name="email" placeholder="email"/>
                    <input type="text" name="password" placeholder="password"/>
                    <button className="button">Create</button>
                </form>
            )}

        </div>
    );
}
export default CreateUser;