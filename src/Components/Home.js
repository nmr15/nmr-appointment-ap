import { Link } from "react-router-dom"

const Home = (props) => 
{
  if(!props.doctorinfo)
  {
    return <p>Loading</p>
  }

  console.log(props)
  let docNames = props.doctorinfo.map((doc) => doc.doctor_name);
  console.log(docNames)

  return (
    <>
      <div >
        <section className="section__banner">
          <div className="banner">
            {/* <img className="banner__img" src="/img/banner-3.jpg" alt="" /> */}
            {/* <Link to="/newappointment"><button className="btn btn-primary btn-hero">Make an appointment</button></Link> */}
          </div>
        </section>
        
        <section className="section__services">
          <div className="container">
            <div className="services row text-center g-4 mt-5 py-5">
              <h2 className="p-3 ">Departments</h2>
              <div className="col-md">
                <div className="card hvr-float">
                  <div className="card-body">
                    <h5 className="card-title">Family Medicine</h5>
                    <img className="services__icon p-5" src="/img/stethoscope@2x.png" alt="Family Medicine" />
                    <p className="card-text py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut.
                    </p>
                    <a className="services__link" href="#">READ MORE <i class="bi bi-plus"></i></a>
                  </div>
                </div>  
              </div>
              <div className="col-md">
                <div className="card hvr-float">
                  <div className="card-body">
                    <h5 className="card-title">Neurology</h5>
                    <img className="services__icon p-5" src="/img/neurology@2x.png" alt="Neurology" />
                    <p className="card-text py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut.
                    </p>
                    <a className="services__link" href="#">READ MORE <i class="bi bi-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card hvr-float">
                  <div className="card-body">
                    <h5 className="card-title">Oncology</h5>
                    <img className="services__icon p-5" src="/img/medical_sample@2x.png" alt="Oncology" />
                    <p className="card-text py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut.
                    </p>
                    <a className="services__link" href="#">READ MORE <i class="bi bi-plus"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card hvr-float">
                  <div className="card-body">
                    <h5 className="card-title">Endocrinology</h5>
                    <img className="services__icon p-5" src="/img/kidneys@2x.png" alt="Oncology" />
                    <p className="card-text py-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra erat orci, ac auctor lacus tincidunt ut.
                    </p>
                    <a className="services__link" href="#">READ MORE <i class="bi bi-plus"></i></a>
                  </div>
                </div>
              </div>
              {/* <div className="services__box col-2">
                <h5 className="services__heading">Family Medicine</h5>
                <img className="services__icon" src="/img/stethoscope@2x.png" alt="Family Medicine" />
              </div>
              <div className="services__box col-2">
                <h5 className="services__heading">Neurology</h5>
                <img className="services__icon" src="/img/neurology@2x.png" alt="Neurology" />
              </div>
              <div className="services__box col-2">
                <h5 className="services__heading">Oncology</h5>
                <img className="services__icon" src="/img/medical_sample@2x.png" alt="Oncology" />
              </div>
              <div className="services__box col-2">
                <h5 className="services__heading">Endocrinology</h5>
                <img className="services__icon" src="/img/kidneys@2x.png" alt="Oncology" />
              </div>
              <div className="services__box col-2">
              <h5 className="services__heading">Pulmonology</h5>
              <img className="services__icon" src="/img/lungs@2x.png" alt="Oncology" />
            </div> */}
            </div>
          </div>
        </section>
        <section className="services2 py-5 bg-gray">
          <div className="container">
            <h2 className="text-center p-3">What We Provide</h2>
            <div className="row g-4">
              <div className="col-md">
                <div className="card">
                  <img src="/img/pediatrics.jpg" alt="pediatrics" className="card-img-top p-2" />
                  <div className="card-body">
                    <h5 className="card-title">Pediatric Care</h5>
                    <p className="card-text">Proin sed libero enim sed faucibus turpis in. Est pellentesque elit ullamcorper.</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card">
                  <img src="/img/radiology.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Radiology</h5>
                    <p className="card-text">Proin sed libero enim sed faucibus turpis in. Est pellentesque elit ullamcorper.</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card">
                  <img src="/img/urgent.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Urgent Care</h5>
                    <p className="card-text">Proin sed libero enim sed faucibus turpis in. Est pellentesque elit ullamcorper.</p>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="card">
                  <img src="/img/pharmacy.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Pharmacy</h5>
                    <p className="card-text">Proin sed libero enim sed faucibus turpis in. Est pellentesque elit ullamcorper.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-blue">View More</button>
          </div>
        </section>  
          
          {/* <div className="row justify-content-center"> */}
            
          {/* </div> */}
        


        <section className="section__appointment pt-5">
          <div className="appointmenthome">
            <h1 className="appointmenthome__heading text-center pt-4 pb-2">Make an Appointment Today</h1>
            <h2 className="appointmenthome__heading2 text-center">Call us at 999-1234</h2>
            <h3 className="text-center mt-3">Or use our online appointment system below</h3>
            <div className="text-center mt-5">
              <Link to="/selectdoctor">
                <button className="btn btn-blue btn-lg">
                  Schedule Appointment
                </button>
              </Link>
            </div >
          </div>
        </section>
      </div>
    </>
  )
}

export default Home