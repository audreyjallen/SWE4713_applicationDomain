import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import PasswordChecklist from 'react-password-checklist'
import AccountTreeIcon from '@mui/icons-material/AccountTree';


export const Reset = () => {

    const [password, setPassword] = useState('')

	const [passwordAgain, setPasswordAgain] = useState('')

	const handleSubmit = async (e) => {
        e.preventDefault()
        alert("Your password has been reset.")
    }

	const redirectLogin = (e) => {
		e.preventDefault()
		Navigate("/")
	}

	return (
		<div className = "auth-form-container">
		<h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
		<h2>Reset password</h2>
		<form
		onSubmit = {handleSubmit}
		>
			<label>New password:</label>
			<input type="password" onChange={e => setPassword(e.target.value)}/>
			<br/>
			<label>Repeat password:</label>
			<input type="password" onChange={e => setPasswordAgain(e.target.value)}/>

			<PasswordChecklist
				rules={["minLength", "letter", "number", "specialChar","match"]}
				minLength={8}
				value={password}
				valueAgain={passwordAgain}
				messages={{
					minLength: "Password must be at least 8 characters long.",
                    letter: "Password must contain at least 1 letter.",
                    number: "Password must contain at least 1 number.",
					specialChar: "Password must contain at least 1 special character.",
					match: "Passwords must match.",
				}}
			/>
			<Link to ="/">
            <button
            type = "submit"
            >
                Confirm password
            </button>
			<br/>
			</Link>
			<Link to ="/">
			<button
			>
				Login here
			</button>
			</Link>
		</form>
		</div>
	)
}