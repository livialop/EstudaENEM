import React from "react";

export default function CardSimulado({
  titulo,
  questoes,
  duracao,
  nivel,
  icone,
  cor = "azul",
  onIniciar,
}) {
  return (
    <article className="sim-card sim-card-simulado">
      <span
        className={`sim-card-simulado__icone sim-card-simulado__icone--${cor}`}
        aria-hidden="true"
      >
        {icone}
      </span>

      <h3 className="sim-card-simulado__titulo">{titulo}</h3>

      <ul className="sim-card-simulado__info">
        <li>
          <span aria-hidden="true"></span> {questoes} questões
        </li>
        <li>
          <span aria-hidden="true"></span> {duracao}
        </li>
        <li>
          <span aria-hidden="true"></span> Nível: <strong>{nivel}</strong>
        </li>
      </ul>

      <button
        type="button"
        className="sim-btn sim-btn--primario sim-btn--bloco"
        onClick={onIniciar}
      >
        Iniciar
      </button>
    </article>
  );
}
