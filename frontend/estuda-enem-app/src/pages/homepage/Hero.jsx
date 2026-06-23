import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <h1 className="hero__title">
          Sua aprovação começa <span className="hero__highlight">hoje.</span>
        </h1>

        <p className="hero__subtitle">
          A plataforma completa para você mandar bem no ENEM. <br />
          Conteúdo de qualidade, milhares de questões, simulados e muito mais!
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button className="btn btn--primary btn--lg">Começar Agora</button>
        </div>

        <div className="hero__social-proof">

          <span>Plataforma totalmente gratuita</span>
        </div>
      </div>

    </section>
  );
}
