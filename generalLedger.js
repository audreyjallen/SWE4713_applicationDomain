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

export const GeneralLedger = () => {

    const date = "";
    const accountName = "";
    const journalType = "";
    const description = "";
    const debit = "";
    const credit = "";
    const postRef = "";


    const columns = [
        { id: 'date', label: 'Date', minWidth: 125 },
        {id: 'account name', label: 'Account Name', minWidth: 150},
        {id: 'entry type', label: 'Entry Type', minWidth: 150},
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
            id: "postReference",
            label: "Post Reference",
            minWidth: 150,
            align: "right",
            format: (value) => value.toLocaleString()
        }
      ];
      
      function createData(date, accountName, journalType, description, debit, credit, postReference) {
        return { date, accountName, journalType, description, debit, credit, postReference };
      }
      
      const rows = [
        createData("3/29/2023", <button className = "link-btn">"Account Name</button>, "Nonadjusting", "", 100, 0, <button className = "link-btn">Post ref</button>),
        //createData({date}, {accountName}, {description}, {debit}, {credit}, {postRef})
      ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                    <button>
                        Home
                    </button>
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
                General Ledger
            </div>
            <Divider variant = "middle"></Divider>

            <div className = "SubNavBar">
                <div className = "link-wrapper">
                    <Tooltip title = "Past edits">
                    <button className = "link-btn">Change Record</button>
                    </Tooltip>
                    <Tooltip title = "New journal entry">
                    <button>
                        <AddIcon fontSize='small'/>
                    </button>
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
                    rowsPerPageOptions={[10, 25, 100]}
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