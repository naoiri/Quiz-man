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

    const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password)
      
      console.log(account[0].email.trim(), account[0].password.trim())
      
      if(account[0].email.trim() === e.target.email.value ){
        console.log("Welcome!")
      } else {
        console.log("Bad")
      }

      /*
      for(let i = 0; i<account.length; i++){
         if(account[i].email === email){
           if(account[i].password === password){
             console.log("Welcome!");
           }
         }
      }*/

    }
  
    return ( 
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="email"></input>
          <input type="text" name="password" placeholder="password"></input>
          <button>Submit</button>
        </form>
      </div>
    )
}
 
export default Login;