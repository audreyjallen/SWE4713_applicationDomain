import React from 'react'
import { useState } from 'react'
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Bar } from './appBar'
import  calendar  from '../calendar'
import { useNavigate, Link } from 'react-router-dom'
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, useCollectionData } from "firebase/firestore";
import { useAuth } from '../context/UserAuthContext'

export const EditAccount = () => {

    const [accountName, setAccountName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [description, setDescription] = useState("")
    const [normalSide, setNormalSide] = useState("")
    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [initialBalance, setInitialBalance] = useState("")
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")
    const [balance, setBalance] = useState("")
    const [dateAdded, setDateAdded] = useState("")
    const [timeAdded, setTimeAdded] = useState("")
    const [userID, setUserID] = useState("")
    const [order, setOrder] = useState("")
    const [statement, setStatement] = useState("")
    const [comment, setComment] = useState("")

    //const query = collection(firestore, "Admin/SnVrW6AGz2yRnfg1yhac");
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }

    return (
        <div className = "app-layout">
            <appBar/>
            <div className = "ContentNavappBar">
                <Tooltip title = "calendar">
                <div className = "calendarWrapper">
                    <calendar></calendar>
                </div>
                </Tooltip>
                <div className = "MidNav">
                    <Tooltip title = "Journalizing and ledger">
                    <Link to ="/Ledger">
                    <button>
                        Journal
                    </button>
                    </Link>
                    </Tooltip>
                </div>
                <div className = "HelpWrapper">
                    <Tooltip title = "Website info">
                    <button
                    >
                        Help
                    </button>
                    </Tooltip>
                </div>
            </div>
            <div className = "Title">
                Edit Account
            </div>
            <Divider variant = "middle"></Divider>
            <div className = "ContentBody"
            >
                <input
                value = {accountName}
                onChange = {(e) => setAccountName(e.target.value)}
                id = "Account name"
                label = "Account name"
                name = "Basic Assests Account"
                placeholder = "Basic Assests Account"
                required
                >
                </input>
                <input
                value = {accountNumber}
                onChange = {(e) => setAccountNumber(e.target.value)}
                id = "Account number"
                label = "Account number"
                name = "12345"
                placeholder = "12345"
                required
                >
                </input>
                <input
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                id = "Account description"
                label = "Account description"
                name = "First Account"
                placeholder = "First Account"
                required
                >
                </input>
                <input
                value = {normalSide}
                onChange = {(e) => setNormalSide(e.target.value)}
                id = "Normal side"
                label = "Normal side"
                name = "Sales Account"
                placeholder = "Sales Account"
                required
                >
                </input>
                <input
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}
                id = "Account category"
                label = "Account category"
                name = "Assets"
                placeholder = "Assets"
                required
                >
                </input>
                <input
                value = {subcategory}
                onChange = {(e) => setSubcategory(e.target.value)}
                id = "Account subcategory"
                label = "Account subcategory"
                name = "Currents Assets"
                placeholder = "Currents Assets"
                required
                >
                </input>
                <input
                value = {initialBalance}
                onChange = {(e) => setInitialBalance(e.target.value)}
                id = "Initial balance"
                label = "Initial balance"
                name = "0"
                placeholder = "0"
                required
                >
                </input>
                <input
                value = {debit}
                onChange = {(e) => setDebit(e.target.value)}
                id = "Debit"
                label = "Debit"
                name = "500"
                placeholder = "500t"
                required
                >
                </input>
                <input
                value = {credit}
                onChange = {(e) => setCredit(e.target.value)}
                id = "Credit"
                label = "Credit"
                name = "500"
                placeholder = "500"
                required
                >
                </input>
                <input
                value = {balance}
                onChange = {(e) => setBalance(e.target.value)}
                id = "Balance"
                label = "Balance"
                name = "1000"
                placeholder = "1000"
                required
                >
                </input>
                <input
                value = {dateAdded}
                onChange = {(e) => setDateAdded(e.target.value)}
                id = "Date added"
                label = "Date added"
                name = "4/5/2023"
                placeholder = "4/5/2023"
                required
                >
                </input>
                <input
                value = {timeAdded}
                onChange = {(e) => setTimeAdded(e.target.value)}
                id = "Time added"
                label = "Time added"
                name = "12:00 PM"
                placeholder = "12:00 PM"
                required
                >
                </input>
                <input
                value = {userID}
                onChange = {(e) => setUserID(e.target.value)}
                id = "User ID"
                label = "User ID"
                name = "1111"
                placeholder = "1111"
                required
                >
                </input>
                <input
                value = {order}
                onChange = {(e) => setOrder(e.target.value)}
                id = "Order"
                label = "Order"
                name = "Cash"
                placeholder = "Cash"
                required
                >
                </input>
                <input
                value = {statement}
                onChange = {(e) => setStatement(e.target.value)}
                id = "Statement"
                label = "Statement"
                name = "Balance sheet"
                placeholder = "Balance sheet"
                required
                >
                </input>
                <input
                value = {comment}
                onChange = {(e) => setComment(e.target.value)}
                id = "Comment(s)"
                label = "Comment(s)"
                name = "None"
                placeholder = "None"
                >
                </input>
            </div>
            <div className = "MidNav">
              <Link to = "/Dashboard">
            <button type = "submit">
                Edit account
            </button>
            </Link>
            <Link to = "/Dashboard">
            <button type = "submit">
                Cancel
            </button>
            </Link>
            </div>
        </div>

    )
}