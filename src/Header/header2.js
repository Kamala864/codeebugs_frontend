function Header2(){
    return(
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <a href="#" className="navbar-brand"><i className="fa fa-cube" />Brand<b>Name</b></a>  		
  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">		
    <form className="navbar-form form-inline">
      <div className="input-group search-box">								
        <input type="text" id="search" className="form-control" placeholder="Search here..." />
        <span className="input-group-addon"><i className="material-icons"></i></span>
      </div>
    </form>
    <div className="navbar-nav ml-auto">
      <a href="#" className="nav-item nav-link active"><i className="fa fa-home" /><span>Home</span></a>
      <a href="#" className="nav-item nav-link"><i className="fa fa-gears" /><span>Projects</span></a>
      <a href="#" className="nav-item nav-link"><i className="fa fa-users" /><span>Team</span></a>
      <a href="#" className="nav-item nav-link"><i className="fa fa-bell" /><span>Notifications</span></a>
      <div className="nav-item dropdown">
        <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg" className="avatar" alt="Avatar" /> Antonio Moreno <b className="caret" /></a>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item"><i className="fa fa-user-o" /> Profile</a>
          <a href="#" className="dropdown-item"><i className="fa fa-calendar-o" /> Calendar</a>
          <a href="#" className="dropdown-item"><i className="fa fa-sliders" /> Settings</a>
          <div className="divider dropdown-divider" />
          <a href="#" className="dropdown-item"><i className="material-icons"></i> Logout</a>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}

export default Header2;