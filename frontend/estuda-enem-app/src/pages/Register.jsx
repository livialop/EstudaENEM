import React from "react";
import "../Register.css";

import RegisterNavbar from "./register/RegisterNavbar";
import RegisterLeft from "./register/RegisterLeft";
import RegisterForm from "./register/RegisterForm";
import RegisterRight from "./register/RegisterRight";

export default function Register() {
  return (
    <>
      <RegisterNavbar />

      <main className="register-content">
        <RegisterLeft />

        <RegisterForm />

        <RegisterRight />
      </main>
    </>
  );
}