import {Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../areausuario/AuthContext";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate()
  const location = useLocation();
  const { login } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    setMensagem("");
    setErro("");

    try {

      const dados = new URLSearchParams();
      dados.append("username", email)
      dados.append("password", senha)
      // TODO: trocar pra axios
      const response = await fetch("http://localhost:8080/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          credentials: "include",
          body: dados // nao dava p/ usar o json.stringify pq o auth request form do jwt requer outro formato de dados
          });

        const data = await response.json();

        if (!response.ok) {
          setErro(data.detail || "Erro ao fazer login.");
          return;
        }

        // tenta inferir usuário e token do retorno do backend
        const token = data.token || data.access_token || data.accessToken || data.jwt || null;
        const user = data.user || data.usuario || (data.nome ? { nome: data.nome, email } : { email });

        // atualiza contexto de autenticação
        try {
          login(user, token);
        } catch (e) {
          console.warn("Falha ao armazenar credenciais locais", e);
        }

        setMensagem("Login realizado com sucesso!");

        // campos limpos
        setEmail("");
        setSenha("");

        // redireciona para a rota solicitada ou área inicial
        const from = location.state?.from?.pathname;
        navigate(from || "/areainicial", { replace: true });

    } catch (error) {
      setErro("Erro ao fazer login.");
      console.error(error);
    }

  }

  return (
    <section className="login-card">

      <h1>Seja bem-vindo de volta!</h1>

      <p>
        É bom te ver aqui de novo!
        <br />
        Aproveite a sua sessão de estudos
      </p>

      <hr />

      <form onSubmit={handleSubmit}>

        <label>E-mail</label>

        <div className="input">
          <Mail size={16}/>
          
          <input 
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          
        </div>

        <label>Senha</label>

        <div className="input">
          <Lock size={16}/>
          
          <input 
            type="password" 
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
          
        </div>

        {/* o && funciona assim: se a expressao da esquerda for true ele exibe a da direita
        logo, se tiver erro, exibe a msg de erro
        se tiver sucesso, exibe a msg */}
        {erro && <p className="error">{erro}</p>} 

        {mensagem && <p className="success">{mensagem}</p>}

        <button 
          type="submit"
          className="login-button"
        >
          Fazer login
        </button>

      </form>

    </section>
  );
}