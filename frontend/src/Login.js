import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


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
                    setText("Welcome " + typedEmail + ", access granted!");
                    setLogin(true);
                    userId = accounts[i].id;
                    localStorage.setItem('userId', userId);
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
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>

                <button>Submit</button>
                <div>{text}</div>
                <div>
                    {login &&
                    <Link to="/game">
                        <button style={{backgroundColor: "#40F934"}}>Start the game</button>
                    </Link>}
                </div>
            </form>
            <Link to="/createuser">
                <button>Create User</button>
            </Link>
        </div>
    )
}
export default Login;