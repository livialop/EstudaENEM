import {Mail, Lock } from "lucide-react";

export default function LoginForm() {
  return (
    <section className="login-card">

      <h1>Seja bem-vindo de volta!</h1>

      <p>
        É bom te ver aqui de novo!
        <br />
        Aproveite a sua sessão de estudos
      </p>

      <hr />

      <form>

        <label>E-mail</label>

        <div className="input">
          <Mail size={16}/>
          <input placeholder="Digite seu e-mail"/>
        </div>

        <label>Senha</label>

        <div className="input">
          <Lock size={16}/>
          <input type="password" placeholder="Crie sua senha"/>
        </div>

        <button className="login-button">
          Fazer login
        </button>

      </form>

    </section>
  );
}