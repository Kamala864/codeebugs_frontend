import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";


// Project Imports
import CodeEditor from "../Code Editor/codeeditor";
import InputEditor from "../Code Editor/InputEditor";
import OutputLogs from "../Code Editor/OutputLogs";
import Header from "../Code Editor/Header";

function CourseDetail() {
  const location = useLocation()

  // state hooks
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [outputLogs, setOutputLogs] = useState("");
  const [status, setStatus] = useState("Run");
  const [watchComplete, setWatchComplete] = useState(false);


  const handleWatchComplete = ({ played }) =>{
    if (played > 0.8 && !watchComplete) {
      setWatchComplete(true)
    }
  }

  const addProgress = () =>{
    if (watchComplete===true) {
      var progress = location.state.weight
      console.log(progress)
      axios.put("http://localhost:5000/updateprogress", progress)
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


  return (
    <section className="class-details-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="class-details-desc">
              <div className="class-desc-image">
                <div>
                  <ReactPlayer width={540} height={360}
                    url={"http://localhost:5000/" + location.state.video}
                    controls
                    onProgress={handleWatchComplete}
                  />
                </div>

              </div>
              <div className="tab class-details-tab">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <ul className="tabs">
                      <li>
                        <a href="#">
                          {location.state.title}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Lesson
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Cost
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="tab_content">
                      <div className="tabs_item">
                        <div className="class-desc-content">
                          <h3>Education Lessons</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>English Lesson Class</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>Requirements</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <ul className="requirements-list">
                            <li>
                              <i className="bx bx-check" />
                              Aliquam sit amet mi vitae turpis gravida vulputate.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Proin a orci nec sapien condimentum imperdiet.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Suspendisse viverra lectus eu augue efficitur pulvinar.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Mauris a purus ut mauris sodales ultrices.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="class-desc-content">
                          <h3>Education Lessons</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>English Lesson Class</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>Requirements</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <ul className="requirements-list">
                            <li>
                              <i className="bx bx-check" />
                              Aliquam sit amet mi vitae turpis gravida vulputate.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Proin a orci nec sapien condimentum imperdiet.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Suspendisse viverra lectus eu augue efficitur pulvinar.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Mauris a purus ut mauris sodales ultrices.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="class-desc-content">
                          <h3>Education Lessons</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>English Lesson Class</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>Requirements</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <ul className="requirements-list">
                            <li>
                              <i className="bx bx-check" />
                              Aliquam sit amet mi vitae turpis gravida vulputate.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Proin a orci nec sapien condimentum imperdiet.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Suspendisse viverra lectus eu augue efficitur pulvinar.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Mauris a purus ut mauris sodales ultrices.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="class-desc-content">
                          <h3>Education Lessons</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>English Lesson Class</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <h3>Requirements</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          <ul className="requirements-list">
                            <li>
                              <i className="bx bx-check" />
                              Aliquam sit amet mi vitae turpis gravida vulputate.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Proin a orci nec sapien condimentum imperdiet.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Suspendisse viverra lectus eu augue efficitur pulvinar.
                            </li>
                            <li>
                              <i className="bx bx-check" />
                              Mauris a purus ut mauris sodales ultrices.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12" style={{ height: "300px", width: "100%" }}>
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
            <div className="optionSegment">
              <InputEditor value={input} onInputChange={(text) => setInput(text)} />
              <OutputLogs value={outputLogs} />
            </div>
          </div>
        </div>
      </div>

    </section>




  )

}

export default CourseDetail;