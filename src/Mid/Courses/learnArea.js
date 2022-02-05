import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from "react-router-dom";



function LearnArea() {

    const [course, setCourse] = useState([])

    const location = useLocation()


    const playVideo=(chapter)=>{
        <div>
            <ReactPlayer width={1200} id='player'
            url={"http://localhost:5000/" + chapter.video}
            controls
        />
        </div>
    }

    // var quizfunc = e => {
    //     e.preventDefault()
    //     this.setState({ divcontainer: !this.state.divcontainer });
    //     var element = document.getElementById("player");
    //     element.remove();
    // }


    // const quiz = this.state.divcontainer

    // const handleQuestionOnclick = () => {
    //     this.setState(index => {
    //         if (index === quiz.length - 1) {
    //             return 0;
    //         } else {
    //             return index + 1;
    //         }
    //     })
    // }

    return (
        <div className="Top">
            <div className="Practice">
                <button >Practice Now</button>

            </div>
            <h2>{location.state.courseTitle}</h2>

            <div className="tutorial">
                    {
                        location.state.tutorial.map(chapter => (
                            <div key={chapter._id}>
                                <a href="#" onClick={playVideo}>{chapter.chapterName}</a>
                                <div className="column right">
                                          
                                </div>
                            </div>

                        )
                        )}

                    {/* <a href="" onClick={quizfunc}>{quiz ? 'Quiz' : 'quiz'}</a> */}



            </div>
            <hr className="line_break"></hr>

            <div>
                <h3 className="description">Description</h3>
                <p className="desContent">{location.state.courseDescription}</p>
            </div>
            <h3 className="tutor">Tutor : {location.state.tutorName}</h3>
        </div>

    )
}

export default LearnArea;