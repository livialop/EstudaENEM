import React from "react";

export default function PainelProva({
  titulo,
  area,
  posicao,
  total,
  bloco,
  totalBlocos,
  onAbandonar,
}) {
  return (
    <section className="sim-card rq-painel">
      <h2 className="rq-painel__titulo">{titulo}</h2>
      <p className="rq-painel__area">{area}</p>

      <dl className="rq-painel__info">
        <div>
          <dt>Questão</dt>
          <dd>
            {posicao} de {total}
          </dd>
        </div>
        <div>
          <dt>Bloco</dt>
          <dd>
            {bloco} de {totalBlocos}
          </dd>
        </div>
      </dl>

      <button type="button" className="rq-abandonar" onClick={onAbandonar}>
        <span aria-hidden="true">📄</span> Abandonar prova
      </button>
    </section>
  );
}