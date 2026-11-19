import React from "react";

export default function ProgressoProva({ respondidas, total }) {
  const emBranco = Math.max(0, total - respondidas);
  const percentual = total ? Math.round((respondidas / total) * 100) : 0;

  return (
    <section className="sim-card rq-progresso" aria-label="Progresso de prova">
      <h2 className="rq-progresso__titulo">Progresso de prova</h2>

      <div className="rq-progresso__numeros">
        <div>
          <span className="rq-progresso__rotulo">
            <span aria-hidden="true">✅</span> Respondidas
          </span>
          <strong>{respondidas}</strong>
        </div>
        <div>
          <span className="rq-progresso__rotulo">
            <span aria-hidden="true">○</span> Em branco
          </span>
          <strong>{emBranco}</strong>
        </div>
      </div>

      <div
        className="rq-barra"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={respondidas}
        aria-label="Questões respondidas"
      >
        <div className="rq-barra__preenchida" style={{ width: `${percentual}%` }} />
      </div>

      <p className="rq-progresso__legenda">
        {respondidas} de {total} questões
      </p>
    </section>
  );
}