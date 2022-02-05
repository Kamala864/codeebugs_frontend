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
          </div>
        </div>
      </div>
      
        <div className="class-area pt-100 pb-100">
   <div className="container">
      <div className="row">


             
              

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
  </div>

    </div>
  
  )
}

// </div>

//         )
    
// }

export default Courses;