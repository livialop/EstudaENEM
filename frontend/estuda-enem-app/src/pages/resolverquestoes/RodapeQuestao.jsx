import React from "react";

export default function RodapeQuestao({
  ehPrimeira,
  ehUltima,
  marcada,
  onAnterior,
  onMarcar,
  onProxima,
}) {
  return (
    <footer className="rq-rodape">
      <button
        type="button"
        className="sim-btn sim-btn--secundario"
        onClick={onAnterior}
        disabled={ehPrimeira}
      >
        <span aria-hidden="true">←</span> Questão anterior
      </button>

      <button
        type="button"
        className="sim-btn sim-btn--secundario"
        onClick={onMarcar}
        aria-pressed={marcada}
      >
        {marcada ? "Desmarcar questão" : "Marcar questão"}
      </button>

      <button type="button" className="sim-btn sim-btn--secundario" onClick={onProxima}>
        {ehUltima ? "Concluir bloco" : "Próxima questão"}
        <span aria-hidden="true">→</span>
      </button>
    </footer>
  );
}