import {Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();

    setMensagem("");
    setErro("");

    try {

      const dados = new URLSearchParams();
      dados.append("username", email)
      dados.append("password", senha)
      
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

        setMensagem("Login realizado com sucesso!");

        // campos limpos
        setEmail("");
        setSenha("");

        navigate("/"); // TODO: ALTERAR ISSO DEPOIS PARA ÁREA INICIAL (PAG N EXISTE AINDA)

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