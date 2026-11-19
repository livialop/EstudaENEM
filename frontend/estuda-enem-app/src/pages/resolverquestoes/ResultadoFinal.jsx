import React from "react";
import EstatisticasGrid from "./EstastiticasGrid";
import { letraCorreta } from "./useSessaoQuestoes";

export default function ResultadoFinal({
  estatisticas,
  questoes,
  respostas,
  onTentarNovamente,
  onNovaSelecao,
  onVoltarInicio,
}) {
  return (
    <section className="rq-card rq-resumo" aria-labelledby="resultado-final-titulo">
      <h2 id="resultado-final-titulo" className="rq-resumo__titulo">
        Resultado final
      </h2>
      <p className="rq-resumo__texto">
        Você acertou {estatisticas.acertos} de {estatisticas.total} questões.
      </p>

      <EstatisticasGrid estatisticas={estatisticas} />

      <h3 className="rq-resumo__subtitulo">Questão por questão</h3>
      <ul className="rq-lista-resultado">
        {questoes.map((questao, indice) => {
          const escolhida = respostas[questao.id];
          const certa = letraCorreta(questao);
          const acertou = escolhida && escolhida === certa;

          let rotulo = "○ Em branco";
          let classe = "rq-lista-resultado__item--branco";
          if (escolhida) {
            rotulo = acertou ? "✓ Acertou" : "✕ Errou";
            classe = acertou
              ? "rq-lista-resultado__item--acerto"
              : "rq-lista-resultado__item--erro";
          }

          return (
            <li key={questao.id} className={`rq-lista-resultado__item ${classe}`}>
              <span>Questão {questao.numero ?? indice + 1}</span>
              <span>{rotulo}</span>
              <span className="rq-lista-resultado__detalhe">
                {escolhida ? `Sua resposta: ${escolhida} · Correta: ${certa}` : `Correta: ${certa}`}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="rq-resumo__acoes">
        <button type="button" className="sim-btn sim-btn--primario" onClick={onTentarNovamente}>
          Tentar novamente
        </button>
        <button type="button" className="sim-btn sim-btn--secundario" onClick={onNovaSelecao}>
          Escolher novas questões
        </button>
        <button type="button" className="sim-btn sim-btn--secundario" onClick={onVoltarInicio}>
          Voltar à área inicial
        </button>
      </div>
    </section>
  );
}