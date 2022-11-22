import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";

import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login-container">
        <img className="login-logo"
          src="https://static.wixstatic.com/media/3dbed1_1b94ac97e77b405f86a9a15e17f08eeb~mv2.png/v1/fill/w_637,h_167,al_c,lg_1,q_85,enc_auto/3dbed1_1b94ac97e77b405f86a9a15e17f08eeb~mv2.png"
          alt="Subscriber Logo"/>
        <input
          type="text"
          className="login-textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login-textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login-btn"
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        >
          Login
        </button>
        <button className="login-btn login-google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;