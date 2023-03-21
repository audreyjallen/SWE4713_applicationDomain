import React from 'react'
import { useState } from 'react'
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Bar } from './appBar'
import  Calendar  from './calendar'

export const AddAccount = () => {

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        //Add firebase BS here
    }

    return (
        <div className = "app-layout">
            <Bar/>
            <div className = "ContentNavBar">
                <Tooltip title = "Calendar">
                <div className = "CalendarWrapper">
                    <Calendar></Calendar>
                </div>
                </Tooltip>
                <div className = "MidNav">
                    <Tooltip title = "Journalizing and ledger">
                    <button>
                        Journal
                    </button>
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
                Add Account
            </div>
            <Divider variant = "middle"></Divider>
            <div className = "ContentBody"
            >
                <input
                value = {accountName}
                onChange = {(e) => setAccountName(e.target.value)}
                id = "Account name"
                label = "Account name"
                name = "Account name"
                placeholder = "Account name"
                required
                >
                </input>
                <input
                value = {accountNumber}
                onChange = {(e) => setAccountNumber(e.target.value)}
                id = "Account number"
                label = "Account number"
                name = "Account number"
                placeholder = "Account number"
                required
                >
                </input>
                <input
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                id = "Account description"
                label = "Account description"
                name = "Account description"
                placeholder = "Account description"
                required
                >
                </input>
                <input
                value = {normalSide}
                onChange = {(e) => setNormalSide(e.target.value)}
                id = "Normal side"
                label = "Normal side"
                name = "Normal side"
                placeholder = "Normal side"
                required
                >
                </input>
                <input
                value = {category}
                onChange = {(e) => setCategory(e.target.value)}
                id = "Account category"
                label = "Account category"
                name = "Account category"
                placeholder = "Account category"
                required
                >
                </input>
                <input
                value = {subcategory}
                onChange = {(e) => setSubcategory(e.target.value)}
                id = "Account subcategory"
                label = "Account subcategory"
                name = "Account subcategory"
                placeholder = "Account subcategory"
                required
                >
                </input>
                <input
                value = {initialBalance}
                onChange = {(e) => setInitialBalance(e.target.value)}
                id = "Initial balance"
                label = "Initial balance"
                name = "Initial balance"
                placeholder = "Initial balance"
                required
                >
                </input>
                <input
                value = {debit}
                onChange = {(e) => setDebit(e.target.value)}
                id = "Debit"
                label = "Debit"
                name = "Debit"
                placeholder = "Debit"
                required
                >
                </input>
                <input
                value = {credit}
                onChange = {(e) => setCredit(e.target.value)}
                id = "Credit"
                label = "Credit"
                name = "Credit"
                placeholder = "Credit"
                required
                >
                </input>
                <input
                value = {balance}
                onChange = {(e) => setBalance(e.target.value)}
                id = "Balance"
                label = "Balance"
                name = "Balance"
                placeholder = "Balance"
                required
                >
                </input>
                <input
                value = {dateAdded}
                onChange = {(e) => setDateAdded(e.target.value)}
                id = "Date added"
                label = "Date added"
                name = "Date added"
                placeholder = "Date added"
                required
                >
                </input>
                <input
                value = {timeAdded}
                onChange = {(e) => setTimeAdded(e.target.value)}
                id = "Time added"
                label = "Time added"
                name = "Time added"
                placeholder = "Time added"
                required
                >
                </input>
                <input
                value = {userID}
                onChange = {(e) => setUserID(e.target.value)}
                id = "User ID"
                label = "User ID"
                name = "User ID"
                placeholder = "User ID"
                required
                >
                </input>
                <input
                value = {order}
                onChange = {(e) => setOrder(e.target.value)}
                id = "Order"
                label = "Order"
                name = "Order"
                placeholder = "Order"
                required
                >
                </input>
                <input
                value = {statement}
                onChange = {(e) => setStatement(e.target.value)}
                id = "Statement"
                label = "Statement"
                name = "Statement"
                placeholder = "Statement"
                required
                >
                </input>
                <input
                value = {comment}
                onChange = {(e) => setComment(e.target.value)}
                id = "Comment(s)"
                label = "Comment(s)"
                name = "Comment(s)"
                placeholder = "Comment(s)"
                >
                </input>
            </div>
            <div className = "MidNav">
            <button type = "submit">
                Add account
            </button>
            </div>
        </div>

    )
}