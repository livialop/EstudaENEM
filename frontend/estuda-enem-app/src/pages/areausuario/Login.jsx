import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErro("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const { user, token } = await response.json();
      login(user, token);
      const destino = location.state?.from?.pathname ?? "/perfil";
      navigate(destino, { replace: true });
    } catch (error) {
      setErro(error instanceof Error ? error.message : "Não foi possível entrar");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>EstudaENEM</h1>
        <label>
          E-mail
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label>
          Senha
          <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} required />
        </label>
        {erro && <p className="login-error">{erro}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
