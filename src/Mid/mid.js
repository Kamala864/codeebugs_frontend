
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../Registration/Registration";
import AdminLogin from "../AdminLogin/adminLogin";

class Mid extends Component {
     render(){
          return(
               <>
                    <Routes>
                         <Route path="/registration" element={<Registration />}></Route>
                         <Route path="/admin" element={<AdminLogin />}></Route>
                    </Routes>
               </>
          )
     }
}

export default Mid;