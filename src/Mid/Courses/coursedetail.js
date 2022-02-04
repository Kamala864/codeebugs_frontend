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
      <div className="container-fluid">
        <div className="row">
          
        
          <div className="col-lg-6 col-md-6">
            
            <div className="class-details-desc">
              <div className="class-desc-image">
                <div className="col-lg-6 col-md-6">
                  <ReactPlayer 
                    url={"http://localhost:5000/" + location.state.video}
                    controls
                  />

                <div className="tab class-details-tab">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <ul className="tabs nav">
                      <li className="nav-item">
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
                  
                </div>
              </div>
                </div>

              </div>
              
            </div>
          </div>
         
          <div className="col-lg-6 col-md-6" >

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
            <div className="optionSegment" >
               
              <OutputLogs value={outputLogs} />
            </div>
          </div>
        </div>
      </div>

      

    </section>




  )

}

export default CourseDetail;