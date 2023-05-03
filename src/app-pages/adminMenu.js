import React from 'react'
import '../App.css'
import { AppBar, Toolbar, Button } from '@mui/material'
import { Tooltip } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HelpModal } from './helpModal';
import  Calendar  from './calendar'
import '../menus.css'
import { useNavigate, Link } from 'react-router-dom'

export const AdminMenu = () => {

    const user = "Admin";  //user's first name should be pulled from database

    return (
            <div className = "ContentNav">
                <Tooltip title = "Calendar">
                <div className = "CalendarButton">
                <Calendar/>
                </div>
                </Tooltip>
                <div className = "MidButton">
                <Link to ="/LandingPage">
                   <button>Home</button>
                   </Link>
                    <button>View Users</button>
                    <Link to ="/Contact">
                    <button>Email</button>
                    </Link>
                    <Link to ="/ChartofAccounts">
                    <button >
                        Chart of Accounts
                    </button>
                    </Link>
                    <Link to ="/GeneralLedger"> <button>Journal</button></Link>
                    <Link to ="/SelectFinancialStatement"><button>Financial Statements</button></Link>
        div className = "MidButton">
                    <button>Home</button>
                    <button>View Users</button>
                    <button>Email</button>
                    <button>
                        Chart of Accounts
                    </button>
                    <button>Journal</button>
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
                </div>
                </div>
                <div className = "HelpButton">
                      <HelpModal/>
                </div>
            </div>
    )
}
