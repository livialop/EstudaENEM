import React from "react";
import {
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../areausuario/AuthContext";

export default function TopBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // TODO: Alterar o logout para a sidebar da area inicial

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
          <a href="#">Conteúdos</a>
          <a onClick={() => navigate("/sobrenos")}>Sobre nós</a>
        </nav>
      </div>
    
      <div className="dash-navbar__actions">
        <a href="/areausuario" className="dash-user-btn">
          Olá, Fulano
          <ChevronDown size={16} />
        </a>
      </div>

      <button className="dash-logout" onClick={handleLogout} aria-label="Sair">
        Sair
      </button>


      
    </header>
  );
}