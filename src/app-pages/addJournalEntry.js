import * as React from 'react'
import { useState } from 'react'
import Calendar from './calendar';
import { HelpModal } from './helpModal'
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { Bar } from './appBar'
import { Button } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { useNavigate, Link } from 'react-router-dom'
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, useCollectionData, getDocs} from "firebase/firestore";
import swal from 'sweetalert2';
import '../App.css'

//Page for adding new journal entries

export const AddJournal = () => {
    //Form variables
    const navigate = useNavigate()
    const Swal = swal;
    const Journals = collection(firestore, "Accounts");
    const [err, setError] = useState("")
    const[rows, setRows] = useState([]);
    const [accountName, setAccountName] = useState("")
    const [description, setDescription] = useState("")
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")

    const [accountName2, setAccountName2] = useState("")
    const [description2, setDescription2] = useState("")
    const [debit2, setDebit2] = useState("")
    const [credit2, setCredit2] = useState("")
    const [postReference, setpostReference] = useState("")
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    

    
    
    
    const createJournal = async() => {
      if (accountName !=''  &&
              description !='' &&
              debit !=''  &&
              credit !='' &&
              accountName2 !=''  &&
              description2 !='' &&
              debit2 !=''  &&
              credit2 !='' &&
              postReference !='' ) {
                const  balance = (+debit - +credit);
                  addDoc(Journals, {
                      date,
                      accountName: accountName,
                      description: description,
                      debit: debit,
                      credit: credit,
                      accountName2: accountName2,
                      description2: description2,
                      debit2: debit2,
                      credit2: credit2,
                      balance,
                      postReference: postReference,
                      })
                      alert("Success A Journal has been added.")
                      navigate('/GeneralLedger');
                 }
          else {
              setInterval(() => {
                  setError("")
              }, 5000)
              swal.fire("Please Fill All The Fields");
          }
              };
      
          const handleSubmit = async (e) => {
              e.preventDefault()
              
          }
    

    const handleReset = () => {

        setAccountName("")
        setDescription("")
        setDebit("")
        setCredit("")

        setAccountName2("")
        setDescription2("")
        setDebit2("")
        setCredit2("")

        setpostReference("")


    }

    return (
        <div className = "app-layout">
            <Bar/>
            <div className = "ContentNavBar">
                <Tooltip title = "Calendar">
                <div className = "CalendarWrapper">
                <Calendar/>
                </div>
                </Tooltip>
                <div className = "MidNav">
                    <Link to ="/ChartofAccounts">
                    <button>Home</button>
                    <button>
                        Chart of Accounts
                    </button>
                    </Link>
                    <Link to ="/GeneralLedger">
                    <button>Journal</button>
                    </Link>
                </div>
                <div className = "HelpWrapper">
                      <HelpModal/>
                </div>
            </div>

            <div className = "Title">
                New Journal Entry
            </div>
            <Divider variant = "middle" marginBottom = "normal"></Divider>

            <Grid container spacing={2} margin = {2} align = "left" >
                <Grid container item xs={4} direction="column" marginLeft={3}>
                    <Calendar/>
                    <label id="demo-select-small">Entry postReference</label>
                        <Select
                        labelId="demo-select-small"
                        size='small'
                        name = "Filter"
                        id="demo-select-small"
                        //value={filter}
                        label="Filter"
                        alignItems = "right"
                        sx = {{display: "auto", alignItems: "right"}}
                        style = {{maxWidth: 200, backgroundColor: 'white'}}
                        onChange= {(e) => setpostReference(e.target.value)}
                    >
                        <MenuItem value={"Nonadjusting"}>Nonadjusting</MenuItem>
                        <MenuItem value={"Adjusting"}>Adjusting</MenuItem>
                    </Select>
                </Grid>

                <Grid container item xs={6} direction="column">

                    <label>Account Debited:</label>
                    <form className = "ContentBody">
                    <input   type="text" minlength="4" 
                    value = {accountName}
                    onChange = {(e) => setAccountName(e.target.value)}
                    id = "Account name 1"
                    label = "Type"
                    name = "Account name 1"
                    placeholder = "Account name"
                    required
                    >
                    </input>
                    <input minlength="5"
                    value = {description}                                   //Input form for journal entries
                    onChange = {(e) => setDescription(e.target.value)}
                    id = "Description 1"
                    label = "Description 1"
                    name = "Description 1"
                    placeholder = "Description"
                    required
                    >
                    </input>
                    <input type = "number" pattern="\d*"
                    value = {debit}
                    onChange = {(e) => setDebit(e.target.value)}
                    id = "Debit 1"
                    label = "Debit 1"
                    name = "Debit 1"
                    placeholder = "Debit(s) - separate values with commas"
                    required
                    >
                    </input>
                    <input type = "number" pattern="\d*"
                    value = {credit}
                    onChange = {(e) => setCredit(e.target.value)}
                    id = "Credit 1"
                    label = "Credit 1"
                    name = "Credit 1"
                    placeholder = "Credit(s) - separate values with commas"
                    required
                    >
                    </input>
                    <div/>

                    <label>Account Credited:</label>
                    <div/>

                    <input minlength="5"
                    value = {accountName2}
                    onChange = {(e) => setAccountName2(e.target.value)}
                    id = "Account name 2"
                    label = "Account"
                    name = "Account name 2"
                    placeholder = "Account name"
                    required
                    >
                    </input>
                    <input minlength="5"
                    value = {description2}                                   //Input form for journal entries
                    onChange = {(e) => setDescription2(e.target.value)}
                    id = "Description 2"
                    label = "Description 2"
                    name = "Description 2"
                    placeholder = "Description"
                    required
                    >
                    </input>
                    <input type = "number" pattern="\d*"
                    value = {debit2}
                    onChange = {(e) => setDebit2(e.target.value)}
                    id = "Debit 2"
                    label = "Debit 2"
                    name = "Debit 2"
                    placeholder = "Debit(s) - separate values with commas"
                    required
                    >
                    </input>
                    <input type = "number" pattern="\d*"
                    value = {credit2}
                    onChange = {(e) => setCredit2(e.target.value)}
                    id = "Credit 2"
                    label = "Credit 2"
                    name = "Credit 2"
                    placeholder = "Credit(s) - separate values with commas"
                    required 
                    >
                    </input>
                    </form>
                </Grid>
            </Grid>

            <div style = {{height: "50px"}}></div>

            <div className = "ContentNavBar"> 

                <div className = "LeftWrapper">

                    <Button
                    startIcon = {<UploadIcon/>}
                    style = {{backgroundColor: "#f7bf4f", color: "#000000"}}        //Submit/upload/reset/cancel options
                    variant = "contained" 
                    component = "label"
                    disableElevation
                    >Upload file
                        <input hidden multiple postReference = "file"></input>
                    </Button>
                </div>
                <div className = "MidNav">

                        <Button 
                        style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                        variant = "contained"
                        disableElevation
                        postReference = "reset"
                        onClick = {handleReset}
                        >Reset
                        </Button>

                        <Link to = "/GeneralLedger">
                        <Button
                        style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                        variant = "contained"
                        disableElevation
                        >Cancel
                        </Button>
                        </Link>

                </div>
                <div className = "RightWrapper">
                    <Button
                    style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                    disableElevation
                    postReference = "submit"
                    onClick = {createJournal}
                    >Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}