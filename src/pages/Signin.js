import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route,Routes } from 'react-router-dom';
// import css from "./Signin"
import "./Project.css";
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa6";

//import BackgroundImage from './image/range-rover.png';


function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API calls, validation)
        console.log("Email:", email);
        console.log("Password:", password);
      };
    

    return(
      <div className="bigbody">

                <div className="header"><br/>
                    <h1><b>CarSales.com</b></h1>

                </div>

                <div className="content">

                    <div className="leftcontent">
                        <h1>SignIn</h1>
                        <h3>Use your email or mobile number</h3><br/>
                        <form onSubmit={handleSubmit}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                        id="email" placeholder="Enter your email or mobile number"/><br /><br/><br/><br/><br/><br/><br/>
                        
                        <button type="submit" id="btn1"><b>Create Account</b></button>

                        <button type="submit" id="btn2"><b>Continue</b></button>
                        </form>

                    </div>

                    <div className="rightcontent">
                    <h3>Continue with Single Sign-On</h3><br />
                    <button className="apple-button" id="btn3"><FaApple /> <b>Continue with Apple</b></button><br/><br/><br/>
                    
                    <button className="google-button" id="btn3"><FaGoogle /> <b>Continue with Google</b></button><br/><br/><br/>
                  
                    <button className="facebook-button" id="btn3"><FaFacebook /> <b>Continue with Facebook</b></button><br/><br/><br/>
                    
                    
                    {/* <img src={MyBackgroundImage} alt=""/> */}
                    {/* <image src="../images/apple.png" id="apple"/> */}

                    


                    </div>

                </div>
                
           
          
      </div>
    );
  }

export default Signin;