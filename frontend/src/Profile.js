import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>

                <button>Submit</button>
                <div>{text}</div>
                <div>
                    {login &&
                    <Link to="/game" >
                        <button style={{backgroundColor: "#40F934"}}>Start the game</button></Link>}
                </div>
            </form>
            <Link to="/createuser">
                <button>Create User</button>
            </Link>
        </div>
    )

}