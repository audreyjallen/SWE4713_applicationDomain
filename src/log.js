import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const Log = (props) => {

    const [Username, setUsername] = useState("")

    const [Password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData(e.currentTarget)
            const loginResponse = await Log(data.get('UserID'), data.get('Password')).then(Navigate("/home"))
            console.log(loginResponse)
        }
        catch (error) {
            alert(error.message)
        }
    }

    const redirectRegister = (e) => {
        e.preventDefault()
        Navigate("/register")
    }

    const redirectForgotPass = (e) => {
        e.preventDefault()
        Navigate("/verify")
    }

    return (
        <div className = "auth-form-container">
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2>Login</h2>
        <form className = "login-form" onSubmit = {handleSubmit}>
            <input
            value = {Username}
            onChange = {(e) => setUsername(e.target.value)}
            name = "UserID"
            id = "UserID"
            label = "UserID"
            placeholder = "User ID"
            required
            >
            </input>
            <input
            type = "password"
            value = {Password}
            onChange = {(e) => setPassword(e.target.value)}
            name = "Password"
            label = "Password"
            id = "Password"
            placeholder = "Password"
            required
            >
            </input>
            <button
            className = "link-btn"
            onClick = {redirectForgotPass}
            href = "/verify"
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
        onClick = {redirectRegister}
        href = "/register"
        >Don't have an account? Register now</button>
        </div>
    )
}