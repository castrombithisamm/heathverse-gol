import React,{useState} from "react";
import "./login.css";
import logo from '../images/logo...png'
import { Link } from "react-router-dom";
import WelcomeImg from '../images/docverse.svg'
const Login = () => {
    const [emailval, setEmailVal] = useState("") 
    const [passval, setPassVal] = useState("") 
    const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="main-login">
        <div className="login-container">
          <div className="left-side">
            <div className="img-class">
                <img src={logo} alt="logo image"/>
            </div>
            <form onSubmit={handleSubmit}>
              <label for="emil1">Email</label>
              <input placeholder="Enter your email" type="email" id="emil1" value={emailval} onChange={(e)=>{setEmailVal(e.target.value)}} />
              <label for="pwd1">Password</label>

              <input placeholder="Enter your password" type="password" id="pwd1" value={passval} onChange={(e)=>{setPassVal(e.target.value)}}/>
              <button type="submit" id="sub_butt">Login</button>
            </form>

            <div className="footer">
                <h4> <Link to='/registter' className="link">Don't have an Account? Register Here!</Link></h4>
            </div>
            
          </div>
          <div className="right-side">
            <div className="welcomeNote">
                <h3>Welcome Back</h3>
            </div>
            <div className="welcomeImg">
                <img src={WelcomeImg} id="wel-img-id" alt="welcome img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
