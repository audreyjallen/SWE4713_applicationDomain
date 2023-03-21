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


export const Dashboard = () => {

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
                    <button>
                        Journal
                    </button>
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
                        <MenuItem value={"Account Name"}>Account Name</MenuItem>
                        <MenuItem value={"Account Number"}>Account Number</MenuItem>
                        <MenuItem value={"Category"}>Category</MenuItem>
                        <MenuItem value={"Subcategory"}>Subcategory</MenuItem>
                        <MenuItem value={"Balance LowHigh"}>Balance Low to High</MenuItem>
                        <MenuItem value={"Balance HighLow"}>Balance High to Low</MenuItem>
                    </Select>
                    
                </div>
            </div>

        <div className = "ContentBody">
            {accounts?.length &&
          accounts.map((account) => {
            return (
              <div className = "AccountWrapper" key={account.id}>
                <div className = "AccountLeft">
                  {account.name} - {account.id}
                </div>
                <div className = "AccountRight">
                <Tooltip title = "View">
                <IconButton>
                  <VisibilityIcon className = "icon"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title = "Edit">
                <IconButton>
                  <EditIcon className = "icon"/>
                </IconButton>
                </Tooltip>
                <Tooltip title = "Delete">
                <IconButton>
                  <HighlightOffIcon className = "icon"/>
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