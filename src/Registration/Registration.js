
import { Component } from "react";
import axios from "axios";

class Registration extends Component{
     
     state = {
          full_name : "",
          email : "",
          age : "",
          password : "",
          confirm_password : ""
     }

     changeState = (e) => {
          this.setState({
               [e.target.name] : e.target.value
          })
     }

     register = (e) => {
          e.preventDefault()
          if (this.state.full_name === "" ||
               this.state.email === "" ||
               this.state.age === "" || this.state.password === "") {
               alert("Please fill all of the informations!")
          }
          else {
                if (this.state.password === this.state.confirm_password) {
                    const data = {
                         full_name: this.state.full_name,
                         email: this.state.email,
                         age: this.state.age,
                         password: this.state.password
                    }

                    axios.post("http://localhost:5000/signup",data)
                    alert("Registration successful!")
               } else {
                    alert("Password does not match!")
               }
          }
     }

     render(){
     return(
          <div>
               <div class="container" id="container">
                    <div class="form-container sign-up-container">
                         <form>
                              <h1>Create Account</h1>
                              <input type="text" id="full_name" name="full_name"  placeholder="Full Name" 
                                    value={this.state.full_name} onChange={this.changeState}/>
                              <input type="text" id="email" name="email" placeholder="Email" 
                                    value={this.state.email} onChange={this.changeState}/>
                              <input type="text" id="age" name="age"  placeholder="Age" 
                                    value={this.state.age} onChange={this.changeState}/> 
                              <input type="password" id="password" name="password" placeholder="Password"
                                   alue={this.state.password} onChange={this.changeState} />
                              <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password"
                                    value={this.state.confirm_password} onChange={this.changeState} />
                              <button id="signup" onClick={this.register}>Sign Up</button>
                         </form>
                    </div>
                    <div class="form-container sign-in-container">
                         <form>
                              <h1>Sign in</h1>
                              <input type="email" placeholder="Email" />
                              <input type="password" placeholder="Password" />
                              <a>Forgot your password?</a>
                              <button>Sign In</button>
                         </form>
                    </div>
                    <div class="overlay-container">
                         <div class="overlay">
                              <div class="overlay-panel overlay-left">
                                   <h1>Welcome Back!</h1>
                                   <p>To keep connected with us please login with your personal info</p>
                                   <button class="ghost" id="signIn">Sign In</button>
                              </div>
                              <div class="overlay-panel overlay-right">
                                   <h1>Hello, Friend!</h1>
                                   <p>Enter your personal details and start journey with us</p>
                                   <button class="ghost" id="signUp">Sign Up</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
     }
}

export default Registration;