import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";



class Users extends Component{

    state={
        users:[],
        
    }
    

componentDidMount(){
    axios.get("http://localhost:90/users/showall")
    .then((res)=>{
        this.setState({
            users:res.data
            
        })
        localStorage.setItem('count',this.state.users.length)
        
        
    })
    .catch((err)=>{

    })
    
}

deleteuser=(user_idd)=>{
    axios.delete("http://localhost:90/user/delete/" + user_idd )
    .then()
    .catch()
   window.location.href="/userdashboard"
}




    render(){
        return(

          <div className="section layout_padding padding_bottom-0">
        <div class="container-scroller mt-3">

  <div className="container-fluid page-body-wrapper">
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
              <img src="assets/images/faces/face1.jpg" alt="profile" />
              <span className="login-status online" />
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">{localStorage.getItem('username')}</span>
              <span className="text-secondary text-small">{localStorage.getItem('role')}</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard" id="maindashboard">
            <span className="menu-title">Dashboard</span>
            
            <i className="mdi mdi-home menu-icon" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/userdashboard">
            <span className="menu-title">Users</span>
            <i className="mdi mdi-contacts menu-icon" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="categories">
            <span className="menu-title">Categories</span>
            <i className="mdi mdi-format-list-bulleted menu-icon" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/coursedashboard">
            <span className="menu-title">Courses</span>
            <i className="mdi mdi-table-large menu-icon" />
          </NavLink>
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
    


    <div className="container p-5 ">
           <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">User Type</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  {
      this.state.users.map(user=>{
          return(
            

                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
     
                    <NavLink className="btn-info bg-white" to={"/userupdate/"+user._id}>
                      <button className="btn-success m-4">Update</button></NavLink>
                    <button onClick={()=>this.deleteuser(user._id)} className="btn-danger bg-danger">Delete</button>
                    </tr> 
                    
                </tbody>
          )
      })
  }
  
</table>

</div>
</div>
    </div>
</div>


       

        )
    }
}
export default Users;