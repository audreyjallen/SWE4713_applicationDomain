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
import { Reject } from './rejectJournalDialogue';

//Page for adding new journal entries

export const ReviewJournal = () => {

    //Form variables

    const [accountName, setAccountName] = useState()
    const [description, setDescription] = useState()
    const [debit, setDebit] = useState()
    const [credit, setCredit] = useState()

    const [accountName2, setAccountName2] = useState()
    const [description2, setDescription2] = useState()
    const [debit2, setDebit2] = useState()
    const [credit2, setCredit2] = useState()

    
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
                    <button>Home</button>
                    <button>
                        Chart of Accounts
                    </button>
                    <button>Journal</button>
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
                    <label id="demo-select-small">Entry type</label>
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
                        //onChange={handleChange}
                    >
                        <MenuItem value={"Nonadjusting"}>Nonadjusting</MenuItem>
                        <MenuItem value={"Adjusting"}>Adjusting</MenuItem>
                    </Select>
                </Grid>

                <Grid container item xs={6} direction="column">

                    <label>Account Debited:</label>

                    <input
                    value = {accountName}
                    onChange = {(e) => setAccountName(e.target.value)}
                    id = "Account name 1"
                    label = "Account name 1"
                    name = "Account name 1"
                    placeholder = "Account name"
                    >
                    </input>
                    <input
                    value = {description}                                   //Input form for journal entries
                    onChange = {(e) => setDescription(e.target.value)}
                    id = "Description 1"
                    label = "Description 1"
                    name = "Description 1"
                    placeholder = "Description"
                    >
                    </input>
                    <input
                    value = {debit}
                    onChange = {(e) => setDebit(e.target.value)}
                    id = "Debit 1"
                    label = "Debit 1"
                    name = "Debit 1"
                    placeholder = "Debit(s) - separate values with commas"
                    required
                    >
                    </input>
                    <input
                    value = {credit}
                    onChange = {(e) => setCredit(e.target.value)}
                    id = "Credit 1"
                    label = "Credit 1"
                    name = "Credit 1"
                    placeholder = "Credit(s) - separate values with commas"
                    required
                    >
                    </input>

                    <label>Account Credited:</label>

                    <input
                    value = {accountName2}
                    onChange = {(e) => setAccountName2(e.target.value)}
                    id = "Account name 2"
                    label = "Account name 2"
                    name = "Account name 2"
                    placeholder = "Account name"
                    >
                    </input>
                    <input
                    value = {description2}                                   //Input form for journal entries
                    onChange = {(e) => setDescription2(e.target.value)}
                    id = "Description 2"
                    label = "Description 2"
                    name = "Description 2"
                    placeholder = "Description"
                    >
                    </input>
                    <input
                    value = {debit2}
                    onChange = {(e) => setDebit2(e.target.value)}
                    id = "Debit 2"
                    label = "Debit 2"
                    name = "Debit 2"
                    placeholder = "Debit(s) - separate values with commas"
                    required
                    >
                    </input>
                    <input
                    value = {credit2}
                    onChange = {(e) => setCredit2(e.target.value)}
                    id = "Credit 2"
                    label = "Credit 2"
                    name = "Credit 2"
                    placeholder = "Credit(s) - separate values with commas"
                    required
                    >
                    </input>
                </Grid>
            </Grid>

            <div style = {{height: "50px"}}></div>

            <div className = "ContentNavBar"> 

                <div className = "MidNav">

                    <Reject/>

                </div>
                <div className = "RightWrapper">
                    
                    <Button
                    style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                    disableElevation
                    type = "submit"
                    //onClick = {handleSubmit}
                    >APPROVE
                    </Button>
                </div>
            </div>
        </div>
    )
}