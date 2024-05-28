import { useState, useEffect } from 'react'
import axios from 'axios';

const ViewAppointments = () => 
{
  let [appts, setAppts] = useState([]);

  useEffect(() =>
  {
    const fetchAppt = async () =>
    {
      let resp = await axios.get(process.env.REACT_APP_BACKENDURL + "appointments");
      let apptData = await resp.data;
      setAppts(apptData);
    };

    fetchAppt();
  }, []);

  return (
    <>
      <h1>View Appointments</h1>
      <table className="table">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact #</th>
          <th>Doctor</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      
      {
        appts.map((appt) => (
          <tr key={appt._id}>
            <td>{appt.fname}</td>
            <td>{appt.lname}</td>
            <td>{appt.contact}</td>
            <td>{appt.doctor}</td>
            <td>{appt.appt_date}</td>
            <td>{appt.appt_time}</td>
          </tr>
        ))
      }
      </table>
    </>
  )
}

export default ViewAppointments