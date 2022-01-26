import { Formik, FieldArray } from "formik";
import {TextField, Input } from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Button } from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';
import { Component } from "react";
import axios from "axios";

class CourseInsert extends Component {

    render() {return <div>
    <Formik
    initialValues={{courseTitle : "",
                    courseDescription : "",
                    tutorName: "",
                    tutorial: [{chapterName : "", video : ""}]
                    }}

    
    onSubmit={values =>{
        console.log('Submit: ',values);

        axios.post("http://localhost:5000/addcourse",{
          courseTitle : values.courseTitle,
          courseDescription : values.courseDescription,
          tutorName : values.tutorName,
          tutorial : values.tutorial
        })

        .then((result)=>{

            console.log(result)
        })

        .catch()
    }}

    

    > 
    {({values  , handleChange, handleBlur, handleSubmit}) =>(
        <form onSubmit={handleSubmit}>
        <TextField 
        style={{width : 480}}
        variant="standard"
        label= "Course Title"
        name="courseTitle" 
        values={values.courseTitle} 
        onChange={handleChange} 
        onBlur={handleBlur}/>

        <TextField 
        style={{width : 480}}
        variant="standard"
        label= "Tutor Name"
        name="tutorName" 
        values={values.tutorName} 
        onChange={handleChange} 
        onBlur={handleBlur}/>

        <TextField 
        style={{width : 480}}
        multiline
        variant="standard"
        label= "Course Description"
        name="courseDescription" 
        values={values.courseDescription} 
        onChange={handleChange} 
        onBlur={handleBlur}/>

    <FieldArray name="tutorial">
    {arrayHelpers => (
        <div>
          <Button
            onClick={() =>
              arrayHelpers.push({
                chapterName : "",
                video: "",
              })
            }
          >
            add Chapters
          </Button>
          {values.tutorial.map((chapterName, index) => {
            return (
              <div >
              <Stack direction="row" alignItems="center" spacing={3}>
              <TextField 
              style={{width : 280}}
              multiline
              variant="standard"
              label= "chapter Name"
              name={`tutorial.${index}.chapterName`} 
              values={`tutorial.${index}.chapterName`} 
              onChange={handleChange} 
              onBlur={handleBlur}/>

              <label htmlFor="icon-button-file">
              <Input name={`tutorial.${index}.video`}
              values={`tutorial.${index}.video`} 
              accept="video/mp4" type="file"
              onChange={handleChange}
                />
              <IconButton color="primary" aria-label="upload video" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
                
                <Button onClick={() => arrayHelpers.remove(index)}>
                  x
                </Button>
                </Stack>
              </div>
            );
          })}
        </div>
      )}
        
    </FieldArray>

        <Button endIcon={<SendIcon/>} varient="contained" type="submit">Submit</Button>
        <pre>{JSON.stringify(values)}</pre>
        </form>
    )}
    
    </Formik>

    </div>;
}
}

export default CourseInsert;