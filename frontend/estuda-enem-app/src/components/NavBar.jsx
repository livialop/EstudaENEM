import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/areausuario/AuthContext";

export default function NavBar({ variant = "default" }) {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    try {
      logout();
    } finally {
      navigate("/", { replace: true });
    }
  }

  if (variant === "login" || variant === "register") {
    const isLogin = variant === "login";

    return (
      <header className="topbar">
        <div className="logo">
          <Link to="/">
            Estuda<span>ENEM</span>
          </Link>
        </div>

        <div className="login-area">
          <span>
            {isLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
          </span>
          <Link to={isLogin ? "/register" : "/login"}>
            <button type="button">{isLogin ? "Criar" : "Entrar"}</button>
          </Link>
        </div>
      </header>
    );
  }

  if (isAuthenticated) {
    return (
      <header className="topbar">
        <div className="logo">
          <Link to="/">
            Estuda<span>ENEM</span>
          </Link>
        </div>

        <nav className="center-link">
          <Link to="/simulados">Simulados</Link>
          <Link to="/questoes">Questões</Link>
          <Link to="/sobrenos">Sobre nós</Link>
        </nav>

        <div className="dash-navbar__actions">
          <Link to="/areausuario" className="dash-user-btn">
            Olá, {user?.nome ?? "Fulano"}
            <ChevronDown size={16} />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="topbar">
      <div className="logo">
        <Link to="/">
          Estuda<span>ENEM</span>
        </Link>
      </div>

      <nav className="center-link">
        <Link to="/sobrenos">Sobre nós</Link>
      </nav>

      <div className="login-area">
        <button type="button" onClick={() => navigate("/login")}>Entrar</button>
        <button type="button" onClick={() => navigate("/register")}>Cadastrar</button>
      </div>
    </header>
  );
}