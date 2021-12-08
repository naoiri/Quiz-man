import React from "react";

function CreateUser() {
    const axios = require('axios');

    async function postData(e) {
        axios.post('http://localhost:8080/accounts', {
            email: e.target.email.value,
            password: e.target.password.value,
            highscore: 0
        }).then(function (response) {
            console.log(response);
        })
    }
    async function getData(e) {
        await axios.get('http://localhost:8080/accounts', {
            id: e.target.id.value,
            password: e.target.password.value

        })

    }
    //export default axios.create({
        //baseURL:'http://localhost:8080/accounts',
        //headers:{
            //"Content-type": "application/json"
       // }
   // })

    return (
        <div>
            <h1>This is the Create User Page</h1>
            <form onSubmit={postData}>
                <input type="text" name="email" placeholder="email"/>
                <input type="text" name="password" placeholder="password"/>
                <button>Submit</button>
            </form>

            <div>
                <button onClick={getData}>Test</button>
            </div>
        </div>

    );
}
export default CreateUser;