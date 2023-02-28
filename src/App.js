import React from 'react'
import { useState } from 'react'
import './App.css';
import { Log } from './log'
import { Register } from './reg'
import { Reset } from './reset'
import { Verify } from './verify'

function App() {
  const [currentForm, setCurrentForm] = useState("login")
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Reset/>
    </div>
  );
}

export default App;
