import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Courses extends Component{


  state={
    listcourses : [],
    course_title : ""
}

componentDidMount(){
  axios.get("http://localhost:5000/course/showall")
  .then((res)=>{
      this.setState({
          listcourses: res.data.data
      })
      console.log(res.data.data)
      localStorage.setItem('courselength',this.state.listcourses.length)

  })
  .catch((err)=>{

  })

}

singleCourse=(course_id)=>{
  axios.get("http://localhost:5000/course/"+course_id)
  .then((res)=>{
    <Link to={{  pathname: "/coursedetail",  state: res.data }}></Link>
        window.location.href="/coursedetail"
  })
  .catch()
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
  console.log(data)
  axios.get("http://localhost:5000/searchcourse", this.state.course_title)
  .then((res)=>{
    console.log(res)
  })
  .catch()
}

    render(){
        return(
            <div>
  <div className="page-banner-area item-bg1">
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="page-banner-content">
            <h2>Class</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Class</li>
                        
          <input type="text" placeholder="Search.." name="course_title" value ={this.state.course_title} onChange = {this.searchState}/>
          <button onClick={this.search}   ><i class="fa fa-search">Search</i></button>
          
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="class-area pt-100 pb-100">
    <div className="container">
      <div className="row">


{
        this.state.listcourses.map((course)=>{
            return(
              <div className="col-lg-4 col-md-6">
              <div className="single-class">
                <div className="class-image">
                <a onClick={()=>this.singleCourse(course._id)}>
                    <img src="assets/img/class/class-1.jpg" alt="image" />
                  </a>
                </div>
                <div className="class-content">
                  <div className="price">$880</div>
                  <h3>
                    <a href="#">{course.title}</a>
                  </h3>
                  <p>{course.description}</p>
                  <ul className="class-list">
                    <li>
                      <span>Age:</span>
                      3-5 Year
                    </li>
                    <li>
                      <span>Time:</span>
                      8-10 AM
                    </li>
                    <li>
                      <span>Seat:</span>
                      25
                    </li>
                  </ul>
                  <div className="class-btn">
                    <a href="#" className="default-btn">Join Class</a>
                  </div>
                </div>
              </div>
            </div>
            )
        })

    }

        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <a href="#" className="prev page-numbers">
              <i className="bx bx-chevron-left" />
            </a>
            <a href="#" className="page-numbers">1</a>
            <span className="page-numbers current" aria-current="page">2</span>
            <a href="#" className="page-numbers">3</a>
            <a href="#" className="page-numbers">4</a>
            <a href="#" className="next page-numbers">
              <i className="bx bx-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="class-shape">
      <div className="shape-1">
        <img src="assets/img/class/class-shape-1.png" alt="image" />
      </div>
      <div className="shape-2">
        <img src="assets/img/class/class-shape-2.png" alt="image" />
      </div>
    </div>
  </section>
</div>

        )
    }
}

export default Courses;