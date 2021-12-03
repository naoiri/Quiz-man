import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Login () {
    
    const url = 'http://localhost:8080/accounts';
    const [account, setAccount] = useState('')

    useEffect(() => {
        axios.get(url).then(response => {
            setAccount(response.data.accounts)
        })
    }, [url])

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        //console.log(e)
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      
      
      for(let i = 0; i<account.length; i++){
        if(account[i].email.trim() === email){
          if(account[i].password.trim() === password){

            setText("Welcome " + email + ", access granted!")
          }
        } else {
          setText("Access denied")
        }
  
      }
    }
  
    return ( 
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="email"></input>
          <input type="text" name="password" placeholder="password"></input>
          <button>Submit</button>
          <div>{text}</div>
        </form>
          <Link to="/createuser">
          <button>Create User</button>
              <button className="startButton">Create New User</button>
          </Link>
      </div>
    )
}
 
export default Login;