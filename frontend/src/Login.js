import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import axios from 'axios';

import { useState } from "react";
const Login = () => {
  const url = 'http://localhost:8080/accounts';
  const [account, setAccount] = useState('xxx')
  const [email, setEmail] = useState('xxx')
  const [password, setPassword] = useState('xxx')

  useEffect(() => {
      axios.get(url).then(response => {
          console.log("Maybe working now")
          setAccount(response.data.accounts)
          console.log(account[0].email);
          console.log("YEa boiiii")

      })
  }, [url])
    return ( 
      <div className="header">
        <h1>Welcome to the Gallows!</h1>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/category" >
            <button type="button" className="btn">
              Login
            </button>
          </Link>
        </div>
      </div>
     );
}
 
export default Login;