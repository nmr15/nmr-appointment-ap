import React from 'react'

const DoctorsList = (props) => 
{
  return (
    <>
      <section className="container">
        <div className="row">
          {
            props.doctorinfo.map((doc) => 
            (
              <div className="col-md-3" key={doc._id}>
                <div>
                  <img src={doc.img} alt="" className="w-75" />
                </div>
                <div className="doctor__info">
                  <span>{doc.specialty}</span>
                  <h5>{doc.doctor_name}</h5>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default DoctorsList