import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import times from '../times.json'
import SuccessAppointment from './SuccessAppointment'

const NewAppointment = (props) => 
{
  // let times = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00"];
  let [apptData, setApptData] = useState({
    doctor: "",
    fname:"",
    lname:"",
    contact: "",
    appt_date: "",
    appt_time: ""
  })

  const navigate = useNavigate();

  let changeHandler = (e) =>
  {
    setApptData({ ...apptData, [e.target.name]: e.target.value });
    console.log(apptData)
  }
  
  let submitHandler = async (e) =>
  {
    e.preventDefault();
    console.log(apptData)
    let resp = await axios.post(process.env.REACT_APP_BACKENDURL + "newappointment", {...apptData});
    let data = await resp.data;
    console.log(data);
    navigate('/createdappointment/')
  }

  if (!props.doctorinfo) 
  {
    return <p>Loading</p>
  }

  let docNames = props.doctorinfo.map((doc) => doc.doctor_name);

  return (
    <>
      <div className="container">
        <form>
          <select className="form-control" name="doctor" onChange={(e) => changeHandler(e)}>
            <option value="select">Select</option>
            {
              
              props.doctorinfo.map((doc) => (
                <option value={doc.doctor_name} >{doc.doctor_name}</option>
              ))
            }
          </select>
          <input
            type="text"
            className="form-control"
            name="fname"
            placeholder="First Name"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            className="form-control mt-3"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            className="form-control mt-3"
            name="contact"
            placeholder="Contact"
            onChange={(e) => changeHandler(e)}
          />
          <input 
            type="date"
            className="form-control mt-3"
            name="appt_date" 
            // onChange={(e) => setApptData({...apptData, date: e.target.value})}
            onChange={(e) => changeHandler(e)}
          />

          {/* <select name="appt_time" onChange={(e) => changeHandler(e)}>
            <option value="select" >Select</option>
            {times.map((time) =>
            {
              return(
                
                <option key={time.id} value={time.time}>{time.time}</option>
              )
            })};
          </select> */}

          {times.map((time) =>
          {
            return(
              <div key={time.id}>
                <input type="radio" className="btn-check" id={time.time} value={time.time} name="appt_time" onChange={(e) => changeHandler(e)} />
                <label className="btn btn-outline-primary" htmlFor={time.time}>{time.time}</label>
              </div>
            );
          })}
          <button className='btn btn-main' onClick={submitHandler} >Submit</button>
        </form>
        
      </div>
    </>
  )
}

export default NewAppointment