import * as React from 'react'
import { Bar } from './appBar'
import { getAccounts } from './accounts'
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
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarQuickFilter,
  } from "@mui/x-data-grid";
  import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, Link } from 'react-router-dom'

export const Journal1 = () => {

    const accounts = getAccounts();
    
     

    const columns = [
        { id: 'date', label: 'Date', minWidth: 170 },
        {id: 'accountname', label: 'Account Name', minWidth: 100},
        
        {id: 'accountnumber', label: 'Account Number', minWidth: 100},

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
          minWidth: 100,
          align: 'right',
        },
        {
            id: 'approval',
            label: 'Approval',
            minWidth: 130,
            align: 'right',
          },
        {
            id: "User",
            label: "User",
            minWidth: 150,
            align: "right",
            format: (value) => value.toLocaleString()
        }
      ];
      
      function createData(date, accountname, accountnumber, description, debit, credit, balance, approval, User) {
        return { date, accountname, accountnumber, description, debit, credit, balance, approval, User };
      }
      
      const rows = [
        createData(
        "4/5/2023",
        "Basic Assets Account",
        "12345",
          "Journal 1",
          500,
          0,
          500,
          <button className="link-btn" style={{ color: "red" }}>
            Denied
          </button>,
          "John Doe"
          
        ),
        
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
                <Link to ="/Dashboard">
                    <button>
                        Chart of Accounts
                    </button>
                    </Link>
                </div>
                <div className = "HelpWrapper">
                      <HelpModal/>
                </div>
            </div>

            <div className = "Title">
                {accounts.name} Journal 1
            </div>
            <Divider variant = "middle"></Divider>

            

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