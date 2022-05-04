import React, { useState } from "react";

function SignInScreen({Login, error}) {
   const [details,setDetails] = useState({email:"", password:""});
   const submithandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <div className="signinscreen">
            <form onSubmit={submithandler}>
                <h1>Sign In</h1>
                {(error != "") ? (<div className="error">{error}</div>): ""}
                <input className="signupemail" type="email" onChange={e => setDetails({...details,email: e.target.value})} value={details.email}  placeholder="Email address"/>
                <input className="signuppass" type="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Password" />
                <button  type="submit" >Sign In</button>
                <div className="flex">
                    <label>
                        
                        <input type="checkbox"/>
                        <span className="check"></span>
                        Remember me
                    </label>
                    <a href="#">Need help?</a>
                </div>
                <div className="padding">
                    <p>New to Netflix? <a href="#">Sign up now</a>.</p>    

                </div>
            </form>
        </div>
    );
}
export default SignInScreen;