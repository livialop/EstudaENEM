import React from "react";
import "../Register.css";

import RegisterNavbar from "./register/RegisterNavbar";
import RegisterLeft from "./register/RegisterLeft";
import RegisterForm from "./register/RegisterForm";
import RegisterRight from "./register/RegisterRight";
import { useAuth } from "./areausuario/AuthContext";
import { Navigate } from "react-router-dom";

export default function Register() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div style={{ padding: 24, textAlign: "center" }}>Carregando...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/areainicial" replace />;
  }

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