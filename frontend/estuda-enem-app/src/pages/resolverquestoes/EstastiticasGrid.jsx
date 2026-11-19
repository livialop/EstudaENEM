import React from "react";

export default function EstatisticasGrid({ estatisticas }) {
  const { total, acertos, erros, emBranco, percentual } = estatisticas;

  return (
    <dl className="rq-stats">
      <div className="rq-stats__item">
        <dt>Total</dt>
        <dd>{total}</dd>
      </div>
      <div className="rq-stats__item rq-stats__item--acerto">
        <dt>✓ Acertos</dt>
        <dd>{acertos}</dd>
      </div>
      <div className="rq-stats__item rq-stats__item--erro">
        <dt>✕ Erros</dt>
        <dd>{erros}</dd>
      </div>
      <div className="rq-stats__item">
        <dt>○ Em branco</dt>
        <dd>{emBranco}</dd>
      </div>
      <div className="rq-stats__item rq-stats__item--destaque">
        <dt>Aproveitamento</dt>
        <dd>{percentual}%</dd>
      </div>
    </dl>
  );
}