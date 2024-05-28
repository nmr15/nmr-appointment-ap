import React from 'react'
import { Link } from 'react-router-dom'
import times from '../times.json'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

const SelectDateTime = (props) => 
  {
  return (
    <>
      <div className="container">
        <h1 className="appt__header">Select Date and Time</h1>
        {/* <Calendar name="appt_date" onChange={(e) => props.changeHandler(e)} /> */}
        <input type="date" name="appt_date" onChange={(e) => props.changeHandler(e)} />
        {times.map((time) => {
          return (
            <div key={time.id}>
              <input type="radio" className="btn-check" id={time.time} value={time.time} name="appt_time" onChange={(e) => props.changeHandler(e)} />
              <label className="btn btn-outline-primary" htmlFor={time.time}>{time.time}</label>
            </div>
          );
        })}
        <Link to="/completeappointment">Enter information</Link>
      </div>
    </>
  )
}

export default SelectDateTime