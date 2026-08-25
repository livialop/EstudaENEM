import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a onClick={() => navigate("/")} className="navbar__logo">
          Estuda<span>ENEM</span>
        </a>

        <nav
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
        >
          <a href="#inicio">Simulados</a>
          <a href="#recursos">Questões</a>
          <a href="#sobre">Conteúdos</a>
          <a href="#contato">Sobre nós</a>
        </nav>

        <div className="navbar__actions">
          <button onClick={() => navigate("/login")} className="btn btn--ghost">Entrar</button>
          <button onClick={() => navigate("/register")} className="btn btn--primary">Cadastrar</button>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
