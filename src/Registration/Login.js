import axios from "axios";
import { Component } from "react";

class Login extends Component {

  state = {
    loginemail: '',
    loginpassword: '',
    full_name: "",
    email: "",
    age: "",
    password: "",
    confirm_password: "",
    loginEmailError: "",
    loginPasswordError: "",
    full_nameError: "",
    emailError: "",
    ageError: "",
    passwordError: "",
    invalidLoginError: ""
  }


  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateLogin = (e) => {
    e.preventDefault()

    let loginEmailError = "";
    let loginPasswordError = "";
    let invalidLoginError = "";

    if (this.state.loginemail == "") {
      loginEmailError = "**E-mail field cannot be empty!";
    }

    else if (!this.state.loginemail.includes("@")) {
      loginEmailError = "**Invalid e-mail address!";
    }

    if (this.state.loginpassword == "") {
      loginPasswordError = "**Password field cannot be empty"
    }

    if (loginEmailError || loginPasswordError) {
      this.setState({ loginEmailError, loginPasswordError })
      return false;
    }

    else {
      const data = {
        email: this.state.loginemail,
        password: this.state.loginpassword
      }
      axios.post('http://localhost:5000/user/login', data)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          alert("Login success!")
          window.location.href = "/"
        })
        .catch((err) => {
          invalidLoginError = "**Invalid credentials!";
          if (invalidLoginError) {
            this.setState({ invalidLoginError })
            return false;
          }
        })
      
    }

    return true;
  }

  validateRegister = (e) => {
    e.preventDefault()

    let full_nameError = "";
    let emailError = "";
    let ageError = "";
    let passwordError = "";

    if (this.state.full_name == "") {
      full_nameError = "**Fullname cannot be empty!";
    }

    else if (this.state.full_name.includes("Integer")) {
      full_nameError = "**Fullname must not contain number!";
    }

    if (this.state.email == "") {
      emailError = "**E-mail field cannot be empty!";
    }

    else if (!this.state.email.includes("@")) {
      emailError = "**Invalid e-mail address!";
    }

    if (this.state.age == "") {
      ageError = "**Age cannot be empty!";
    }

    else if(this.state.age < 5 || this.state.age>13){
      ageError = "**Age must be between 5 and 13!"
    }

    if (this.state.password == "" || this.state.confirm_password == "") {
      passwordError = "**Password field cannot be empty!";
    }

    if (this.state.confirm_password == "") {
      passwordError = "**Password cannot be empty!";
    }
    
    if (!(this.state.password === this.state.confirm_password)) {
      passwordError = "**Passwords do not match!";
    }

    if (full_nameError || emailError || ageError || passwordError) {
      this.setState({ full_nameError, emailError, ageError, passwordError })
      return false;
    }

    else {
      if (this.state.password === this.state.confirm_password) {
        const data = {
          full_name: this.state.full_name,
          email: this.state.email,
          age: this.state.age,
          password: this.state.password
        }

        axios.post("http://localhost:5000/signup", data)
        alert("Registration successful!")
        window.location.href = "/login"
      } else {
        alert("Something went wrong!")
      }
    }


    return true;

  }

  Logindata = (e) => {
    e.preventDefault();
    if (this.state.loginemail === "" ||
      this.state.loginpassword === "") {
      alert("Please fill all of the informations!")
    }
    else {
      const data = {
        email: this.state.loginemail,
        password: this.state.loginpassword
      }
      axios.post('http://localhost:5000/user/login', data)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          alert("Login success!")
          window.location.href = "/"
        })
        .catch((err) => {
          console.log(err.response)
          alert("Invalid Credentials")
        })
    }
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

        axios.post("http://localhost:5000/signup", data)
        alert("Registration successful!")
        window.location.href = "/login"
      } else {
        alert("Password does not match!")
      }
    }
  }


  render() {
    return (
      <div>
        <section className="class-area2 bg-fdf6ed pt-100 pb-70">
          <div className="row">
            <div className="cont" id="container">
              <div className="form-container sign-up-container">
                <form action="post">
                  <h1>Create Account</h1>
                  <input type="text" name="full_name" placeholder="Full Name" value={this.state.full_name} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.full_nameError}</div>
                  <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.emailError}</div>
                  <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.changeState} />
                  <div style={{ color: "red" , fontSize: "small"}}>{this.state.ageError}</div>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.passwordError}</div>
                  <input type="password" name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.passwordError}</div>
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.passwordError}</div>
                  <button onClick={this.validateRegister} >Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="post">
                  <h1>Sign in</h1>
                  <input type="email" name="loginemail" value={this.state.loginemail} onChange={this.changeState} placeholder="Email" />
                  <div style={{ color: "red" , fontSize: "small" }}>{this.state.loginEmailError}</div>
                  <input type="password" name="loginpassword" value={this.state.loginpassword} onChange={this.changeState} placeholder="Password" />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.loginPasswordError}</div>
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.invalidLoginError}</div>
                  <a href="#">Forgot your password?</a>
                  <button type="submit" onClick={this.validateLogin}>Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn">Sign In</button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>



    )
  }
}

export default Login;