import { Component } from "react";

class Admindashboard extends Component{
    render() {
        return(
            <div className="container-scroller">
  {/* partial:partials/_navbar.html */}
  <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo" href="index.html"><img src="adminassets/images/logo.svg" alt="logo" /></a>
      <a className="navbar-brand brand-logo-mini" href="index.html"><img src="adminassets/images/logo-mini.svg" alt="logo" /></a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span className="mdi mdi-menu" />
      </button>
      <div className="search-field d-none d-md-block">
        <form className="d-flex align-items-center h-100" action="#">
          <div className="input-group">
            <div className="input-group-prepend bg-transparent">
              <i className="input-group-text border-0 mdi mdi-magnify" />
            </div>
            <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
          </div>
        </form>
      </div>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item nav-profile dropdown">
          <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <div className="nav-profile-img">
              <img src="adminassets/images/faces/face1.jpg" alt="image" />
              <span className="availability-status online" />
            </div>
            <div className="nav-profile-text">
              <p className="mb-1 text-black">David Greymaax</p>
            </div>
          </a>
          <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-cached mr-2 text-success" /> Activity Log </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-logout mr-2 text-primary" /> Signout </a>
          </div>
        </li>
     
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <i className="mdi mdi-email-outline" />
            <span className="count-symbol bg-warning" />
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
            <h6 className="p-3 mb-0">Messages</h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="adminassets/images/faces/face4.jpg" alt="image" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                <p className="text-gray mb-0"> 1 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="adminassets/images/faces/face2.jpg" alt="image" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                <p className="text-gray mb-0"> 15 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img src="adminassets/images/faces/face3.jpg" alt="image" className="profile-pic" />
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                <p className="text-gray mb-0"> 18 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <h6 className="p-3 mb-0 text-center">4 new messages</h6>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
            <i className="mdi mdi-bell-outline" />
            <span className="count-symbol bg-danger" />
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <h6 className="p-3 mb-0">Notifications</h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-success">
                  <i className="mdi mdi-calendar" />
                </div>
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-warning">
                  <i className="mdi mdi-settings" />
                </div>
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                <p className="text-gray ellipsis mb-0"> Update dashboard </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                  <i className="mdi mdi-link-variant" />
                </div>
              </div>
              <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                <p className="text-gray ellipsis mb-0"> New admin wow! </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <h6 className="p-3 mb-0 text-center">See all notifications</h6>
          </div>
        </li>
 
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="mdi mdi-menu" />
      </button>
    </div>
  </nav>
  {/* partial */}
  <div className="container-fluid page-body-wrapper">
    {/* partial:partials/_sidebar.html */}
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
              <img src="adminassets/images/faces/face1.jpg" alt="profile" />
              <span className="login-status online" />
              {/*change to offline or busy as needed*/}
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon" />
          </a>
        </li>
        
        
        <li className="nav-item">
          <a className="nav-link" href="pages/forms/basic_elements.html">
            <span className="menu-title">Forms</span>
            <i className="mdi mdi-format-list-bulleted menu-icon" />
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="pages/tables/basic-table.html">
            <span className="menu-title">Tables</span>
            <i className="mdi mdi-table-large menu-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
            <span className="menu-title">Sample Pages</span>
            <i className="menu-arrow" />
            <i className="mdi mdi-medical-bag menu-icon" />
          </a>
          <div className="collapse" id="general-pages">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
              <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-item sidebar-actions">
          <span className="nav-link">
            <div className="border-bottom">
              <h6 className="font-weight-normal mb-3">Projects</h6>
            </div>
            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>
            
          </span>
        </li>
      </ul>
    </nav>
    {/* partial */}
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home" />
            </span> Dashboard
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">95,5741</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Tickets</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Assignee </th>
                        <th> Subject </th>
                        <th> Status </th>
                        <th> Last Update </th>
                        <th> Tracking ID </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img src="adminassets/images/faces/face1.jpg" className="mr-2" alt="image" /> David Grey
                        </td>
                        <td> Fund is not recieved </td>
                        <td>
                          <label className="badge badge-gradient-success">DONE</label>
                        </td>
                        <td> Dec 5, 2017 </td>
                        <td> WD-12345 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="adminassets/images/faces/face2.jpg" className="mr-2" alt="image" /> Stella Johnson
                        </td>
                        <td> High loading time </td>
                        <td>
                          <label className="badge badge-gradient-warning">PROGRESS</label>
                        </td>
                        <td> Dec 12, 2017 </td>
                        <td> WD-12346 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="adminassets/images/faces/face3.jpg" className="mr-2" alt="image" /> Marina Michel
                        </td>
                        <td> Website down for one week </td>
                        <td>
                          <label className="badge badge-gradient-info">ON HOLD</label>
                        </td>
                        <td> Dec 16, 2017 </td>
                        <td> WD-12347 </td>
                      </tr>
                      <tr>
                        <td>
                          <img src="adminassets/images/faces/face4.jpg" className="mr-2" alt="image" /> John Doe
                        </td>
                        <td> Loosing control on server </td>
                        <td>
                          <label className="badge badge-gradient-danger">REJECTED</label>
                        </td>
                        <td> Dec 3, 2017 </td>
                        <td> WD-12348 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

export default Admindashboard;