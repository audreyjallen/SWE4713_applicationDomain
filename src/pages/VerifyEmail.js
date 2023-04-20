import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/UserAuthContext'
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { storage, firestore } from '../firebase';
import { doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { sendEmailVerification, getAuth, onAuthStateChanged } from 'firebase/auth'

export const VerifyEmail = () => {
    const navigate = useNavigate()
    const { emailVerification, verifyemail, auth } = useAuth()
    const [err, setError] = useState("")
    const [code, setCode] = useState("")
    const [verify, setverify] = useState(true)
    
    const SubmitHandler = async (e) => {
        e.preventDefault()

        try {
            await emailVerification()
        } catch (error) {
            
        }
      }
  return (
    <div className = "auth-form-container">
    {

    }
    <form onSubmit={SubmitHandler} className="form">
        <h2>Verify Your Email</h2>
        <div className="inputfield">
            <input type="text"  
            placeholder="Enter Code Here" value={code} name='firstName' onChange={e=>(setCode(e.target.value))} />

            <p style={{color:"#000000", fontSize:"18px", marginTop:'3px',letterSpacing:"1px"}}>
                Please Press the Verify button to send a verification link to your email
            </p>
        </div>  
        <div className="inputfield">
            <input type="submit"  value={"Verify"}></input>
        </div>
        <p className="forget">Already Have an account? <Link to={"/"} className="link">{"log"}</Link></p>
    </form>

</div>
  )
}