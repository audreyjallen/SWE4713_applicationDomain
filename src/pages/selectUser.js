import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useAuth } from '../context/UserAuthContext'



export const SelectUser = () => {
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
    
    
    return (
        <div className = "auth-form-container">
            <h1><AccountTreeIcon htmlColor='#f7bf4f'></AccountTreeIcon> | AccountAbility</h1>
            <h2>Which User are you?</h2>
        <form className = "login-form" >
           
          
            <Link to ="/log">
            <button>
                Admin
            </button>
            </Link>
            <Link to ="/managerLog">
            <button>
                Manager
            </button>
            </Link>
            <Link to ="/accountantLog">
            <button>
                Accountant
            </button>
            </Link>
        </form>
        
        <button>Don't have an account? Reach out to Admin for more information! </button>
       
        
        </div>
    )
}

       
       