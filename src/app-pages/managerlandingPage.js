import * as React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Bar } from './appBar'
import { ManagerMenu } from './managerMenu';
import './landingPage.css'
import { Typography } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { calculateCurrentRatio, calculateAcidTestRatio, calculateCashRatio, calculateDebtRatio,
    calculateDebtToEquityRatio, calculateInterestCoverageRatio, calculateAssetTurnover, calculateReceivablesTurnover,
    calculateGrossMargin, calculateOperatingMargin, calculateReturnOnAssets, calculateReturnOnEquity } from './ratios';


export const ManagerLandingPage = () => {

    return (
        <div className = "App">
            
            <Bar/>
            <ManagerMenu/>
            <Grid container spacing={2}>
            <Box className = "ratioBox">
                <Typography align='center'>LIQUIDITY</Typography>
                <p>{calculateCurrentRatio(3000, 2000)}</p>
                <p>{calculateAcidTestRatio(500,500,500,500,2000)}</p>
                <p>{calculateCashRatio(1000, 750, 2000)}</p>
            </Box>
            <Box className = "ratioBox">
                <Typography align='center'>LEVERAGE</Typography>
                <p>{calculateDebtRatio(5000, 8500)}</p>
                <p>{calculateDebtToEquityRatio(315000, 150000)}</p>
                <p>{calculateInterestCoverageRatio(1000, 500)}</p>
            </Box>
            <Box className = "notifBox">
            <Typography align = "center"><NotificationsActiveIcon fontSize='small' className = "icon"/>NOTIFICATIONS</Typography>
            <p>No notifications to show at this time.</p>
            </Box>
            </Grid>

            <Grid container spacing={2}>
            <Box className = "ratioBox">
                <Typography align='center'>EFFICIENCY</Typography>
                <p>{calculateAssetTurnover(2000, 2000, 2000)}</p>
                <p>{calculateReceivablesTurnover(2000, 2000, 1500)}</p>
            </Box>
            <Box className = "ratioBox">
                <Typography align='center'>PROFITABILITY</Typography>
                <p>{calculateGrossMargin(2000, 20000)}</p>
                <p>{calculateOperatingMargin(3000, 20000)}</p>
                <p>{calculateReturnOnAssets(5000, 20000)}</p>
                <p>{calculateReturnOnEquity(5000, 125000)}</p>
            </Box>
            </Grid>
            </div>
        
    );

}