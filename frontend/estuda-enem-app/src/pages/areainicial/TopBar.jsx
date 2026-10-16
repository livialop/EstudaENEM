import React from "react";
import {
  ChevronDown,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
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
          <Link to="/simulados">Simulados</Link>
          <Link to="/questoes">Questões</Link>
          <Link to="/sobrenos">Sobre nós</Link>
        </nav>
      </div>

      <div className="dash-navbar__actions">
        <Link to="/areausuario" className="dash-user-btn">
          Olá, {nome}
          <ChevronDown size={16} />
        </Link>
      </div>

      <button className="dash-logout" onClick={handleLogout} aria-label="Sair">
        Sair
      </button>
    </header>
  );
}