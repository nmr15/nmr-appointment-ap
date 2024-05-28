import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NewAppointment from './Components/NewAppointment';
import SuccessAppointment from './Components/SuccessAppointment';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import axios from 'axios';
import DoctorsList from './Components/DoctorsList';
import DashboardDoctor from './Components/DashboardDoctor';
import DashboardPatient from './Components/DashboardPatient';
import ViewAppointments from './Components/ViewAppointments';
import SelectDoctor from './Components/SelectDoctor';
import SelectDateTime from './Components/SelectDateTime';
import CompleteAppointment from './Components/CompleteAppointment';

function App() 
{
  let [doctorsData, setDoctorsData] = useState([]);

  let [apptData, setApptData] = useState({
    doctor: "",
    fname: "",
    lname: "",
    contact: "",
    appt_date: "",
    appt_time: ""
  })

  let [doctor, setDoctor] = useState([]);

  let docHandler = (e) =>
  {
    setDoctor(e.target.value);
    console.log("Chosen Doctor" + doctor);
  }

  let changeHandler = (e) => {
    // e.preventDefault();
    setApptData({ ...apptData, [e.target.name]: e.target.value });
    console.log(apptData);

  }

  useEffect(() =>
  {
    let fetchData = async () =>
    {
      let resp = await axios.get(process.env.REACT_APP_BACKENDURL + "doctors");
      // let resp = await axios.get("http://localhost:3002/doctors");
      let data = await resp.data;
      // console.log('from json')
      // console.log(data);
      setDoctorsData(data);
      // console.log(doctorsData)
    };

    fetchData();
  }, []);

  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home doctorinfo={doctorsData} />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='selectdoctor' element={<SelectDoctor doctorinfo={doctorsData} docHandler={docHandler} changeHandler={changeHandler} />} />
        <Route path='selectdatetime' element={<SelectDateTime apptInfo={apptData} changeHandler={changeHandler} />} />
        <Route path='completeappointment' element={<CompleteAppointment apptInfo={apptData} changeHandler={changeHandler} />} />
        <Route path='newappointment' element={<NewAppointment doctorinfo={doctorsData} />} />
        <Route path='createdappointment' element={<SuccessAppointment />} />
        <Route path='ourdoctors' element={<DoctorsList />} />
        <Route path='doctordashboard' element={<DashboardDoctor />} />
        <Route path='patientdashboard' element={<DashboardPatient />} />
        <Route path='appt' element={<ViewAppointments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
