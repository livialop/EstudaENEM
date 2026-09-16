import React from "react";
import { Link } from "react-router-dom";

export default function SimuladoNavbar({ nome = "Fulano" }) {
  return (
    <header className="sim-navbar">
      <Link to="/areainicial" className="sim-navbar__logo">
        Estuda<span>ENEM</span>
      </Link>

      <nav className="sim-navbar__links">
        <Link to="/simulado">Simulados</Link>
        <Link to="/questoes">Questões</Link>
        <Link to="/sobrenos">Sobre nós</Link>
      </nav>

      <div className="sim-navbar__user">
        <button type="button" className="sim-navbar__bell" aria-label="Notificações">
          
        </button>

        <button type="button" className="sim-navbar__perfil">
          <span className="sim-navbar__avatar" aria-hidden="true"></span>
          Olá, {nome}
          <span className="sim-navbar__caret" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}
