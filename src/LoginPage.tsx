import React from "react";
import LoginForm from "./LoginForm";
import logo from "./logo.svg";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="Login-App">
      <header className="login-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="login-header-title">UFSIT Portal</h1>
      </header>
      <LoginForm />
      <a
        className="register-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </a>
    </div>
  );
}

export default LoginPage;
