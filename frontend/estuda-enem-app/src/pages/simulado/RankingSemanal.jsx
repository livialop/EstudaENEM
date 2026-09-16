import React from "react";

export default function RankingSemanal({ posicao = 23, percentil = 15, onVerRanking }) {
  return (
    <section className="sim-card sim-ranking">
      <div className="sim-ranking__conteudo">
        <h2 className="sim-ranking__titulo">
          <span aria-hidden="true"></span> Ranking Semanal
        </h2>

        <div className="sim-ranking__posicao">
          <span className="sim-ranking__medalha" aria-hidden="true"></span>
          <div>
            <p className="sim-ranking__rotulo">Sua posição</p>
            <p className="sim-ranking__numero">#{posicao}</p>
          </div>
        </div>

        <p className="sim-ranking__texto">
          Você está entre os {percentil}% melhores usuários da plataforma
        </p>

        <button
          type="button"
          className="sim-btn sim-btn--secundario"
          onClick={onVerRanking}
        >
          Ver ranking completo
        </button>
      </div>

      <img
        className="sim-ranking__imagem"
        src="/assets/estudante-trofeu.png"
        alt="Estudante comemorando com um troféu"
      />
    </section>
  );
}
