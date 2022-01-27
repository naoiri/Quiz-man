import React from "react";

function CreateUser() {
    const axios = require('axios');
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
    }

    return (
        <div className="wrapper">
            Create User
            <form onSubmit={postData}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
                <button className="button">Create</button>
            </form>
        </div>
    );
}
export default CreateUser;