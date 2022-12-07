import React from "react";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
   const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const login = (event) => {
      event.preventDefault(); // stops to refresh the page automatically after submitting the form.

      // const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then((auth) => {
            navigate("/");
         })
         .catch((error) => alert(error.message));
   };

   const register = (event) => {
      event.preventDefault(); // stops to refresh the page automatically after submitting the form.

      // const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then((auth) => {
            navigate("/");
         })
         .catch((error) => alert(error.message));
   };

   return (
      <div className="login">
         <Link to="/">
            <img
               src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
               alt=""
               className="login__logo"
            />
         </Link>
         <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
               <h5>E-mail</h5>
               <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
               />
               <h5>Password</h5>
               <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
               />
               <button
                  onClick={login}
                  className="login__signInButton"
                  type="submit"
               >
                  Sign In
               </button>
            </form>
            <p>
               By continuing, you agree to Amazon's Conditions of Use and
               Privacy Notice.
            </p>
            <button onClick={register} className="login__registerButton">
               Create your Amazon Account
            </button>
         </div>
      </div>
   );
};

export default Login;
