import React from 'react'
import ReactDOM from 'react-dom'
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore"
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Calendar from '../birthdayCalendar';
import { useAuth } from '../context/UserAuthContext'
import { AuthErrorCodes, sendEmailVerification, updateProfile} from 'firebase/auth'

 export const Register = () => {
    const navigate = useNavigate()
    const { SignUp} = useAuth()
    const [err, setError] = useState("")
    const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    password:"",
    email:"",
    address:""
    })
    const UserHandler = (e) => {
        const { name, value } = e.target;
        console.log(name +"::::::::::"+value)
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const { firstName, lastName, password, email, address } = user
        if (password == "" || firstName == "" || email == "" || lastName == "" || address == "") {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("please fill All the field ")
        }
        else if (!password.length >= 6) {
            setInterval(() => {
                setError("")
            }, 5000)
            return setError("Password Must be Greater then 6 Length")
        }
        else {
            try {
            await SignUp(firstName, lastName, password, email, address);
            alert("Success! Your Account is Registered.");
            navigate('/');
            } catch(err){
                if (err.code === "auth/email-already-in-use") {
                    setInterval(() => {
                        setError("")
                    }, 5000)
                    setError("email already in use try another email")
            }else if (err.code === AuthErrorCodes.WEAK_PASSWORD) {

                setInterval(() => {
                    setError("")
                }, 5000)
                setError("Password Must be more than 6 charecters")
            }

            else {
                setError(err.message)
            }
        }

    }
}
  

    const redirectLogin = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className = "auth-form-container">
                        {
            }
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2>Register</h2>
        <form className = "register-form" onSubmit = {SubmitHandler}>
            <input
            value = {user.firstName}
            onChange = {UserHandler}
            id = "First name"
            label = "First name"
            name = "firstName"
            placeholder = "First name"
            required
            >
            </input>
            <input
            value = {user.lastName}
            onChange = {UserHandler}
            id = "last name"
            label = "last name"
            name = "lastName"
            placeholder = "last name"
            required
            >
            </input>
            <input
            value = {user.password}
            onChange = {UserHandler}
            id = "password"
            label = "password"
            name = "password"
            placeholder = "password"
            required
            >
            </input>
            <input
            value = {user.email}
            onChange = {UserHandler}
            type = "email"
            id = "Email"
            label = "Email"
            name = "email"
            placeholder = "Email"
            required
            >
            </input>
            <label required>Date of birth:</label>
            <Calendar></Calendar>
            <input
            value = {user.address}
            onChange = {UserHandler}
            id = "Address"
            label = "Address"
            name = "address"
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
        <Link to ="/">
        <button
        >Already have an account? Login</button>
        </Link>
        </div>
    )
}