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
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';
import { useAuth } from '../context/UserAuthContext'
import { useNavigate, Link } from 'react-router-dom'
import {AddAccount} from './addAccount';
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { useState, useEffect} from 'react'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



export const Dashboard = () => {
 
  const navigate = useNavigate()
  const charts = getAccounts();
  const {getAccount} = AddAccount()
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const coa = collection(firestore, "Accounts");

  useEffect(() => {
    getAccountants();
  }, []);

  const getAccountants = async () => {
    const data = await getDocs(coa);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


 

  const deleted = async  (id) => {
   coa.child(firestore, `Accounts/${id}`).remove((err)=>{
    if (err){
    }else{ //await deleteDoc(gone);
      
      getAccounts();  }
   });
  };
  

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
                    <Link to ="/GeneralLedger">
                    <button>
                        Journal
                    </button>
                    </Link>
                    
                    </Tooltip>
                </div>
                <div className = "AddManager">
                    <Tooltip title = "AddManager">
                    <Link to ="/createManager">
                    <button>
                        Add Manager
                    </button>
                    </Link>
                    
                    </Tooltip>
                </div>

                <div className = "AddAccountant">
                    <Tooltip title = "AddAccountant">
                    <Link to ="/createAccountant">
                    <button>
                        Add Accountant
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
                Chart of Accounts
            </div>
            <Divider variant = "middle"></Divider>

            <div className = "SubNavBar">
                <div className = "link-wrapper">
                    <Tooltip title = "Past account edits">
                    <button className = "link-btn">Change Record</button>
                    </Tooltip>
                    <Tooltip title = "Add new account">
                    <Link to ="/AddAccount">
                    <button>
                        <AddIcon fontSize='small'/>
                    </button>
                    </Link>
                    </Tooltip>
                </div>
                <div className = "SearchFilterWrapper">
                    
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField label="Search accounts" type="search" size = "small"/>
                        <InputLabel id="demo-select-small">Filter</InputLabel>
                        <Select
                        labelId="demo-select-small"
                        size='small'
                        name = "Filter"
                        id="demo-select-small"
                        //value={}
                        label="Filter"
                        alignItems = "right"
                        sx = {{display: "auto", alignItems: "right"}}
                        //onChange={handleChange} 
                    >
                        <MenuItem value={"Account Name"}> Account Name </MenuItem>
                        <MenuItem value={"Account Number"}>Account Number</MenuItem>
                        <MenuItem value={"Category"}>Category</MenuItem>
                        <MenuItem value={"Subcategory"}>Subcategory</MenuItem>
                        <MenuItem value={"Balance LowHigh"}>Balance Low to High</MenuItem>
                        <MenuItem value={"Balance HighLow"}>Balance High to Low</MenuItem>
                    </Select>
                    
                </div>
            </div>

        <div className = "ContentBody">
            {rows?.length &&
          rows.map((account) => {
            return (
              <div className = "AccountWrapper" key={account.id}>
                <div className = "AccountLeft">
                  {account.accountName} - {account.accountNumber} - {account.category} - {account.userID} - {account.comment}
                </div>
                <div className = "AccountRight">
                <Tooltip title = "View">
                <IconButton>
                  <VisibilityIcon className = "icon"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title = "Edit">
                <IconButton>
                  <EditIcon className = "icon" />
                </IconButton>
                </Tooltip>
                <Tooltip title = "Delete" >
                <IconButton onClick>
                  <DeleteIcon className = "icon"/>
                  </IconButton>
                  </Tooltip>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        )
        }
