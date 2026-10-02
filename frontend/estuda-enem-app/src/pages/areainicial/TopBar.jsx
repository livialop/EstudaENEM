import React from "react";
import {
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../areausuario/AuthContext";

export default function TopBar({ nome = "Fulano" }) {
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
    <header className="topbar">
      <div className="logo">
        <a onClick={() => navigate("/")}>
          Estuda<span>ENEM</span>
        </a>
      </div>

      <div className="center-link">
        <nav className="center-link">
          <a onClick={() => navigate("/simulados")}>Simulados</a>
          <a href="#">Questões</a>
          <a onClick={() => navigate("/sobrenos")}>Sobre nós</a>
        </nav>
      </div>

      <div className="dash-navbar__actions">
        <a href="/areausuario" className="dash-user-btn">
          Olá, {nome}
          <ChevronDown size={16} />
        </a>
      </div>

      <button className="dash-logout" onClick={handleLogout} aria-label="Sair">
        Sair
      </button>
    </header>
  );
}