import { Component } from "react";

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
        <a className="navbar-brand" href="index.html">
          <img src="assets/img/logo.png" alt="image" />
        </a>
        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
                
              </a>
           
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pages
                
              </a>
              
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Teacher
                
              </a>
              
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Event
                
              </a>
             
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Class
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="class.html" className="nav-link">
                    Class
                  </a>
                </li>
                <li className="nav-item">
                  <a href="class-details.html" className="nav-link">
                    Class Details
                  </a>
                </li>
              </ul>
            </li>
            
               
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="others-options d-flex align-items-center">
            
            <div className="option-item">
              <a href="#" className="default-btn">Login</a>
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
              <div className="dropdown language-switcher d-inline-block">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>Language <i className="bx bx-chevron-down" /></span>
                </button>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item d-flex align-items-center">
                    <img src="assets/img/english.png" className="shadow-sm" alt="flag" />
                    <span>English</span>
                  </a>
                  <a href="#" className="dropdown-item d-flex align-items-center">
                    <img src="assets/img/arab.png" className="shadow-sm" alt="flag" />
                    <span>العربيّة</span>
                  </a>
                  <a href="#" className="dropdown-item d-flex align-items-center">
                    <img src="assets/img/germany.png" className="shadow-sm" alt="flag" />
                    <span>Deutsch</span>
                  </a>
                  <a href="#" className="dropdown-item d-flex align-items-center">
                    <img src="assets/img/portugal.png" className="shadow-sm" alt="flag" />
                    <span>Português</span>
                  </a>
                  <a href="#" className="dropdown-item d-flex align-items-center">
                    <img src="assets/img/china.png" className="shadow-sm" alt="flag" />
                    <span>简体中文</span>
                  </a>
                </div>
              </div>
            </div>
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