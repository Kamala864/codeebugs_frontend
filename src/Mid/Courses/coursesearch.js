import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";



class CourseSearch extends Component{

    state={
        listcourses:[],
    }

componentDidMount(){
       axios.get("http://localhost:5000/searchcourse/"+   localStorage.getItem("search"))
       .then((res)=>{
            this.setState({
                 listcourses : res.data.data
               })
       })
       .catch()
   
}

//delete function



    render(){
        return(
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

                    </tr>
                    
                    
                </tbody>
          )
      })
  }
  
</table>

        )
    }
}
export default CourseSearch;