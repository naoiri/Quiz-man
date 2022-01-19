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