import React from 'react'
import { useState, useEffect} from 'react'
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Bar } from './appBar'
import  calendar  from '../calendar'
import { useNavigate, Link } from 'react-router-dom'
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, useCollectionData, getDocs} from "firebase/firestore";
import { useAuth } from '../context/UserAuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert2';
import '../App.css'


export const AddAccount = () => {
    const navigate = useNavigate();
    const Swal = swal;
    const [err, setError] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [description, setDescription] = useState("");
    const [normalSide, setNormalSide] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [initialBalance, setInitialBalance] = useState("");
    const [debit, setDebit] = useState("");
    const [credit, setCredit] = useState("");
    const [balance, setBalance] = useState("");
    const current = new Date();


    const [dateAdded, setDateAdded] = useState("");
    const [timeAdded, setTimeAdded] = useState("");
    const [userID, setUserID] = useState("");
    const [order, setOrder] = useState("");
    const [statement, setStatement] = useState("");
    const [comment, setComment] = useState("");
   const accounts = collection(firestore, "Accounts");
   const [rows, setRows] = useState([]);

   
    
   const createAccount = async() => {
    if (accountName!='' &&
        accountNumber!=''&&
        description!=''&&
        normalSide!=''&&
        category!=''&&
        subcategory!=''&&
        initialBalance!=''&&
        debit!=''&&
        credit!=''&&
        balance!=''&&
        dateAdded!=''&&
        timeAdded!=''&&
        userID!=''&&
        order!=''&&
        statement!='') {
            const postReference = "Non-Adjusting";
            const  entryStatus = "Pending"
            addDoc(accounts, {
                accountName: accountName,
                accountNumber: accountNumber,
                description: description,
                normalSide: normalSide,
                category: category,
                subcategory: subcategory,
                initialBalance: initialBalance,
                debit: debit,
                credit: credit,
                balance: balance,
                dateAdded: dateAdded,
                timeAdded: timeAdded,
                userID: userID,
                order: order,
                statement: statement,
                comment: comment,
                postReference,
                entryStatus,
                })
                Swal.fire("Success! An account has been added.")
                navigate('/ChartofAccounts');
                getAccountants();

           }
     else {setInterval(() => {
            setError("")
        }, 5000)
        swal.fire("Please Fill All The Fields");
    }
        };

        const getAccountants = async () => {
            const data = await getDocs(accounts);
            setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
    

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
                Add Account
            </div>
            <Divider variant = "middle"></Divider>
            <form className = "ContentBody">
                <input minlength="5"
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
                type="text" pattern="\d*" maxlength="4" minlength="4" 
                value = {accountNumber}
                onChange = {(e) => setAccountNumber(e.target.value)}
                id = "Account number"
                label = "Account number"
                name = "Account number"
                placeholder = "Account number"
                required
                >
                </input>
                <input minlength="5"
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
                <input type = "number" pattern="\d*"
                value = {initialBalance}
                onChange = {(e) => setInitialBalance(e.target.value)}
                id = "Initial balance"
                label = "Initial balance"
                name = "Initial balance"
                placeholder = "Initial balance"
                required
                >
                </input>
                <input type = "number" pattern="\d*"
                value = {debit}
                onChange = {(e) => setDebit(e.target.value)}
                id = "Debit"
                label = "Debit"
                name = "Debit"
                placeholder = "Debit"
                required
                >
                </input>
                <input type = "number" pattern="\d*"
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
                onClick = {(e) => setDateAdded(`${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`)}
                id = "Date added"
                label = "Date added"
                name = "Date added"
                placeholder = "Date added"
                required
                >
                </input>
                <input
                value = {timeAdded}
                onClick = {(e) => setTimeAdded(current.getHours() 
                    + ':' + current.getMinutes() 
                    + ":" + current.getSeconds())}
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
                <br/>
                <button type = "submit" onClick = {createAccount}>
                Add account
            </button>
            <br/>
            <Link to = "/ChartofAccounts">
            <button type = "submit">
                Cancel
            </button>
            </Link>
            </form>
            <div className = "MidNav">
            </div>
        </div>

    )
}