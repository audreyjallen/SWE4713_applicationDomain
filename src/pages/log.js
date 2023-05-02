import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useAuth } from '../context/UserAuthContext'



export const Log = () => {
    const { UserLogin } = useAuth()
    const [err, setError] = useState("")
    const [user, setUser] = useState({
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
        const { email, password } = user
        if (email == "" || password == "") {
          setInterval(() => {
            setError("")
          }, 5000)
          return setError("Fill All the Field")
        }
        try {
          await UserLogin(email, password)
          navigate("/Dashboard")
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
            <h2>Admin Login</h2>
        <form className = "login-form" onSubmit = {SubmitHandler}>
            <input
            value = {user.email}
            onChange = {UserHandler}
            name = "email"
            id = "email"
            label = "email"
            placeholder = "User ID or email address"
            requiredY
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
        <Link to ="/register">
        <button>Don't have an account? Register now</button>
        </Link>
        
        </div>
    )
}

       
       
