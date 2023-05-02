import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-date-range'
import format from 'date-fns/format'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DOB = () => {
  
  //date state
  const [calendar, setCalendar] = useState("")

  //open/closed state
  const [open, setOpen] = useState(false)

  const refOne = useRef(null)

  //display current date
  useEffect(() => {
    setCalendar(format(new Date(), 'MM/dd/yyyy'))
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  //hide calendar on ESC press
  const hideOnEscape = (e) => {
    if(e.key === "Escape") {
      setOpen(false)
    }
  }

  //hide calendar when clicked outside boundary
  const hideOnClickOutside = (e) => {
    if(refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  //store date when selected
  const handleSelect = (date) => {
    setCalendar(format(date, 'MM/dd/yyyy'))
  }
  return (
    <div
    className = "calendarWrap"
    >
      <input
      value = {calendar}
      readOnly
      className = "dob-input"
      onClick = { () => setOpen(open => !open) }
      >
      
      </input>

      <div ref = {refOne}>
      {open &&
      <Calendar
      date = {new Date()}
      onChange = {handleSelect}
      className = "calendarElement"
      >
      </Calendar>
      }
      </div>

    </div>
  )
}

export default DOB;