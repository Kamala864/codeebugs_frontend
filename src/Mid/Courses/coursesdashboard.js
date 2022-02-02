import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function CourseDashboard(){

  const [listcourses,setlistcourses] = useState([])
  const [searchdata, setSearchdata] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/course/showall")
    .then(res => {
      setlistcourses(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })
      
  }, []);

  const logout = (e) => {
    localStorage.clear()
    window.location.href = "/login"
  }


  const CourseDetailUpdate=(course_id)=>{
    axios.get("http://localhost:5000/course/" + course_id)
      .then((res) => {
        console.log(res.data)
        navigate(`/course/update/${course_id}`, { state: res.data })
      }
      )
  }


//delete function

const deleteproduct=(pro_idd)=>{
    axios.delete("http://localhost:5000/deletecourse/" + pro_idd )
    .then()
    .catch()
    window.location.href="/coursedashboard"
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
          <NavLink to={"/admin/users"} className="nav-link">
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
        <li className="nav-item sidebar-actions">
          <h1><span className="nav-link">
            <button className="btn btn-danger ml-3" onClick={logout}>Logout</button>
          </span></h1>
        </li>
      </ul>
    </nav>


    <div className="main-panel">
      <div className="content-wrapper">
       <div className="container p-5 ">
       <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
           <input type="text" placeholder="Search.." name="searchdata" value={searchdata} onChange={e => {setSearchdata(e.target.value)}}/>
          <br/>
          <br/>
          <br/>
           <table className="table">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Course Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  
  {
      listcourses.filter((courses) =>{
        if(searchdata === ""){
          return courses
        } else if (courses.title.toLowerCase().includes(searchdata.toLowerCase())){
          return courses
        }
      }).map(courses=>{
          return(

                <tbody>
                    <tr>
                    
                    <td>{courses.title}
                    </td>
                    <td>{courses.description}</td>
                    <td>{courses.lecturer}</td>
                    
                    
                    <button onClick={e => {CourseDetailUpdate(courses._id)}} className="btn-success m-4">Update</button>
                    <button onClick={e => {deleteproduct(courses._id)}}className="btn-danger bg-danger">Delete</button>
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
</div>
</div>
</div>
</div>
</div>


        )
    }

export default CourseDashboard;