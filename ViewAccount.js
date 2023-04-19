import { Typography, Box, IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import * as React from 'react'
import { Bar } from './appBar'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Calendar from './calendar';
import { getAccounts } from './accounts'
import { HelpModal } from './helpModal'
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import { useAuth } from '../context/UserAuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { AddAccount } from './addAccount';
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";


export const ViewAccount = () => {
  const navigate = useNavigate()

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };

      const accounts = getAccounts();
      const charts = AddAccount();

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
                Your Account!
            </div>
            <Divider variant = "middle"></Divider>

            

        <div className = "ContentBody">
        <Typography id="modal-modal-title" variant="h6" component="h2" align = "center">
        
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Account Name</h3>
            <p>Basic Assets Account</p>

            <h3>Account Number</h3>
            <p>1234567</p>

            <h3>Account Description</h3>
            <p>First Account</p>
            
            <h3>Normal Side</h3>
            <p>Sales Account</p>

            <h3>Account Category</h3>
            <p>Asset</p>

            <h3>Account Subcategory</h3>
            <p>Current assets</p>

            <h3>Initial Balance</h3>
            <p>0</p>

            <h3>Debit</h3>
            <p>500</p>

            <h3>Credit</h3>
            <p>500</p>

            <h3>Balance</h3>
            <p>1000</p>

            <h3>Date Added</h3>
            <p>4/5/2023</p>

            <h3>Time Added</h3>
            <p>12:00 PM</p>

            <h3>User Id</h3>
            <p>1111</p>

            <h3>Order</h3>
            <p>Cash</p>

            <h3>Statement</h3>
            <p>Balance sheet</p>

            <h3>Comment(s)</h3>
            <p>None</p>

          </Typography>
        </div>
        </div>
    )

}