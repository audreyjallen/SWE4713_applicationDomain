import React from 'react'
import { useState } from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Calendar from './birthdayCalendar';

export const Register = (props) => {
    const [firstName, setFirst] = useState("")
    const [lastName, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
    }

    return (
        <div className = "auth-form-container">
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2>Register</h2>
        <form className = "register-form" onSubmit = {handleSubmit}>
            <input
            value = {firstName}
            onChange = {(e) => setFirst(e.target.value)}
            type = "text"
            name = "First name"
            placeholder = "First name"
            >
            </input>
            <input
            value = {lastName}
            onChange = {(e) => setLast(e.target.value)}
            type = "text"
            name = "Last name"
            placeholder = "Last name"
            >
            </input>
            <input
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            type = "email"
            name = "Email"
            placeholder = "Email"
            >
            </input>
            <label>Date of birth:</label>
            <Calendar></Calendar>
            <input
            value = {address}
            onChange = {(e) => setAddress(e.target.value)}
            type = "text"
            name = "Address"
            placeholder = "Address"
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
        onClick = {() => props.onFormSwitch("login")}
        >Already have an account? Login</button>
        </div>
    )
}