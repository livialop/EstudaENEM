import React from "react";
import { ArrowRight } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="dash-hero">

      <div className="dash-hero__text">

        <h1>
          Estude com estratégia.
          <br />
          <span>Conquiste seu futuro.</span>
        </h1>

        <p>
          A plataforma mais completa para você mandar bem
          no ENEM. Conteúdo de qualidade, questões,
          simulados e muito mais!
        </p>

        <button className="btn btn--primary">
          Continuar Estudando
          <ArrowRight size={16} />
        </button>

      </div>

    </div>
  );
}