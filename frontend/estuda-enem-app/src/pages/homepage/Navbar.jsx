import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <div className="logo">
        <a onClick={() => navigate("/")}>
          Estuda<span>ENEM</span>
        </a>
      </div>

      <div className="center-link">
        <a onClick={() => navigate("/sobrenos")}>Sobre nós</a>
      </div>

      <div className="login-area">
        <button onClick={() => navigate("/login")}>Entrar</button>
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </div>
    </header>
  );
}
