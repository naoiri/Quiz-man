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
                <input type="text" name="email" placeholder="email"/>
                <input type="text" name="password" placeholder="password"/>
                <button className="button">Create</button>
            </form>
        </div>
    );
}
export default CreateUser;