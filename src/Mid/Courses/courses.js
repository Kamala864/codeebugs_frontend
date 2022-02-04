import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Courses(){

const [listcourses,setlistcourses] = useState([])
const navigate = useNavigate();

useEffect(() => {
  axios.get("http://localhost:5000/course/showall")
  .then(res => {
    setlistcourses(res.data.data)
  })
  .catch(err =>{
    console.log(err)
  })
    
}, []);

<<<<<<< HEAD
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const singleCourse = (course_id) => {
    axios.get("http://localhost:5000/course/" + course_id)
      .then((res) => {
        console.log(res.data)
        navigate(`/courses/${res.data.courseTitle}`, { state: res.data })
      }
      )
  }

  return (
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
                </ul>
                <input type="text" placeholder="Search.." name="searchdata" value={searchdata} onChange={e => { setSearchdata(e.target.value) }} />
              </div>
            </div>
=======
const singleCourse=(course_id)=>{
  axios.get("http://localhost:5000/course/"+course_id)
  .then((res)=>{
    console.log(res.data)
    navigate(`/courses/${res.data.title}`, {state:  res.data})
    }
  )
}

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
                        
          
            </ul>
>>>>>>> c8dc65e3f640625413a3994b4b0d99bf4c43f72d
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="class-area pt-100 pb-100">
    <div className="container">
      <div className="row">


<<<<<<< HEAD
            {
              currentCourses.filter((course) => {
                if (searchdata == "") {
                  return course
                } else if (course.courseTitle.toLowerCase().includes(searchdata.toLowerCase())) {
                  return course
                }
              }).map((course) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="single-class">
                      <div className="class-image">
                        <a onClick={() => singleCourse(course._id)}>
                          <img src="assets/img/class/class-1.jpg" alt="image" />
                        </a>
                      </div>
                      <div className="class-content">
                        <div className="price">$880</div>
                        <h3>
                          <a href="#">{course.courseTitle}</a>
                        </h3>
                        <div className="class-btn">
                          <a onClick={() => singleCourse(course._id)} className="default-btn">See More</a>
                        </div>
                      </div>
                    </div>
=======
      {
        listcourses.map((course)=>{
            return(
              <div className="col-lg-4 col-md-6">
              <div className="single-class">
                <div className="class-image">
                <a onClick={()=>singleCourse(course._id)}>
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
                    <a className="default-btn">Join Class</a>
>>>>>>> c8dc65e3f640625413a3994b4b0d99bf4c43f72d
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

export default Courses;