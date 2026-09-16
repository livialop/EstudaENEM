import React from "react";

export default function IntegranteCard({ nome, funcao, descricao, foto }) {
  return (
    <li className="integrante-card">
      <div className="integrante-avatar">
        {foto ? (
          <img src={foto} alt={`Foto de ${nome}`} />
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.5-8 5.5V22h16v-2.5c0-3-3.6-5.5-8-5.5Z" />
          </svg>
        )}
      </div>

      <h2 className="integrante-nome">{nome}</h2>
      <p className="integrante-funcao">{funcao}</p>
      <p className="integrante-descricao">{descricao}</p>
    </li>
  );
}
