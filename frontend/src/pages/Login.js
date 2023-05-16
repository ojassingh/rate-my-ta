import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>LogIn</h1>
      <form>
        <div className="login-form-container">
          <div className="login-inner-container">
            <label className="login-form-label">Email</label>
            <input className="login-form-input" type="email" />
          </div>
          <div className="login-inner-container">
            <label className="login-form-label">Password</label>
            <input className="login-form-input" type="password" />
          </div>
        </div>
        <button type="submit" className="login-submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
