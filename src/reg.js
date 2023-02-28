import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Calendar from './birthdayCalendar';

export const Register = (props) => {

    const [firstName, setFirst] = useState("")

    const [lastName, setLast] = useState("")

    const [email, setEmail] = useState("")

    const [address, setAddress] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        alert("Your request has been sent to an administrator for approval.")
    }

    const redirectLogin = (e) => {
        e.preventDefault()
        Navigate("/")
    }

    return (
        <div className = "auth-form-container">
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2>Register</h2>
        <form className = "register-form" onSubmit = {handleSubmit}>
            <input
            value = {firstName}
            onChange = {(e) => setFirst(e.target.value)}
            id = "First name"
            label = "First name"
            name = "First name"
            placeholder = "First name"
            required
            >
            </input>
            <input
            value = {lastName}
            onChange = {(e) => setLast(e.target.value)}
            id = "Last name"
            label = "Last name"
            name = "Last name"
            placeholder = "Last name"
            required
            >
            </input>
            <input
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            type = "email"
            id = "Email"
            label = "Email"
            name = "Email"
            placeholder = "Email"
            required
            >
            </input>
            <label required>Date of birth:</label>
            <Calendar></Calendar>
            <input
            value = {address}
            onChange = {(e) => setAddress(e.target.value)}
            id = "Address"
            label = "Address"
            name = "Address"
            placeholder = "Address"
            required
            >
            </input>
            <button
            type = "submit"
            >
            Request access
            </button>
        </form>
        <button
        className = "link-btn"
        onClick = {redirectLogin}
        >Already have an account? Login</button>
        </div>
    )
}