import React from 'react'
import { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, useNavigate, Routes, Link} from "react-router-dom";
import { Log } from './pages/log'
import { Contact } from './app-pages/Contact'
import {Register} from './pages/reg'
import { Reset } from './pages/reset'
import { Verify } from './pages/verify'
import UserAuthContext from './context/UserAuthContext';
import {VerifyEmail} from './pages/VerifyEmail';
import UserManagement from './app-pages/UserManagement';
import DOB from './app-pages/calendar';
import { ChartofAccounts } from './app-pages/chartOfAccounts'
import { AddAccount } from './app-pages/addAccount'
import { EntryList } from './app-pages/journalEntryList'
import { Ledger } from './app-pages/ledgerTemplate'
import { AddJournal } from './app-pages/addJournalEntry'
import { GeneralLedger } from './app-pages/generalLedger'
import { ReviewJournal } from './app-pages/reviewJournals'
import { LandingPage } from './app-pages/landingPage'
import { ManagerMenu } from './app-pages/managerMenu'
import { AccountantMenu } from './app-pages/accountantMenu'
import { AdminMenu } from './app-pages/adminMenu'
import { useAuth } from './context/UserAuthContext'
import { TrialBalance } from './app-pages/trialBalanceTable'
import { BalanceSheet } from './app-pages/balanceSheet'
import { RetainedEarnings } from './app-pages/retainedEarningsTable'
import { IncomeStatement } from './app-pages/incomeStatementTable'
import { SelectFinancialStatement } from './app-pages/financialStatement'



function App() { 
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
 
  
  return (
    <div className="App">
       <UserAuthContext>
      <Router>
      <Routes>
        <Route path="/" element={< Log />} />
        <Route path="/register" element={< Register />} />
        <Route path="/reset" element={< Reset />} />
        <Route path="/verify" element={< Verify />} />
        <Route path="/verifyEmail" element={< VerifyEmail />} />
        <Route path="/ChartofAccounts" element={< ChartofAccounts />} />
        <Route path="/AddAccount" element={< AddAccount />} />
        <Route path="/UserManagement" element={< UserManagement />} />
        <Route path="/DOB" element={< DOB />} />
        <Route path="/Ledger" element={< Ledger />} />
        <Route path="/EntryList" element={< EntryList />} />
        <Route path="/AddJournal" element={< AddJournal />} />
        <Route path="/GeneralLedger" element={< GeneralLedger />} />
        <Route path="/ReviewJournal" element={< ReviewJournal />} />
        <Route path="/LandingPage" element={< LandingPage />} />
        <Route path="/AccountantMenu" element={< LandingPage />} />
        <Route path="/ManagerMenu" element={< LandingPage />} />
        <Route path="/AdminMenu" element={< LandingPage />} />
        <Route path="/Contact" element={< Contact />} />
        <Route path="/SelectFinancialStatement" element={< SelectFinancialStatement />} />
        <Route path="/IncomeStatement" element={< IncomeStatement />} />
        <Route path="/BalanceSheet" element={< BalanceSheet />} />
        <Route path="/RetainedEarnings" element={< RetainedEarnings />} />
        <Route path="/TrialBalance" element={< TrialBalance />} />
    </Routes>
    </Router>
    </UserAuthContext>
    </div>
  );
}

export default App;  
