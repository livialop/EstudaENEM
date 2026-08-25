import { Link } from "react-router-dom";

export default function RegisterNavbar() {
  return (
    <header className="topbar">
      <div className="logo">
        <Link to={"/"}>
          Estuda<span>ENEM</span>
        </Link>
      </div>

      <div className="login-area">
        <span>Já tem uma conta?</span>
        <Link to={"/login"}>
          <button>Entrar</button>
        </Link>
      </div>
    </header>
  );
}