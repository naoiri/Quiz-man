import React from "react";

function CreateUser() {
    const axios = require('axios');

    async function postData(e) {
        axios.post('http://localhost:8080/accounts', {
            email: e.target.email.value,
            password: e.target.password.value,
            highscore: 10000
        }).then(function (response) {
            console.log(response);
        })
    }

    return (
        <div>
            <h1>This is the Create User Page</h1>
            <form onSubmit={postData}>
                <input type="text" name="email" placeholder="email"/>
                <input type="text" name="password" placeholder="password"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default CreateUser;



