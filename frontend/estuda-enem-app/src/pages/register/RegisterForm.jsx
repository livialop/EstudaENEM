import { User, Mail, Lock } from "lucide-react";

// TODO testar com o backend

export default function RegisterForm() {
  return (
    <section className="register-card">

      <h1>Crie sua conta</h1>

      <p>
        É rápido, gratuito e o primeiro passo para
        adentrar nossa comunidade!
      </p>

      <hr />

      <form>

        <label>Nome completo</label>

        <div className="input">
          <User size={16}/>
          <input placeholder="Digite seu nome completo"/>
        </div>

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

        <label>Confirmar senha</label>

        <div className="input">
          <Lock size={16}/>
          <input type="password" placeholder="Confirme sua senha"/>
        </div>

        <button className="register-button">
          Cadastrar-se
        </button>

      </form>

    </section>
  );
}