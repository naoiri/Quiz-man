import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Login () {
    
    const url = 'http://localhost:8080/accounts';
    const [account, setAccount] = useState('xxx')

    useEffect(() => {
        axios.get(url).then(response => {
            setAccount(response.data.accounts)
        })
    }, [url])

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      
      
      for(let i = 0; i<account.length; i++){
        if(account[i].email.trim() === e.target.email.value ){
          if(account[i].password.trim() === e.target.password.value){
            console.log("Welcome " + email + ", access granted!")
            setText("Welcome " + email + ", access granted!")
  
          }
        } else {
          console.log("Access deenied")
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
      </div>
    )
}
 
export default Login;