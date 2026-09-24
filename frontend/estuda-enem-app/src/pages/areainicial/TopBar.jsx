import React from "react";
import {
  Bell,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../areausuario/AuthContext";

export default function TopBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    try {
      logout();
    } finally {
      navigate("/", { replace: true });
    }
  }
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

          <a href="/areausuario" className="dash-user-btn">
            Olá, Fulano
            <ChevronDown size={16} />
          </a>

          <button className="dash-logout" onClick={handleLogout} aria-label="Sair">
            Sair
          </button>

        </div>

      </div>
    </header>
  );
}