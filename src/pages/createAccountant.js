import React from 'react'
import ReactDOM from 'react-dom'
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore"
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Calendar from '../birthdayCalendar';
import { useAuth } from '../context/UserAuthContext'
import { AuthErrorCodes, sendEmailVerification} from 'firebase/auth'

 export const CreateAccountant = () => {
    const navigate = useNavigate()
    const { SignUpAccountant} = useAuth()
    const [err, setError] = useState("")
    const [accountant, setManager] = useState({
    firstName:"",
    lastName:"",
    password:"",
    email:"",
    address:""
    })
    
    const UserHandler = (e) => {
        const { name, value } = e.target;
        console.log(name +"::::::::::"+value)
        setManager((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const { firstName, lastName, password, email, address } = accountant
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
        }
        else {
            try {
            await SignUpAccountant(firstName, lastName, password, email, address)
            alert("Success! Your Account is Registered. Password Expires in 90 Days. You will recieve notification 3 days before expiration!");
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
                setError("Password Must be 6 charecter")
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
            <h2>Create New Accountant</h2>
        <form className = "register-form" onSubmit = {SubmitHandler}>
            <input
            value = {accountant.firstName}
            onChange = {UserHandler}
            id = "First name"
            label = "First name"
            name = "firstName"
            placeholder = "First name"
            required
            >
            </input>
            <input
            value = {accountant.lastName}
            onChange = {UserHandler}
            id = "last name"
            label = "last name"
            name = "lastName"
            placeholder = "last name"
            required
            >
            </input>
            <input
            value = {accountant.password}
            onChange = {UserHandler}
            id = "password"
            label = "password"
            name = "password"
            placeholder = "password"
            required
            >
            </input>
            <input
            value = {accountant.email}
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
            value = {accountant.address}
            onChange = {UserHandler}
            id = "Address"
            label = "Address"
            name = "address"
            placeholder = "Address"
            required
            >
            </input>

            <Link to ="/Dashboard">
        <button
        >Create Accountant</button>
        </Link>
        </form>
        
        </div>
    )
}