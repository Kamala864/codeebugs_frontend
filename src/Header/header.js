import { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component{
    render() {
        return(
        <div className="navbar-area">
  <div className="main-responsive-nav">
    <div className="container">
      <div className="main-responsive-menu">
        <div className="logo">
          <a href="index.html">
            <img src="assets/img/logo.png" alt="image" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="main-navbar">
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="/">
          <img src="assets/img/logo.png" alt="image" />
        </a>
        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
                
              </a>
           
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Courses
                
              </a>
              
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Payments
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                About Us
              </a>
            </li>
          </ul>
          <div className="others-options d-flex align-items-center">
          <div class="option-item">
<div className="dropdown language-switcher d-inline-block">
  <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span>Profile <i className="bx bx-chevron-down" /></span>
  </button>
  <div className="dropdown-menu">
    <NavLink to="/userprofile" className="dropdown-item d-flex align-items-center">
<img src="assets/img/Navbar/user.png" className="shadow-sm" alt="flag" />
      <span>Profile</span>
    </NavLink>
    <NavLink to="/logout" className="dropdown-item d-flex align-items-center">
    <img src="assets/img/Navbar/logout.png" className="shadow-sm" alt="flag" />
      <span>Logout</span>
    </NavLink>
  </div>
</div>
</div>
            
            <div className="option-item">
              <a href="/login" className="default-btn">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="others-option-for-responsive">
    <div className="container">
      <div className="dot-menu">
        <div className="inner">
          <div className="circle circle-one" />
          <div className="circle circle-two" />
          <div className="circle circle-three" />
        </div>
      </div>
      <div className="container">
        <div className="option-inner">
          <div className="others-options d-flex align-items-center">
            
            <div className="option-item">
              <a href="#" className="default-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
    }
}

export default Header;