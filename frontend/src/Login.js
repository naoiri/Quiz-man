import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const url = 'http://localhost:8080/accounts';
    const [account, setAccount] = useState('')
    const [login, setLogin] = useState(false);

    useEffect(() => {
        axios.get(url).then(response => {
            setAccount(response.data.accounts)
        })
    }, [url])

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();

      const typedEmail = e.target.email.value;
      const typedPassword = e.target.password.value;

      for(let i = 0; i<account.length; i++){
        if(account[i].email.trim() === typedEmail ){
          if(account[i].password.trim() === typedPassword){
            setText("Welcome " + typedEmail + ", access granted!");
            setLogin(true);
            break;
          }
        } else {
            setText("Access denied")
            setLogin(false)
        }
  
      }
    }
  
    return ( 
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="password"/>
          <button>Submit</button>
          <div>{text}</div>
            <div>
                {login &&
                <Link to="/category" >
                 <button style={{backgroundColor: "#40F934"}}>To category page</button></Link>}
            </div>
        </form>
      </div>
    )
}
 
export default Login;