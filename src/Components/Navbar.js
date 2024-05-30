import { Link } from "react-router-dom"

const Navbar = () => 
{
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Klinik</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/selectdoctor">Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourdoctors">Find a Doctor</Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Pay Your Bill</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact Us</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
}

export default Navbar