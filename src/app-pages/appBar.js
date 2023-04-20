import React from 'react'
import '../App.css'
import { AppBar, Toolbar, Button } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { onAuthStateChanged } from "firebase/auth";
import {firestore, auth } from "../firebase";
import { useAuth } from '../context/UserAuthContext'
import { useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const Bar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [userName, setUserName] = useState("");
     useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if (user){
                setUserName(user);
            }else{
                    setUserName("");
                }
            });

            return () =>{
                listen();
            }
        }, []);
        
     
    const userlogout = async() => {
        try{
        await logout()
        navigate("/")
        } catch (error){
        
        }
        
            }

    return (
        <div>
            <AppBar
            className = "app-bar"
            position = "sticky"
            style = {{backgroundColor: '#f7bf4f'}}
            >
                <Toolbar
                display = "flex"
                >
                    <h2><AccountTreeIcon htmlColor='#ffffff'></AccountTreeIcon> | AccountAbility</h2>
                    <AccountCircleIcon
                    sx = {{marginLeft: "auto"}}
                    >
                    </AccountCircleIcon>
                    <h4>Welcome back, {userName.email}</h4>
                    <Button onClick={userlogout}
                    sx = {{marginLeft: "10px"}}
                    style = {{backgroundColor: '#ffffff', color: '#494646'}}
                    >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
   
