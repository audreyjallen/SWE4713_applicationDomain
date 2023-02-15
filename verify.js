import React from 'react'
import { useState } from 'react'
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const Verify = () => {

    const [email, setEmail] = useState("")
    const [userID, setUserID] = useState("")
    const [cityQuestion, setCityQuestion] = useState("")
    const [bandQuestion, setBandQuestion] = useState("")
    const [maidenName, setMaidenName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className = "auth-form-container">
        <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
        <h2>Forgot password</h2>
        <p>To reset your password, please verify your identity:</p>
        <form className = "security-form" onSubmit = {handleSubmit}>
            <input
            type = "email"
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            name = "Email"
            placeholder = "Email"
            >
            </input>
            <input
            type = "text"
            value = {userID}
            onChange = {(e) => setUserID(e.target.value)}
            name = "UserID"
            placeholder = "User ID"
            >
            </input>
            <label>Security question #1: What city were you born in?</label>
            <input
            type = "text"
            value = {cityQuestion}
            onChange = {(e) => setCityQuestion(e.target.value)}
            name = "cityQuestion"
            >
            </input>
            <label>Security question #2: What is your favorite band?</label>
            <input
            type = "text"
            value = {bandQuestion}
            onChange = {(e) => setBandQuestion(e.target.value)}
            name = "bandQuestion"
            >
            </input>
            <label>Security question #3: What is your mother's maiden name?</label>
            <input
            type = "text"
            value = {maidenName}
            onChange = {(e) => setMaidenName(e.target.value)}
            name = "maidenName"
            >
            </input>
            <button
            type = "submit"
            >
                Verify and reset password
            </button>
        </form>
        </div>
    )
}