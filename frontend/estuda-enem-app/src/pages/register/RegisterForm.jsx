import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    setMensagem("");
    setErro("");


    if (senha !== confirmarSenha) {
      setErro("As senhas estão diferentes.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/cadastro", 
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha,
        }),
      });

      const data = await response.json();

      // checa com o backend se deu erro na requisição
      if (!response.ok) {
        setErro(data.detail || "Erro ao cadastrar usuário.");
        return;
      }

      setMensagem("Cadastro realizado com sucesso!");

      // limpa os campos
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");

      navigate("/login"); //redireciona pro login após realizar cadastro.

    } catch (error) {
      setErro("Não foi possível conectar ao servidor.");
      console.error(error);
    }
  }

  return (
    // manti o form igual, so alterei p se conectar com o backend @raissa
    <section className="register-card">

      <h1>Crie sua conta</h1>

      <p>
        É rápido, gratuito e o primeiro passo para
        adentrar nossa comunidade!
      </p>

      <hr />

      <form onSubmit={handleSubmit}>

        <label>Nome completo</label>

        <div className="input">
          <User size={16} />

          <input
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>


        <label>E-mail</label>

        <div className="input">
          <Mail size={16} />

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
          <Lock size={16} />

          <input
            type="password"
            placeholder="Crie sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
        </div>


        <label>Confirmar senha</label>

        <div className="input">
          <Lock size={16} />

          <input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
            required
          />
        </div>

        {/* TODO: COLOCAR A COR DA MENSAGEM DE ERRO PARA VERMELHO */}
        {erro && <p className="error">{erro}</p>} 

        {mensagem && <p className="success">{mensagem}</p>}


        <button
          type="submit"
          className="register-button" 
        >
          Cadastrar-se
        </button>

      </form>

    </section>
  );
}