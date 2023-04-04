import React from 'react'
import { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, useNavigate, Routes, Link} from "react-router-dom";
import { Log } from './pages/log'
import {Register} from './pages/reg'
import { Reset } from './pages/reset'
import { Verify } from './pages/verify'
import UserAuthContext from './context/UserAuthContext';
import {VerifyEmail} from './pages/VerifyEmail';
import UserManagement from './app-pages/UserManagement';
import DOB from './app-pages/calendar';
import { Dashboard } from './app-pages/chartOfAccounts'
import { AddAccount } from './app-pages/addAccount'
import { EntryList } from './app-pages/journalEntryList'
import { Ledger } from './app-pages/ledgerTemplate'
import { AddJournal } from './app-pages/addJournalEntry'



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
        <Route path="/Dashboard" element={< Dashboard />} />
        <Route path="/AddAccount" element={< AddAccount />} />
        <Route path="/UserManagement" element={< UserManagement />} />
        <Route path="/DOB" element={< DOB />} />
        <Route path="/Ledger" element={< Ledger />} />
        <Route path="/EntryList" element={< EntryList />} />
        <Route path="/AddJournal" element={< AddJournal />} />
    </Routes>
    </Router>
    </UserAuthContext>
    </div>
  );
}

export default App;  
