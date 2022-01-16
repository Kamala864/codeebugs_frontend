import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



function UserDashboard(){

  const [listcourses,setlistcourses] = useState([])
  const [searchdata, setSearchdata] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/user/showall")
    .then(res => {
      setlistcourses(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })
      
  }, []);


//delete function

const deleteuser=(pro_idd)=>{
    axios.delete("http://localhost:5000/deleteuser/" + pro_idd )
    .then()
    .catch()
    window.location.href="/userdashboard"
}

        return(
            <div className="container-scroller">
  <div className="container-fluid page-body-wrapper">
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
              <img src="adminassets/images/faces/face1.jpg" alt="profile" />
              <span className="login-status online" />
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon" />
          </a>
        </li>
        
        
        <li className="nav-item">
          <NavLink to={"/admin/users"} className="nav-link" >
            <span className="menu-title">Users</span>
            <i className="mdi mdi-format-list-bulleted menu-icon" />
          </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink to={"/admin/courses"} className="nav-link">
            <span className="menu-title">Courses</span>
            <i className="mdi mdi-table-large menu-icon" />
          </NavLink>
        </li>
        <li className="nav-item sidebar-actions">
          <a href="/courseinsert"><span className="nav-link">
            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a Course</button>
          </span></a>
        </li>
      </ul>
    </nav>



       <div className="container p-5 ">
            
           <NavLink className="nav-link" to="/courseinsert"><button className="btn-info m-5">Add New Course</button></NavLink>

           <input type="text" placeholder="Search.." name="searchdata" value={searchdata} onChange={e => {setSearchdata(e.target.value)}}/>
          <br/>
          <br/>
          <br/>
           <table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  
  {
      listcourses.filter((user) =>{
        if(searchdata === ""){
          return user
        } else if (user.full_name.toLowerCase().includes(searchdata.toLowerCase())){
          return user
        }
      }).map(user=>{
          return(

                <tbody>
                    <tr>
                    
                    <td>{user.full_name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    
                    
                    <NavLink className="btn-info bg-white" to={"/update/"+user._id}><button className="btn-success m-4">Update</button></NavLink>
                    <button onClick={e => {deleteuser(user._id)}}className="btn-danger bg-danger">Delete</button>
                    </tr>
                    
                    
                </tbody>
          )
      })
  }
  
</table>

</div>
</div>
</div>


        )
    }

export default UserDashboard;