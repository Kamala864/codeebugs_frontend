import axios from "axios";
import { Component } from "react";
import { Navigate, Route } from "react-router-dom";

class CourseInsert extends Component{

    state = {
        courseTitle : '',
        courseContent: '',
        coursePrice: '',
        courseType:'',
        filename : null,
        user: localStorage.getItem('userId'),
        con : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
    }
    textChangeHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    changeFileHandler=(e)=>{
        this.setState({
            filename : e.target.files[0]
        })
    }

    sendData = (e)=>{
        e.preventDefault();
        const data =  new FormData();

        data.append('courseTitle', this.state.courseTitle)
        data.append('courseContent', this.state.courseContent)
        data.append('courseType', this.state.courseType)
        data.append('coursePrice', this.state.coursePrice)
        data.append('user', this.state.user)
        data.append('course_image', this.state.filename)
        axios.post("http://localhost:90/course/insert", data, this.state.con)
        .then((result)=>{
            console.log(result)
        })
        .catch()
        window.location.href="/courses"
    }
    render(){
        if (!localStorage.getItem('token')) {
            <Route path="/" element={<Navigate replace to="/" />} />
        }
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
                                <input type="text" name="courseContent" placeholder="Course Content"
                                value={this.state.courseContent} onChange={this.textChangeHandler}/>                               
                                <input type="text" name="coursePrice" placeholder="Course Price"
                                value={this.state.coursePrice} onChange={this.textChangeHandler}/>
                                <input type="text" name="courseType" placeholder="Course Type"
                                value={this.state.courseType} onChange={this.textChangeHandler}/>
                                <input type="file" name="filename"
                                onChange={this.changeFileHandler}/>
                                <div className="center"><button onClick={this.sendData}>Add</button></div>
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