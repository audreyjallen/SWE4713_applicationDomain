import * as React from 'react'
import { Bar } from './appBar'
//import { getAccounts } from './accounts'
import Calendar from './calendar';
import { HelpModal } from './helpModal'
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import {firestore } from "../firebase";
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import { useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AddJournal } from './addJournalEntry';
import {ChartofAccounts} from './chartOfAccounts';

export const GeneralLedger = () => {


const navigate = useNavigate()
  const ledger = AddJournal();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  //const ledg = collection(firestore, "Journals");
  const db = ChartofAccounts();
  const ledg= collection(firestore, "Accounts");

  useEffect(() => {
    getJournals();
  }, []);

  const getJournals = async () => {
    const data = await getDocs(ledg);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const columns = [
    { id: 'dateAdded', label: 'Date', minWidth: 150 },
    { id: 'entryStatus', label: 'Entry Status', minWidth: 150 },
    { id: 'description', label: 'Description', minWidth: 150 },
    {
      id: 'debit',
      label: 'Debit',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'credit',
      label: 'Credit',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'balance',
      label: 'Balance',
      minWidth: 150,
      align: 'right',
    },
    {
        id: "postReference",
        label: "Post Reference",
        minWidth: 150,
        align: "right",
        format: (value) => value.toLocaleString()
    }
  ];

  function createData(date, entryStatus, journalType, description, debit, credit, postReference) {
    return { date, entryStatus, journalType, description, debit, credit, postReference };
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
                    <button>
                        Home
                    </button>
                    </Link>
                    <Link to ="/ChartofAccounts">
                    <button>
                        Chart of Accounts
                    </button>
                    </Link>
                    <Link to ="/SelectFinancialStatement"><button>Financial Statements</button></Link>
                </div>
                <div className = "HelpWrapper">
                      <HelpModal/>
                </div>
            </div>

            <div className = "Title">
                General Ledger
            </div>
            <Divider variant = "middle"></Divider>

            <div className = "SubNavBar">
                <div className = "link-wrapper">
                    <Tooltip title = "Past edits">
                    <button className = "link-btn">Change Record</button>
                    </Tooltip>
                    <Tooltip title = "New journal entry">
                    <Link to ="/AddJournal">
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
                        //value={filter}
                        label="Filter"
                        alignItems = "right"
                        sx = {{display: "auto", alignItems: "right"}}
                        //onChange={handleChange}
                    >
                        <MenuItem value={"Date"}>Date</MenuItem>
                        <MenuItem value={"Amount"}>Amount</MenuItem>
                    </Select>
                    </div>
                    
                </div>

            <Paper sx={{ width: '100%', overflow: 'scroll'}} padding = {10}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}
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
    )}