import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";


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


  return (
    <section className="class-details-area mt-2">
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <Header
              value={language}
              status={status}
              code={code}
              runCode={() => runCode()}
              onChangeLanguage={({ value }) => setLanguage(value)}
            />
          </div>
          <div className="col-lg-6 col-md-6">

            <div className="class-details-desc">
              <div className="class-desc-image">
                <div className="col-lg-6 col-md-6">
                  <ReactPlayer
                    url={url}
                    controls
                    onProgress={handleWatchComplete}
                  />
                </div>
                {progress}


                <div className="tab class-details-tab">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <ul className="tabs nav">
                        <li className="nav-item">
                          <a href="#">
                            {course.courseTitle}
                          </a>
                        </li>
                      </ul>
                      <ul className="tabs nav">
                        {tutorial.map((chapter) => {
                          return (
                            <li className="nav-item" key={chapter._id}>
                              <a href="#" onClick={(e) => {
                                setUrl("http://localhost:5000/" + chapter.video)
                              }}>
                                {chapter.chapterName}
                              </a>
                            </li>
                          )
                        })}
                      </ul>

                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="col-lg-6 col-md-6" >



          <CodeEditor
            value={code}
            onCodeChange={(text) => setCode(text)}
            programmingLanguage={language}
          />
          <div className="optionSegment" >

            <OutputLogs value={outputLogs} />
          </div>
        </div>
      </div>

    </section>




  )

}

export default CourseDetail;