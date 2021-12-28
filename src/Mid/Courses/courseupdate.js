import axios from "axios";
import React from "react";
import { Component } from "react";


class CourseUpdate extends Component{
    state = {
        courseTitle : '',
        courseDescription: '',
        courseLecturer: '',
        coursePrice: '',
        id:this.props.match.params.iddd,
    }


componentDidMount(){
    axios.get("http://localhost:90/course/"+this.state.id)
    .then(res=>{
      this.setState({
          courseTitle:res.data.courseTitle,
          courseDescription:res.data.courseType,
          courseLecturer:res.data.coursePrice,
      })
    })
}

textChangeHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

sendData = (e)=>{
    e.preventDefault();

    axios.put("http://localhost:90/course/updatecourse/"+this.state.id)
    .then((result)=>{
        console.log(result) 
    })
    .catch()
    window.location.href="/coursedashboard"
}


render(){
    return(

        <section className="class-area2 bg-fdf6ed pt-100 pb-70">
                <div className="cont" id="container">
                    <div className="d-flex justify-content-center">
                <div className="form-container col-lg-8 ">
                            <form>
                            <h1>Add Course</h1>
                                <div class="row">
                                <input type="text" name="courseTitle" placeholder="Course Title"
                                value={this.state.courseTitle} onChange={this.textChangeHandler}/>                               
                                <input type="text" name="courseDescription" placeholder="Course Description"
                                value={this.state.courseDescription} onChange={this.textChangeHandler}/>
                                <input type="text" name="courseLecturer" placeholder="Course Lecturer"
                                value={this.state.courseLecturer} onChange={this.textChangeHandler}/>
                                <div className="center"><button type="submit" onClick={this.sendData}>Add</button></div>
                                </div>
                            </form>
                        </div>
                        </div>
                        </div>
                </section>
    )
}


}
   
export default CourseUpdate;