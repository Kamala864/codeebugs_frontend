import { Component } from "react";
import axios from "axios";

class AdminLogin extends Component{

     state = {
          email : "",
          password : ""
     }

     changeState = (e) => {
          this.setState({
               [e.target.name] : e.target.value
          })
     }

     login = (e) => {
          e.preventDefault()
          if (this.state.email === "" 
          || this.state.password === "") {
               alert("Please fill all of the informations!")
          }
          else {
                    const data = {
                         email: this.state.email,
                         password: this.state.password
                    }
                    axios.post("http://localhost:5000/Admin/login", data)
                    alert("Login successful!")
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
                              <input type="password" name="password" placeholder="Password"
                               value={this.state.password} onChange={this.changeState} />
                              <br></br>
                              <button onClick={this.login}>Sign In</button>
                         </form>

               </div>
          </div>
          )
     }
}

export default AdminLogin;