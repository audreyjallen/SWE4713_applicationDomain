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
import Add from '@mui/icons-material/Add';
import { useAuth } from '../context/UserAuthContext'
import { useNavigate, Link } from 'react-router-dom'
import {AddAccount} from './addAccount';
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { useState, useEffect} from 'react'
import swal from 'sweetalert2';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import '../App.css'
//import './form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const ChartofAccounts = () => {
  const Swal = swal;
  const navigate = useNavigate()
  const charts = getAccounts();
  const {getAccount} = AddAccount()
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const coa = collection(firestore, "Accounts");
  const [query, setQuery] = useState(coa);



  useEffect(() => {
    getAccountants();
  }, []);

  const getAccountants = async (id) => {
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


  const deleteAccount = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this account?",
      text: "This account will be gone forever!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result)=>{
      if(result.value){
        accountDelete(id);
      }
    });
  }

  const accountDelete = async(id)=>{
    await deleteDoc(doc(firestore, "Accounts", id));
    Swal.fire("Account successfully Deleted");
    getAccountants();
  }


  
  const searchNames = (v) => {
    if(v){
      setRows([v]);
    }else{
      getAccountants();
    }
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
                <Link to ="/LandingPage">
                   <button>Home</button>
                   </Link>
                    <Tooltip title = "Journalizing and ledger">
                    <Link to ="/GeneralLedger">
                    <button>
                        Journal
                    </button>
                    <Link to ="/SelectFinancialStatement"><button>Financial Statements</button></Link>
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
                    
                        <SearchIcon sx={{ color: 'action.active', mr: -1, my: -1 }} />
                        <input type='text' placeholder="Search accounts" type="search" size = "small"
                        onChange={(v)=> searchNames(v)} 
                        />
                        </div>
                        <div>
                        <InputLabel id="demo-select-small">Filter</InputLabel>
                        <Select 
                        labelId="demo-select-small"
                        size='small'
                       name = "Filter"
                        id="demo-select-small"
                        //value={Filter}
                       label="Filter"
                        alignItems = "right"
                        sx = {{display: "auto", mr: 0, my: -1,
                        alignItems: "top"
                      }}
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

            
        
        <Paper sx={{ width: '100%', overflow: 'scroll'}} padding = {10}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
          <TableHead>
              <TableRow>
              <TableCell style={{ textAlign: "center"}}>Account Number</TableCell>
              <TableCell style={{ textAlign: "center"}}>Account Name</TableCell>
              <TableCell style={{ textAlign: "center"}}>Account Category</TableCell>
              <TableCell style={{ textAlign: "center"}}>Normal Side</TableCell>
              <TableCell style={{ textAlign: "center"}}>Account Balance</TableCell>
              <TableCell style={{ textAlign: "center"}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
               .map((rows) => {
            return (
              <TableRow key={rows.id}>
                <TableCell key={rows.id} style={{ textAlign: "center"}}>{rows.accountNumber}</TableCell>
                 <TableCell key={rows.id} style={{ textAlign: "center"}}>{rows.subcategory}</TableCell>
                 <TableCell key={rows.id} style={{ textAlign: "center"}}>{rows.category} </TableCell>
                 <TableCell key={rows.id} style={{ textAlign: "center"}}>{rows.normalSide}</TableCell>
                 <TableCell key={rows.id} style={{ textAlign: "center"}}>{rows.balance}</TableCell>
                 <TableCell key={rows.id} style={{ textAlign: "center"}}>
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
                <IconButton onClick= {() => {
                                deleteAccount(rows.id);}}>
                  <HighlightOffIcon className = "icon"/>
                  </IconButton>
                  </Tooltip>
                  </TableCell>
                  </TableRow>
            );
          })}
          </TableBody>
          </Table>
          </TableContainer>
          <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
          
          </Paper>
        </div>
        
        
        )
        }