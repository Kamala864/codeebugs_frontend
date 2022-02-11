import { Component } from "react";
import axios from "axios";
import {toast} from "react-toastify";

class AdminLogin extends Component{

     state = {
          email : "",
          password : "",
          loginEmailError: "",
          loginPasswordError: "",
     }

     changeState = (e) => {
          this.setState({
               [e.target.name] : e.target.value
          })
     }
     
  loginEmailValidation() {

     //login email validation
     const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
     if (regex.test(this.state.email) === false) {
       return false;
     }
     return true;
   }

     login = (e) => {
          e.preventDefault()

          this.setState({
            loginEmailError: "",
            loginPasswordError: "",
            invalidLoginError: ""
          })
          
          let loginEmailError = "";
          let loginPasswordError = "";
          let invalidLoginError = "";

          if (this.state.email === "") {
               loginEmailError = "**E-mail field cannot be empty!";
             }
         
             else if (this.loginEmailValidation() === false) {
               loginEmailError = "**Invalid e-mail address!";
             }
         
             if (this.state.password === "") {
               loginPasswordError = "**Password field cannot be empty"
             }
         
             if (loginEmailError || loginPasswordError) {
               this.setState({ loginEmailError, loginPasswordError })
               return false;
             }
         
             else {         
               const data = {
                    email: this.state.email,
                    password: this.state.password
                  }

               axios.post("http://localhost:5000/Admin/login", data)
               .then((res) => {
                 toast.success("Logged in successfully!", {
                   position: toast.POSITION.TOP_CENTER
                 })
       
                 localStorage.setItem('token', res.data.token);
                 localStorage.setItem('userID', res.data.userID);
                 localStorage.setItem('username', res.data.username);
                 localStorage.setItem('email', res.data.email);

                 setTimeout(() => {
                   window.location.href = "/"
                 }, 2000);
       
               })
               .catch((err) => {
                 invalidLoginError = "**Invalid credentials!";
                 if (invalidLoginError) {
                   this.setState({ invalidLoginError })
                   return false;
                 }
               })

             }
          
          
     }

     render(){
          return(
               <div>
               <div class="container" id="container">
                    <br/>
                         <form>
                              <h1>Admin Log In</h1>
                              <br/>
                               <br/>
                              <input type="email" name="email" placeholder="Email" 
                               value={this.state.email} onChange={this.changeState}/>
                               <div style={{ color: "red", fontSize: "small" }}>{this.state.loginEmailError}</div>
                              <input type="password" name="password" placeholder="Password"
                               value={this.state.password} onChange={this.changeState} />
                               <div style={{ color: "red", fontSize: "small" }}>{this.state.loginPasswordError}</div>
                              <div  style={{ color: "red", fontSize: "small" }}>{this.state.invalidLoginError}</div>
                              <br></br>
                              <button className="mb-4" onClick={this.login}>Sign In</button>
                         </form>

               </div>
          </div>
          )
     }
}

export default AdminLogin;