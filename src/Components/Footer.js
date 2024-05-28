import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => 
{
  return (
    <>
      <footer className="container-fluid bg-main mt-5 py-5 px-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer__menu">
              <h2>Logo</h2>
              <p>Aliquam vel porttitor elit. Etiam imperdiet nibh at enim fermentum, et suscipit orci maximus. Ut interdum gravida lectus.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer__menu">
              {/* <h3 className="footer__heading">Patients</h3> */}
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to="/ourdoctors" className="footer__list-link" >Find a Doctor</Link>
                </li>
                <li className="footer__list-item mt-2">
                  <Link to="/login" className="footer__list-link" >Login</Link>
                </li>
                <li className="footer__list-item mt-2">
                  <Link to="/register" className="footer__list-link" >Register</Link>
                </li>
                <li className="footer__list-item mt-2">
                  <Link to="/newappointment" className="footer__list-link" >Make an appointment</Link>
                </li>
                <li className="footer__list-item mt-2">
                  <Link to="/patientdashboard" className="footer__list-link" >Patient Dashboard</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer__menu">
              {/* <h6 className="footer__heading">Doctors</h6> */}
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to="/appt" className="footer__list-link" >Pay Your Bill</Link>         </li>
                <li className="footer__list-item mt-2">
                  <a href="#" className="footer__list-link" >Contact Us</a>
                </li>
                <li className="footer__list-item mt-2">
                  <a href="#" className="footer__list-link" >News & Blog</a>
                </li>
                <li className="footer__list-item mt-2">
                  <a href="#" className="footer__list-link" >About Us</a>
                </li>
                <li className="footer__list-item mt-2">
                  <a href="#" className="footer__list-link" >Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer