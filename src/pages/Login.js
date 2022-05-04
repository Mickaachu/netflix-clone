import React, { useState } from "react";
import logo from '../images/netflix-logo.png';
import {AiOutlineRight} from 'react-icons/ai';
import SignInScreen from './SignInScreen';
import { useNavigate } from "react-router-dom";
import '../style/Login.scss';

function Login() {
   const navigate = useNavigate();
    const data = {
        email: "youremail@email.com",
        password: "yourpassword"
      }
      const [user, setUser] = useState({email:""});
      const [error, setError] = useState("");
      const Login = details => {
          console.log(details);
          if(details.email === data.email && details.password === data.password){
              console.log("Login Successful");
             
              setUser({
                  email: details.email,
              })
                navigate("/home");
              
          }
          else{
              console.log("Login Failed");
                setError("Login Failed");
          }
      }
    
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login">
            <div className="login_background">
                <img className="logo" src={logo}/>
                <button onClick={() => setSignIn(true)} 
                    className="signIn_btn">
                    Sign In
                </button>
                <div className="login_gradient"/>
            </div>
            <div className="login_body">
                {signIn ? (
                    <SignInScreen Login={Login} error={error}/>    
                ) : (
                    <>
                        
                        <h1>
                            Unlimited movies, TV shows, and more.
                        </h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <input type="email" placeholder="Email address"/>
                        <button>
                            Get Started <AiOutlineRight className="arrow"/>
                        </button>
                    </>
                )
                }
                
            </div>
        </div>
        )
    }
export default Login;
