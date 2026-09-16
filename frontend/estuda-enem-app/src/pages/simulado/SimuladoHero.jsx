import React from "react";

export default function SimuladoHero({ onIniciar }) {
  return (
    <section className="sim-hero">
      <div className="sim-hero__texto">
        <h1 className="sim-hero__titulo">
          Simulado para <br />
          sua <span>aprovação</span>
        </h1>

        <p className="sim-hero__subtitulo">Treine como se fosse o dia da prova.</p>

        <p className="sim-hero__descricao">
          Realize simulados completos com cronômetro, correção automática e
          análise detalhada do seu desempenho.
        </p>

        <button type="button" className="sim-btn sim-btn--primario" onClick={onIniciar}>
          <span aria-hidden="true">▶</span> Iniciar simulado
        </button>
      </div>

      <img
        className="sim-hero__imagem"
        src="/assets/estudante-simulado.png"
        alt="Estudante fazendo um simulado no notebook"
      />
    </section>
  );
}
