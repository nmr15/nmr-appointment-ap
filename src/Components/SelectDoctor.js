import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SelectDoctor = (props) => 
{

  const [isVisible, setIsVisible] = useState(false);
  
  if (!props.doctorinfo) 
  {
    return <p>Loading</p>
  }

  return (
    <>
      <div className="container">
        <h1 className="appt__header">Select Doctor</h1>
        <div className="row py-5">
          {
            props.doctorinfo.map((doc) => (
              <div className="card col-4 mx-5 my-2 text-center" key={doc._id}>
                <div className="card-header">
                  {doc.doctor_name}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{doc.specialty}</h5>
                  <input 
                    type="radio" 
                    className="btn-check" 
                    id={doc.doctor_name} 
                    value={doc.doctor_name}
                    name="doctor"
                    onClick={() => setIsVisible(true)}
                    onChange={(e) => props.changeHandler(e)}
                  />
                  <label className="btn btn-outline-primary" htmlFor={doc.doctor_name}>Schedule Appointment</label>
                </div>
              </div>
            ))
          }
        </div>  
        
        {isVisible && (
          <Link to="/selectdatetime">
            <button className="btn btn-main btn-lg mx-auto" style={{ display: "" }}>
              Select Date and Time
            </button>
          </Link>
        )}
          

      </div>
    </>
  )
}

export default SelectDoctor