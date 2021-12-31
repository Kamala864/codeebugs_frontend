import axios from "axios";
import { Component } from "react";

class CourseInsert extends Component{

    state = {
        courseTitle : '',
        courseDescription: '',
        courseLecturer: ''
    }

    textChangeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    sendData =(e)=>{
        e.preventDefault();
        const data = {
            title: this.state.courseTitle,
            description: this.state.courseDescription,
            lecturer: this.state.courseLecturer
        }
        axios.post("http://localhost:5000/addcourse", data)
        .then((result)=>{
            console.log(result)
            alert("Course inserted")
        })
        .catch()
        window.location.href="/courseinsert"
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

export default CourseInsert;