import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";



class CourseDashboard extends Component{

    state={
        listcourses:[]
    }

componentDidMount(){
    axios.get("http://localhost:5000/course/showall")
    .then((res)=>{
        this.setState({
            listcourses:res.data
        })
        localStorage.setItem('courselength',this.state.listcourses.length)
    })
    .catch((err)=>{

    })


}


searchState = (e) => {
  this.setState({
       [e.target.name]: e.target.value
  })
}

search=(e)=>{
  e.preventDefault()
  const data = {
    course_title : this.state.course_title
  }
  console.log(this.state.course_title)
  axios.get("http://localhost:5000/searchcourse/"+  this.state.course_title)
  .then((res)=>{
    localStorage.setItem("search", this.state.course_title)
    window.location.href = "/coursesearchlist"
  })
  .catch()
}


//delete function

deleteproduct=(pro_idd)=>{
    axios.delete("http://localhost:90/deletecourse/" + pro_idd )
    .then()
    .catch()
   window.location.href="/coursedashboard"
}

    render(){
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
          <a className="nav-link" href="/userdashboard">
            <span className="menu-title">Users</span>
            <i className="mdi mdi-format-list-bulleted menu-icon" />
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/coursedashboard">
            <span className="menu-title">Courses</span>
            <i className="mdi mdi-table-large menu-icon" />
          </a>
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

           <input type="text" className="course-search" placeholder="Search.." name="course_title" value ={this.state.course_title} onChange = {this.searchState}/>
          <button onClick={this.search}><i class="fa fa-search">Search</i></button>
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
      this.state.listcourses.map(courses=>{
          return(

                <tbody>
                    <tr>
                    
                    <td>{courses.title}
                    </td>
                    <td>{courses.description}</td>
                    <td>{courses.lecturer}</td>
                    
                    
                    <NavLink className="btn-info bg-white" to={"/update/"+courses._id}><button className="btn-success m-4">Update</button></NavLink>
                    <button onClick={()=>this.deleteproduct(courses._id)}className="btn-danger bg-danger">Delete</button>
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
}
export default CourseDashboard;