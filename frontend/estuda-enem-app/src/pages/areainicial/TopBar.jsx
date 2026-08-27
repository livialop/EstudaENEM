import React from "react";
import {
  Bell,
  ChevronDown,
} from "lucide-react";

export default function TopBar() {
  return (
    <header className="dash-navbar">
      <div className="dash-navbar__container">

        <a className="dash-navbar__logo">
          Estuda<span>ENEM</span>
        </a>

        <nav className="dash-navbar__links">
          <a href="#">Simulados</a>
          <a href="#">Questões</a>
          <a href="#">Conteúdos</a>
          <a href="#">Sobre nós</a>
        </nav>

        <div className="dash-navbar__actions">

          <button
            className="dash-icon-btn"
            aria-label="Notificações"
          >
            <Bell size={18} />
          </button>

          <button className="dash-user-btn">
            Olá, Fulano
            <ChevronDown size={16} />
          </button>

        </div>

      </div>
    </header>
  );
}