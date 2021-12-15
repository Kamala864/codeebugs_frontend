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
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="index.html" className="nav-link">
                    Home One
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index-2.html" className="nav-link">
                    Home Two
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index-3.html" className="nav-link active">
                    Home Three
                  </a>
                </li>
                <li className="nav-item">
                  <a href="index-4.html" className="nav-link">
                    Home Four
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pages
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="gallery.html" className="nav-link">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pricing.html" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="how-to-apply.html" className="nav-link">
                    How to Apply
                  </a>
                </li>
                <li className="nav-item">
                  <a href="programs.html" className="nav-link">
                    Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="enroll.html" className="nav-link">
                    Enroll
                  </a>
                </li>
                <li className="nav-item">
                  <a href="timetable.html" className="nav-link">
                    Timetable
                  </a>
                </li>
                <li className="nav-item">
                  <a href="faq.html" className="nav-link">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Account
                    <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="login.html" className="nav-link">
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="register.html" className="nav-link">
                        Register
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="error-404.html" className="nav-link">
                    Error Page
                  </a>
                </li>
                <li className="nav-item">
                  <a href="terms-of-service.html" className="nav-link">
                    Terms of Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="privacy-policy.html" className="nav-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="coming-soon.html" className="nav-link">
                    Coming Soon
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Teacher
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="teacher.html" className="nav-link">
                    Teacher
                  </a>
                </li>
                <li className="nav-item">
                  <a href="teacher-details.html" className="nav-link">
                    Teacher Details
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Event
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="event.html" className="nav-link">
                    Event
                  </a>
                </li>
                <li className="nav-item">
                  <a href="event-details.html" className="nav-link">
                    Event Details
                  </a>
                </li>
              </ul>
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
              <a href="#" className="nav-link">
                Blog
                <i className="bx bx-chevron-down" />
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog-details.html" className="nav-link">
                    Blog Details
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