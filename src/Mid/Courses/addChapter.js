import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";



function AddChapter () {

    const { id } = useParams()

    const [chapterName, setChapterName] = useState("");
    const [filename, setFilename] = useState();

    const textChangeHandler = (e) => {
        setChapterName(e.target.name= e.target.value)
    }

    const fileChangeHandler = (e) => {
        setFilename(e.target.files[0])
    }


    const sendData = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append('chapterName', chapterName)
        data.append('video', filename)
        console.log(filename)
        console.log(chapterName)
        axios.put("http://localhost:5000/addchapter/" + id, data)
            .then((result) => {
                console.log(result)
            })
            .catch()
    }

        return (
            <section className="class-area2 bg-fdf6ed pt-100 pb-70">
                <div className="cont" id="container">
                    <div className="d-flex justify-content-center">
                        <div className="form-container col-lg-8 ">
                            <form>
                                <h1>Add Chapter</h1>
                                <div class="row">
                                    <input type="text" name="chapterName" placeholder="Chapter Name"
                                        value={chapterName} onChange={textChangeHandler} />
                                    <label>Upload Chapter Video</label>
                                    <input type="file" accept="video/mp4" name="filename" onChange={fileChangeHandler} />
                                    <div className="center"><button type="submit" onClick={sendData}>Add</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )

}
export default AddChapter;