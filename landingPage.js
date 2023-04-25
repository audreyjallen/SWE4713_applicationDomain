import * as React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Bar } from './appBar'
import { AdminMenu } from './adminMenu';
import { ManagerMenu } from './managerMenu';
import { AccountantMenu } from './accountantMenu';
import './landingPage.css'
import { Typography } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


export const LandingPage = () => {

    return (
        <div className = "App">
            <Bar/>
            <AccountantMenu/>
            <Grid container spacing={2}>
            <Box className = "ratioBox">
                <Typography align='center'>LIQUIDITY</Typography>
                <p>Put</p>
                <p>financial</p>
                <p>ratios</p>
                <p>here</p>
            </Box>
            <Box className = "ratioBox">
                <Typography align='center'>LEVERAGE</Typography>
                <p>Put</p>
                <p>financial</p>
                <p>ratios</p>
                <p>here</p>
            </Box>
            <Box className = "notifBox">
            <Typography align = "center"><NotificationsActiveIcon fontSize='small' className = "icon"/>NOTIFICATIONS</Typography>
            <p>put</p>
            <p>any</p>
            <p>notifications</p>
            <p>here</p>
            <p>it</p>
            <p>will</p>
            <p>scroll</p>
            </Box>
            </Grid>

            <Grid container spacing={2}>
            <Box className = "ratioBox">
                <Typography align='center'>EFFICIENCY</Typography>
                <p>Put</p>
                <p>financial</p>
                <p>ratios</p>
                <p>here</p>
            </Box>
            <Box className = "ratioBox">
                <Typography align='center'>PROFITABILITY</Typography>
                <p>Put</p>
                <p>financial</p>
                <p>ratios</p>
                <p>here</p>
            </Box>
            </Grid>
            </div>
        
    );

}