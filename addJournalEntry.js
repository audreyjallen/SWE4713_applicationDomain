import * as React from 'react'
import { useState } from 'react'
import Calendar from './calendar';
import { HelpModal } from './helpModal'
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Bar } from './appBar'
import { Button } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

//Page for adding new journal entries

export const AddJournal = () => {

    //Form variables

    const [description, setDescription] = useState("")
    const [debit, setDebit] = useState("")
    const [credit, setCredit] = useState("")

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
                <Calendar/>
                </div>
                </Tooltip>
                <div className = "MidNav">
                    <button>
                        Chart of Accounts
                    </button>
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
                </Grid>
                <Grid container item xs={6} direction="column">
                    <input
                    value = {description}                                   //Input form for journal entries
                    onChange = {(e) => setDescription(e.target.value)}
                    id = "Description"
                    label = "Description"
                    name = "Description"
                    placeholder = "Description"
                    >
                    </input>
                    <input
                    value = {debit}
                    onChange = {(e) => setDebit(e.target.value)}
                    id = "Debit"
                    label = "Debit"
                    name = "Debit"
                    placeholder = "Debit(s) - separate values with commas"
                    required
                    >
                    </input>
                    <input
                    value = {credit}
                    onChange = {(e) => setCredit(e.target.value)}
                    id = "Credit"
                    label = "Credit"
                    name = "Credit"
                    placeholder = "Credit(s) - separate values with commas"
                    required
                    >
                    </input>
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
                        <input hidden multiple type = "file"></input>
                    </Button>
                </div>
                <div className = "MidNav">

                        <Button 
                        style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                        variant = "contained"
                        disableElevation
                        type = "reset"
                        >Reset
                        </Button>

                        <Button
                        style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                        variant = "contained"
                        disableElevation
                        >Cancel
                        </Button>

                </div>
                <div className = "RightWrapper">
                    <Button
                    style = {{backgroundColor: "#f7bf4f", color: "#000000"}}
                    disableElevation
                    type = "submit"
                    onSubmit = {handleSubmit}
                    >Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}