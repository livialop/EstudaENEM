import { Link } from "react-router-dom";

export default function LoginNavbar() {

  return (
    <header className="topbar">
      <div className="logo">
        <Link to={"/"}>
          Estuda<span>ENEM</span>
        </Link>
      </div>

      <div className="login-area">
        <span>Ainda não tem uma conta?</span>
        <Link to={"/register"}>
          <button>Criar</button>
        </Link>
      </div>
    </header>
  );
}