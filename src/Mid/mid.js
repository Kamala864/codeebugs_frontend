import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Registration/Login";
import Admindashboard from "./AdminDashboard";
import CourseDetail from "./Courses/coursedetail";
import CourseInsert from "./Courses/courseinsert";
import CourseDashboard from "./Courses/coursesdashboard";
import Courses from "./Courses/courses";
import Coursesearchlist from "./Courses/coursesearchlist";
import CourseSearch from "./Courses/coursesearch";
import EnrolledCourses from "./Courses/enrolledcourses";
import Home from "./home";
import UserProfile from "./userprofile";
import Editor from "./Code Editor/Editor";
import Learn from "./Courses/learn";
import UserDashboard from "./Users/Userdashboard";
import CoursePayment from "./coursepayment";
import ForgotPassword from "./forgot-password";
import ResetPassword from "./reset-password";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseAdd from "./Courses/addcourse";


class Mid extends Component{
    render(){

        return(
            <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<UserProfile/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/courses/:coursetitle" element={<CourseDetail/>} />
            <Route path="/courseinsert" element={<CourseInsert/>} />
            <Route path="/admin" element={<Admindashboard/>} />
            <Route path="/admin/users" element={<UserDashboard/>} />
            <Route path="/admin/courses" element={<CourseDashboard/>}/>
            <Route path="/coursedashboard" element={<CourseDashboard/>}/>
            <Route path="/userdashboard" element={<UserDashboard/>}/>
            <Route path="/coursesearchlist" element={<Coursesearchlist/>}/>
            <Route path="/usersearchlist" element={<Coursesearchlist/>}/>
            <Route path="/coursesearch" element={<CourseSearch/>}/>
            <Route path="/payment" element={<CoursePayment/>}/>
            <Route path="/enrolledcourses" element={<EnrolledCourses/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/learn" element={<Learn/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/addcourse" element = {<CourseAdd/>}/>
            </Routes>
            <ToastContainer autoClose={2000} theme="colored"/>
            </>
        )
    }
}

export default Mid;