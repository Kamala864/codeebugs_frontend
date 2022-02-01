import React, { Component, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';



class Learn extends Component {
    state = {
        courseTitle : "",
        tutorial : [{chapterName:"dummy"}],
        tutorName : "Test",
        courseDescription : "",
        video : "",
        quiz:[],
        divcontainer : false,
        index : 0,
    }



    componentDidMount(){
        axios.get("http://localhost:5000/course/61f3e3c34f09a9686ff3429e")
        .then(res => {
            this.setState({
                courseTitle : (res.data.courseTitle),
                courseDescription : (res.data.courseDescription),
                tutorial:(res.data.tutorial),
                tutorName: (res.data.tutorName),
                quiz  : (res.data.quiz)
            })
            
            // console.log(res.data)
            
        })
        .catch(err =>{
            console.log(err)
        })
    };
    

    render(){



        var quizfunc = e =>
        {
            e.preventDefault()
            this.setState({divcontainer: !this.state.divcontainer});
            var element = document.getElementById("player");
            element.remove();
        }


        const quiz=this.state.divcontainer

        const handleQuestionOnclick = () => {
            this.setState(index => {
                if (index === quiz.length - 1 ){
                    return 0;
                }else{
                    return index + 1;
                }
            })
        }

    return(
        <div className="Top">
            <div className ="Practice">
            <button >Practice Now</button>
            
            </div>
            <h2>{this.state.courseTitle}</h2>

            <div className="tutorial">
                <div className="column left">
                {
                    this.state.tutorial.map(cObj => (
                        <a href=""  key={cObj._id} onClick={()=>{
                            this.setState ({video :cObj.video })
                            alert(cObj.video)
                        }}>{cObj.chapterName}</a>
                        )
                    )}

                    <a href="" onClick={quizfunc}>{quiz?'Quiz': 'quiz'}</a>
                    
                    


                </div>

                <div className="column right">
                    
                    <ReactPlayer width={1200} id='player'
                url= {"http//localhost:5000/" + this.state.video }
                controls
                />
                

                {
                    quiz &&(<div className="quizCard" >
                    
                            <Card sx={{ maxWidth: 1200 }}>
                                <CardContent>
                                {
                                    this.state.quiz.map((qObj)=>
                                    <div>
                                    <Typography gutterBottom variant="h5" component="div">
                                    
                                        {qObj.question}
                                        
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <FormControlLabel control={<Checkbox  />} label={qObj.correctAnswer} />
                                        
                                            <p><FormControlLabel control={<Checkbox  />} label={qObj.incorrectAnswer[0]} /></p>
                                            <p><FormControlLabel control={<Checkbox  />} label={qObj.incorrectAnswer[1]} /></p>
                                            <p><FormControlLabel control={<Checkbox  />} label={qObj.incorrectAnswer[2]} /></p>
                                    </Typography>
                                    </div>
                                )
                                }
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" onClick={handleQuestionOnclick}>Next</Button>
                                </CardActions>
                            </Card>

                        
                        
                        </div>)
                }

                
                </div>
            </div>
            <hr className="line_break"></hr>

            <div>
            <h3 className="description">Description</h3>
            <p className="desContent">{this.state.courseDescription}</p>
            </div>
            <h3 className="tutor">Tutor : {this.state.tutorName}</h3>
            </div>

    )
}}

export default Learn;