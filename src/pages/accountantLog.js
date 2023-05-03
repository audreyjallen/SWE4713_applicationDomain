import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useAuth } from '../context/UserAuthContext'



export const AccountantLog = () => {
    const { UserLogin } = useAuth()
    const [err, setError] = useState("")
    const [accountant, setUser] = useState({
    email:"",
    password:"",
    })
    const navigate = useNavigate()
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
        const { email, password } = accountant
        if (email == "" || password == "") {
          setInterval(() => {
            setError("")
          }, 5000)
          return setError("Fill All the Field")
        }
        try {
          await UserLogin(email, password)
          navigate("/accountantlandingPage")
        } catch (error) {
    
          if (error.code == "auth/user-not-found") {
            setInterval(() => {
              setError("")
            }, 5000)
            return setError("User Not Found")
          }
          else if (error.code == "auth/wrong-password") {
            setInterval(() => {
              setError("")
            }, 5000)
            return setError("Wrong Password")
          }
          else {
            setInterval(() => {
              setError("")
            }, 5000)
            return setError(`${error.message}`)
          }
        }
    
      }
    
    return (
        <div className = "auth-form-container">
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2> Accountant Login</h2>
        <form className = "login-form" onSubmit = {SubmitHandler}>
            <input
            value = {accountant.email}
            onChange = {UserHandler}
            name = "email"
            id = "email"
            label = "email"
            placeholder = "User ID or email address"
            requiredY
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
            <Link to ="/verify">
            <button>
                Forgot password?
            </button>
            </Link>
            <button
            type = "submit"
            >
            Login
            </button>
        </form>
        
        </div>
    )
}

       
       