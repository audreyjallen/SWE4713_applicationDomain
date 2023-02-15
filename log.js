import React from 'react'
import { useState } from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const Log = (props) => {

    const [Username, setUsername] = useState("")

    const [Password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Username);
    }

    return (
        <div className = "auth-form-container">
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2>Login</h2>
        <form className = "login-form" onSubmit = {handleSubmit}>
            <input
            value = {Username}
            onChange = {(e) => setUsername(e.target.value)}
            type = "text"
            name = "UserID"
            placeholder = "User ID"
            >
            </input>
            <input
            type = "password"
            value = {Password}
            onChange = {(e) => setPassword(e.target.value)}
            name = "Password"
            placeholder = "Password"
            >
            </input>
            <button
            className = "link-btn"
            >
                Forgot password?
            </button>
            <button
            type = "submit"
            >
            Login
            </button>
        </form>
        <button
        className = "link-btn"
        onClick = {() => props.onFormSwitch("register")}
        >Don't have an account? Register now</button>
        </div>
    )
}