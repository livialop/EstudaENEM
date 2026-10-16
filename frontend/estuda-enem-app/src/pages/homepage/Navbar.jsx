import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <div className="logo">
        <Link to="/">Estuda<span>ENEM</span></Link>
      </div>

      <div className="center-link">
        <Link to="/sobrenos">Sobre nós</Link>
      </div>

      <div className="login-area">
        <button onClick={() => navigate("/login")}>Entrar</button>
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </div>
    </header>
  );
}
