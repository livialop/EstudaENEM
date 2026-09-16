import React from "react";

export default function SimuladoResumo({
  realizados = 0,
  melhorResultado = 0,
  melhorSimulado = "Simulado ENEM 01",
}) {
  return (
    <section className="sim-resumo">
      <article className="sim-card sim-resumo__card">
        <span className="sim-resumo__icone" aria-hidden="true"></span>
        <div>
          <h2 className="sim-resumo__titulo">Simulados realizados</h2>
          <p className="sim-resumo__valor">{realizados}</p>
          <p className="sim-resumo__nota">Desde que começou</p>
        </div>
      </article>

      <article className="sim-card sim-resumo__card">
        <span className="sim-resumo__icone" aria-hidden="true"></span>
        <div>
          <h2 className="sim-resumo__titulo">Melhor resultado</h2>
          <p className="sim-resumo__valor">{melhorResultado}%</p>
          <p className="sim-resumo__nota">{melhorSimulado}</p>
        </div>
      </article>
    </section>
  );
}
