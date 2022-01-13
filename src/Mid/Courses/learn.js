import React from "react";
import ReactPlayer from "react-player";


function Learn() {

    return(
        <div className="Top">
            <div className ="Practice">
            <button >Practice Now</button>
            </div>
            <h2>Couse title will be here</h2>

            <div className="Player">
            <ReactPlayer  controls url = "https://www.youtube.com/watch?v=ZmKE-iU2Qqc&t=348s" />
            </div>

            </div>

    )
}

export default Learn;