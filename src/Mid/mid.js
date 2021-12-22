import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Registration/Login";
import Admindashboard from "./AdminDashboard";
import CourseDetail from "./Courses/coursedetail";
import CourseInsert from "./Courses/courseinsert";
import Courses from "./Courses/courses";
import Home from "./home";
import UserProfile from "./userprofile";

class Mid extends Component{
    render(){
        return(
            <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<UserProfile/>} />
            <Route path="/admin" element={<Admindashboard/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/coursedetail" element={<CourseDetail/>} />
            <Route path="/courseinsert" element={<CourseInsert/>} />
            </Routes>
            </>
        )
    }
}

export default Mid;