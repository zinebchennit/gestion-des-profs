// src/components/Login.js
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="logo-title-container">
        <div className="logo">
          <img src="/Logo.png" alt="UniStruct Logo" className="logo-img" />
        </div>
        <h1>UNISTRUCT</h1>
      </div>

      <h2 className="subheading">
        Welcome to UniStruct!
        <br />
        Please sign in to continue.
      </h2>

      <div className="form-container">
        <div className="input-field">
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-field password-container">
          <input type="password" id="password" placeholder="Password" />
          <button
            className="password-toggle"
            onClick={() => {
              const input = document.getElementById("password");
              input.type = input.type === "password" ? "text" : "password";
            }}
          >
            👁️
          </button>
        </div>

        <button className="login-button">Sign in</button>
      </div>
    </div>
  );
}

export default Login;
