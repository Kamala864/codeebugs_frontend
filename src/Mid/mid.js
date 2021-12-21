import { Component } from "react";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Admindashboard from "./AdminDashboard";
import Banner from "./banner";
import Courses from "./courses";
import Courses2 from "./courses2";
import Courses3 from "./courses3";
import Home from "./home";
import UserProfile from "./userprofile";
=======
import Login from "../Registration/Login";
>>>>>>> bae7ad7407d5626844bc8b7136ed7ece52bcdb92

class Mid extends Component{
    render(){
        return(
<<<<<<< HEAD
            <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/logout" element={<UserProfile/>} />
            <Route path="/admin" element={<Admindashboard/>} />
            </Routes>
            </>
=======
            <Login></Login>
>>>>>>> bae7ad7407d5626844bc8b7136ed7ece52bcdb92
        )
    }
}

export default Mid;