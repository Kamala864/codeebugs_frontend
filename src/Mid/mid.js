
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../Registration/Registration";

class Mid extends Component {
     render(){
          return(
               <>
                    <Routes>
                         <Route path="/" element={<Registration />}></Route>
                    </Routes>
               </>
          )
     }
}

export default Mid;