import { Component } from "react";
import axios from "axios";
import { TextField, Input } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IndeterminateCheckBoxOutlined } from "@material-ui/icons";


class CourseAdd extends Component {
    state = {
        courseTitle: "",
        courseDescription: "",
        tutorName: "",
        chapterName: [],
        filename: "",
        quiz: [{
            question: "", correctAnswer: "",
            incorrectAnswer: []
        }]
    }

    textChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileChangeHandler(e) {
        this.setState({
            filename: e.target.files[0]
        })
    }

    MultipleFileChange = (e) => {
        this.setState ({
            filename : e.target.files
        })
    }

    fileChangeHandler2(e) {
        this.setState({
            filename2: e.target.files[0]
        })
    }

    addchapterName() {

        this.setState({ chapterName: [...this.state.chapterName, ""] })
    }

    handleFileChange(e, index) {
        this.state.filename[index] = e.target.files
        this.setState({ filename: this.state.filename })
    }

    handleChange(e, index) {
        this.state.chapterName[index] = e.target.value
        this.setState({ chapterName: this.state.chapterName })
    }


    sendData = (e) => {
        e.preventDefault();
        const data = new FormData();

        console.log(this.state.filename)

        // this.state.filename.forEach(item => {
        //     data.append('filename', item)
        // })

        


        data.append('courseTitle', this.state.courseTitle)
        data.append('courseDescription', this.state.courseDescription)
        data.append('tutorName', this.state.tutorName)
        data.append('chapterName', this.state.chapterName)
        data.append('video', this.state.filename)
        data.append('filename2',this.state.filename2 )
      
        



        axios.post("http://localhost:5000/addcourse", data)
            .then((result) => {
                console.log(result)
            })
            .catch()
        // window.location.href="/courseinsert"
    }

    render() {
        return (
            <div>
                <h1>Add Course</h1>
                <div>
                    <TextField
                        style={{ width: 480 }}
                        variant="standard"
                        label="Course Title"
                        name="courseTitle"
                        values={this.state.courseTitle}
                        onChange={this.textChangeHandler}
                    />
                </div>

                <div>
                    <TextField
                        style={{ width: 480 }}
                        multiline
                        variant="standard"
                        label="Course Description"
                        name="courseDescription"
                        values={this.state.courseDescription}
                        onChange={this.textChangeHandler}
                    />
                </div>

                <div>
                    <TextField
                        style={{ width: 480 }}
                        variant="standard"
                        label="Tutor Name"
                        name="tutorName"
                        values={this.state.tutorName}
                        onChange={this.textChangeHandler}
                    />
                </div>
                <hr />
                <div className="tutorial-container">
                    <div className="float-child">
                        {
                            this.state.chapterName.map((chapterName, index) => {
                                return (
                                    <div Key={index}>
                                        <TextField
                                            style={{ width: 480 }}
                                            variant="standard"
                                            label="Chapter Name"
                                            name="chapterName"
                                            values={chapterName}
                                            onChange={(e) => this.handleChange(e, index)}
                                        />

                                    </div>
                                )
                            })
                        }
                        <button onClick={(e) => this.addchapterName(e)}>Add Chapter</button>
                    </div>

                    <div className="float-child">
                   
                    <input type="file" onChange={this.MultipleFileChange} className="form-control" multiple />
                
            
                    </div>

                </div>

                <button onClick={this.sendData}>Submit</button>

            </div>
        )
    }

}
export default CourseAdd;