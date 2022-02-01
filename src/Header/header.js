import { Component } from "react";

class Header extends Component {
  logOut = (e) => {
    localStorage.clear()
    window.location.href = "/login"
  }
  render() {

    if (localStorage.getItem('token')) {
      var menu = <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              Home
            </a>

          </li>
          <li className="nav-item">
            <a href="/courses" className="nav-link">
              Courses

            </a>

          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Notifications
            </a>
          </li>
        </ul>



        <div className="others-options d-flex align-items-center mr-3">
          <div class="input-group">
            <div class="form-outline">
              <input id="search-input" type="search" id="form1" class="form-control rounded" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="others-options d-flex align-items-center">
          <div class="nav-item">
            <a href="/userprofile" className="nav-link font-weight-bold">
              {localStorage.getItem('username')}
            </a>
          </div>
        </div>

      </div>
    }
    else {
      var menu = <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              Home
            </a>

          </li>
          <li className="nav-item">
            <a href="/courses" className="nav-link">
              Courses
            </a>

          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              About Us
            </a>
          </li>
        </ul>


        <div className="others-options d-flex align-items-center mr-3">
          <div class="input-group">
            <div class="form-outline">
              <input id="search-input" type="search" id="form1" class="form-control rounded" placeholder="Search" />
            </div>
          </div>
        </div>



        <div className="others-options d-flex align-items-center">
          <div className="option-item">
            <a href="/login" className="default-btn">Login</a>
          </div>
        </div>
      </div>
    }

    return (
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="/">
                  <img src="logo.png" alt="image" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="/">
                <img src="logo.png" alt="image" />
              </a>
              {menu}
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
          </div>
        </div>
      </div>
    )
  }
}

export default Header;