import React from "react";
import "../Login.css";

import LoginNavbar from "./login/LoginNavbar";
import LoginLeft from "./login/LoginLeft";
import LoginForm from "./login/LoginForm";

export default function Login() {
  return (
    <>
      <LoginNavbar />

      <main className="login-content">
        <LoginLeft />

        <LoginForm />

      </main>
    </>
  );
}