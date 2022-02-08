import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

// Project Imports
import CodeEditor from "../Code Editor/codeeditor";
import OutputLogs from "../Code Editor/OutputLogs";
import Header from "../Code Editor/Header";

function CourseDetail() {
  const { id } = useParams()

  // state hooks
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [outputLogs, setOutputLogs] = useState("");
  const [status, setStatus] = useState("Run");
  const [watchComplete, setWatchComplete] = useState(false);
  const [url, setUrl] = useState("http://localhost:5000/");
  const [tutorial, setTutorial] = useState([]);
  const [course, setCourse] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [courseIdList, setCourseIdList] = useState([]);


  useEffect(() => {
    const fetchCourse = async () => {
      axios.get("http://localhost:5000/course/" + id)
        .then(res => {
          setCourse(res.data)
          setTutorial(res.data.tutorial)
        })
        .catch(err => {
          console.log(err)
        })
    }

    fetchCourse();

    const fetchStudent = async () => {
       const data = {
      userID : localStorage.getItem("userID")
    }
      axios.post("http://localhost:5000/enrolledCourses", data)
      .then((res)=>{
        setEnrolledCourses(res.data.enrolledCourses)

        res.data.enrolledCourses.forEach((courselist) => {
          enrolledCourses.push(courselist)
        })
        
      })
        .catch(err => {
          console.log(err)
        })
    }

    fetchStudent();
  }, []);


  const handleWatchComplete = ({ played }) => {
    if (played > 0.8 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  const addProgress = () => {
    if (watchComplete === true) {
      const progress = course.weight
      console.log(progress)
      const data = {
        progress: course.weight
      }
      axios.put("http://localhost:5000/updateprogress/" + course._id, data)
        .then(res => {
          console.log(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  addProgress()

  // run button callback
  const runCode = () => {
    setStatus("Loading...");
    axios.post("http://localhost:5000/runCode", { language, code, input }).then((res) => {
      if (res.data.memory && res.data.cpuTime) {
        setOutputLogs("");
        setOutputLogs(
          `Memory Used: ${res.data.memory} \nCPU Time: ${res.data.cpuTime} \n${res.data.output} `
        );
      } else {
        setOutputLogs(`${res.data.output} `);
      }
      setStatus("Run");
    });
  };

  if (watchComplete === true) {
    var progress = <div>
      <h3>Progress: {course.weight}%</h3>
    </div>
  }

  const enroll = (e) => {
   
    if (localStorage.getItem("token") === null) {
      toast.error("Please login to enroll!", {
        position: toast.POSITION.TOP_CENTER
      })
      setTimeout(() => {
        window.location.href = "/login"
      }, 2000);

    } else {
      localStorage.setItem("courseID", id)
      toast.success("Please pay to enroll!", {
        position: toast.POSITION.TOP_CENTER
      })
      setTimeout(() => {
        window.location.href = "/payment"
      }, 2000);
    }
  }

   enrolledCourses.forEach((courses) => {
      courseIdList.push(courses.courseID)
    })

  if (courseIdList.includes(id) === false) {
    var buttonEnroll =
      <button className="btn-success float-right" style={{marginRight: "270px"}} onClick={enroll}>Enroll Now</button>
  } else {
    var buttonLesson =
      <li className="nav-item">
        <div className="items">
          <div class="items-head">
            <p>Lessons</p>
            <hr />
          </div>
          <div className="items-body">
            {tutorial.map((chapter) => {
              return (
                <div key={chapter._id} className="items-body-content">
                  <span onClick={(e) => {
                    setUrl("http://localhost:5000/" + chapter.video)
                  }}>
                    {chapter.chapterName}
                  </span>
                </div>
              )
            })
            }

          </div>
        </div>

      </li>
  }



  return (
    <section className="class-details-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="class-details-desc">
              <div className="class-desc-image">
                <div className="col-lg-6 col-md-6">

                  <ReactPlayer
                    url={url}
                    controls
                    onProgress={handleWatchComplete}
                  />
                  {progress}


                  <div className="tab class-details-tab ml-3 bg-white">
                    <div className="row">
                      <ul className="tabs nav">
                        <li className="nav-item">
                          <h3>{course.courseTitle}</h3>
                          {buttonLesson}
                        </li>
                        
                      </ul>
                      
                    </div>
                    
                  </div>
                  
                </div>
                {buttonEnroll}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 bg-dark" >

            <Header
              value={language}
              status={status}
              code={code}
              runCode={() => runCode()}
              onChangeLanguage={({ value }) => setLanguage(value)}
            />

            <CodeEditor
              value={code}
              onCodeChange={(text) => setCode(text)}
              programmingLanguage={language}
            />

            <div className="optionSegment mb-4 mt-4 " >

              <OutputLogs value={outputLogs} />
            </div>
          </div>
        </div>
      </div>


    </section>

  )

}

export default CourseDetail;