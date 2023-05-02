import * as React from 'react'
import { ManagerMenu } from './managerMenu'
import { TrialBalance } from './trialBalanceTable';
import { Bar } from './appBar'
import Calendar from './calendar'
import Divider from '@mui/material/Divider';
import './financialStatement.css'
import { useNavigate, Link } from 'react-router-dom'
//Allows a manager user to choose a type of financial statement sheet to generate

export const SelectFinancialStatement = () => {

    const generateTrialBalance = () => {
        //Redirect to trial balance pdf
    }

    const generateBalanceSheet = () => {
        //Redirect to balance sheet pdf
    }

    const generateRetainedEarnings = () => {
        //Redirect to retained earnings pdf
    }

    const generateIncomeStatement = () => {
        //Redirect to income statement pdf
    }

    return (

        <div className="App">

            <Bar/>
            <ManagerMenu />
            <div className="Title">Financial Statements</div>
            <Divider variant="middle"></Divider>

            <p>From:</p>

            <div className = "pickerContainer">

                <Calendar/>

            </div>

            <p>To:</p>

            <div className = "pickerContainer">

                <Calendar/>

            </div>

            <p>Select a statement to generate:</p>

            <div className = "pickerContainer">

                <Link to = "/TrialBalance"><button>Trial Balance</button></Link>

                <Link to = "/BalanceSheet"><button>Balance Sheet</button></Link>

                <Link to = "/IncomeStatement"><button>Income Statement</button></Link>

                <Link to = "/RetainedEarnings"><button>Retained Earnings Statement</button></Link>

            </div>

        </div>

    )

}