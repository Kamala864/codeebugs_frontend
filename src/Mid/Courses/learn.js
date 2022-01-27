import React, { Component, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";



class Learn extends Component {
    state = {
        courseTitle : "",
        tutorial : [{chapterName:"dummy"}],
        tutorName : "Test",
        courseDescription : "",
        video : ""
    }



    componentDidMount(){
        axios.get("http://localhost:5000/course/61f0d527ec21a85d2d89cf4c")
        .then(res => {
            this.setState({
                courseTitle : (res.data.courseTitle),
                courseDescription : (res.data.courseDescription),
                tutorial:(res.data.tutorial),
                tutorName: (res.data.tutorName)
            })
            
            // console.log(res.data)
            
        })
        .catch(err =>{
            console.log(err)
        })
    };
    

    render(){
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
                    


                </div>

                <div className="column right">
                    
                    
                <ReactPlayer width={1200}
                url= {"http//localhost:5000/" + this.state.video }
                controls
                />

                
                </div>
            </div>
            <hr></hr>

            <div>
            <h3 className="description">Description</h3>
            <p className="desContent">{this.state.courseDescription}</p>
            </div>
            <h3 className="tutor">Tutor : {this.state.tutorName}</h3>
            </div>

    )
}}

export default Learn;