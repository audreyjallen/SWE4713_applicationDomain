import React from 'react'
import './App.css'
import { AppBar, Toolbar, Button } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Bar = () => {

    const user = "Audrey";  //user's first name should be pulled from database

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
                    <h4>Welcome back, {user}</h4>
                    <Button
                    sx = {{marginLeft: "10px"}}
                    style = {{backgroundColor: '#ffffff', color: '#494646'}}
                    >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}