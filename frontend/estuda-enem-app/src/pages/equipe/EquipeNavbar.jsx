import React from "react";
import { Link } from "react-router-dom";

export default function EquipeNavbar() {
  return (
    <header className="equipe-navbar">
      <div className="equipe-navbar-inner">
        <Link to="/" className="equipe-logo">
          Estuda<span>ENEM</span>
        </Link>

        <nav className="equipe-navbar-acoes">
          <Link to="/login" className="equipe-btn equipe-btn-outline">
            Login
          </Link>
          <Link to="/register" className="equipe-btn equipe-btn-primary">
            Cadastro
          </Link>
        </nav>
      </div>
    </header>
  );
}
