
import { Component } from "react";

class Registration extends Component{
     render(){
     return(
          <>
          <div>
               <legend>Registration</legend>
          </div>

          <div> 
               <form>
                    <div>
                         <input type="text" id="fullname" name="fullname" placeholder="Full name"/>
                         <input type="text" id="email" name="email" placeholder="Email"/>
                         <input type="text" id="age" name="age" placeholder="Age"/>
                         <input type="text" id="password" name="password" placeholder="Password"/>
                         <input type="text" id="confirm_password" name="confirm_password" placeholder="Confirm Password"/>
                    </div>

                    <div>
                         <button type="submit">Submit</button>
                    </div>
               </form>
          </div>

          </>
     )
     }
}

export default Registration;