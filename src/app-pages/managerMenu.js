import React from 'react'

import { AppBar, Toolbar, Button } from '@mui/material'
import { Tooltip } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HelpModal } from './helpModal';
import  Calendar  from './calendar'


export const ManagerMenu = () => {

    return (

            <div className = "ContentNav">
                <Tooltip title = "Calendar">
                <div className = "CalendarButton">
                <Calendar/>
                </div>
                </Tooltip>
                <div className = "MidButton">
                    <button>Home</button>
                    <button>Email</button>
                    <Link to ="/managerchartOfAccounts">
                    <button>
                        Charts of Accounts
                    </button>
                    </Link>
                    <button>Journal</button>
                    <button>Financial Reports</button>
                </div>
                <div className = "HelpButton">
                      <HelpModal/>
                </div>
            </div>
    )
}