
import { Component } from "react";

class Registration extends Component{
     render(){
     return(
          <>
          <div className="registration-form">
               <div>
                    <legend>Registration</legend>
               </div>

               <div> 
                    <form>
                         <div>
                              <input type="text" className="registration-input" id="fullname" name="fullname" placeholder="Full name"/>
                              <input type="text" className="registration-input" id="email" name="email" placeholder="Email"/>
                              <input type="text" className="registration-input" id="age" name="age" placeholder="Age"/>
                              <input type="password" className="registration-input" id="password" name="password" placeholder="Password"/>
                              <input type="password" className="registration-input" id="confirm_password" name="confirm_password" placeholder="Confirm Password"/>
                         </div>

                         <div>
                              <button type="submit">Register</button>
                         </div>
                    </form>
               </div>
          </div>
          </>
     )
     }
}

export default Registration;