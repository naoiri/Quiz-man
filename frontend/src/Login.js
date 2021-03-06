import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Profile from './Profile.js'

const Login = () => {

    const url = 'http://localhost:8080/accounts';

    const [accounts, setAccounts] = useState('')
    const [login, setLogin] = useState(false);

    useEffect(() => {
        axios.get(url).then(response => {
            setAccounts(response.data.accounts)
        })
    }, [url])

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const typedEmail = e.target.email.value;
        const typedPassword = e.target.password.value;

        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i]?.email === typedEmail) {
                if (accounts[i]?.password === typedPassword) {
                    setText("Welcome ");
                    setLogin(true);
                    localStorage.setItem('userId', accounts[i].id);

                    break;
                }
            } else {
                setText("Access denied")
                setLogin(false)
            }
        }
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                {login ? (
                    <div style={{fontSize:"20px"}}>Welcome!
                        <Profile />
                    </div>

                ):(
                    <div>
                        <input type="email" name="email" placeholder="email"/>
                        <input type="password" name="password" placeholder="password"/>

                        <button className="button">Login</button>
                        <div className="button2">
                            <Link to="/createuser">
                                <button className="button">Create User</button>
                            </Link>
                        </div>
                        <div>{text}</div>
                    </div>

                )}



            </form>
        </div>
    )
}
export default Login;