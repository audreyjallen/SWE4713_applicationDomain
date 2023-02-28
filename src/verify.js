import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

export const Verify = () => {

    const [Email, setEmail] = useState("")
    const [UserID, setUserID] = useState("")
    const [cityQuestion, setCityQuestion] = useState("")
    const [bandQuestion, setBandQuestion] = useState("")
    const [maidenName, setMaidenName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData(e.currentTarget)
            const verificationResponse = await Verify(data.get('Email'), data.get('UserID'), data.get("cityQuestion"), data.get("bandQuestion"), data.get("maidenName")).then(Navigate("/reset"))
            console.log(verificationResponse)
        }
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className = "auth-form-container">
        <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
        <h2>Forgot password</h2>
        <p>To reset your password, please verify your identity:</p>
        <form className = "security-form" onSubmit = {handleSubmit}>
            <input
            type = "email"
            value = {Email}
            onChange = {(e) => setEmail(e.target.value)}
            name = "Email"
            id = "Email"
            label = "Email"
            placeholder = "Email"
            required
            >
            </input>
            <input
            type = "text"
            value = {UserID}
            onChange = {(e) => setUserID(e.target.value)}
            name = "UserID"
            id = "UserID"
            label = "UserID"
            placeholder = "User ID"
            required
            >
            </input>
            <label>Security question #1: What city were you born in?</label>
            <input
            type = "text"
            value = {cityQuestion}
            onChange = {(e) => setCityQuestion(e.target.value)}
            name = "cityQuestion"
            id = "cityQuestion"
            label = "cityQuestion"
            required
            >
            </input>
            <label>Security question #2: What is your favorite band?</label>
            <input
            type = "text"
            value = {bandQuestion}
            onChange = {(e) => setBandQuestion(e.target.value)}
            name = "bandQuestion"
            id = "bandQuestion"
            label = "bandQuestion"
            required
            >
            </input>
            <label>Security question #3: What is your mother's maiden name?</label>
            <input
            type = "text"
            value = {maidenName}
            onChange = {(e) => setMaidenName(e.target.value)}
            name = "maidenName"
            id = "maidenName"
            label = "maidenName"
            required
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