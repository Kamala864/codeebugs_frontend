import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./banner";
import Courses from "./courses";
import Courses2 from "./courses2";
import Courses3 from "./courses3";
import Home from "./home";
import UserProfile from "./userprofile";

class Mid extends Component{
    render(){
        return(
            <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/logout" element={<UserProfile/>} />
            </Routes>
            </>
        )
    }
}

export default Mid;