import React from "react";
import "../Login.css";

import LoginNavbar from "./login/LoginNavbar";
import LoginLeft from "./login/LoginLeft";
import LoginForm from "./login/LoginForm";
import { useAuth } from "./areausuario/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div style={{ padding: 24, textAlign: "center" }}>Carregando...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/areainicial" replace />;
  }

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