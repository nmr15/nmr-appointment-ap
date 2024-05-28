import React from 'react'

const CompleteAppointment = (props) => 
{
  return (
    <>
      <div className="container">
        <form>
          <input
            type="text"
            className="form-control"
            name="fname"
            placeholder="First Name"
            onChange={(e) => props.changeHandler(e)}
          />
          <input
            type="text"
            className="form-control mt-3"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => props.changeHandler(e)}
          />
          <input
            type="text"
            className="form-control mt-3"
            name="contact"
            placeholder="Contact"
            onChange={(e) => props.changeHandler(e)}
          />
        </form>
      </div>
    </>
  )
}

export default CompleteAppointment