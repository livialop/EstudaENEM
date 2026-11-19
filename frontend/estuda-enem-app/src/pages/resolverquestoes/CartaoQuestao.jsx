import React from "react";
import ConteudoHtml from "./ConteudoHtml";
import Alternativa from "./Alternativa";
import RodapeQuestao from "./RodapeQuestao";
import { letraCorreta } from "./UseSessaoQuestoes";

export default function CartaoQuestao({
  questao,
  numeroExibido,
  ano,
  rascunho,
  resposta,
  marcada,
  ehPrimeira,
  ehUltima,
  onSelecionar,
  onConfirmar,
  onAnterior,
  onProxima,
  onMarcar,
}) {
  const respondida = Boolean(resposta);
  // A correta só é consultada depois que o usuário confirma.
  const certa = respondida ? letraCorreta(questao) : null;
  const acertou = respondida && resposta === certa;

  const alternativas = [...questao.alternativas].sort((a, b) =>
    String(a.letra).localeCompare(String(b.letra))
  );

  function estadoDe(letra) {
    if (!respondida) return rascunho === letra ? "selecionada" : "neutro";
    if (letra === certa) return "correta";
    if (letra === resposta) return "errada";
    return "neutro";
  }

  const escolhidaAtual = resposta ?? rascunho;

  return (
    <section className="rq-card" aria-labelledby={`questao-${questao.id}`}>
      <header className="rq-card__cabecalho">
        <h2 id={`questao-${questao.id}`} className="rq-card__numero">
          Questão {numeroExibido}
        </h2>
        {ano && <span className="rq-card__selo">ENEM {ano}</span>}
        {marcada && (
          <span className="rq-card__marcada">
            <span aria-hidden="true">⚑</span> Marcada para revisão
          </span>
        )}
      </header>

      {questao.titulo && <p className="rq-card__titulo">{questao.titulo}</p>}

      <ConteudoHtml html={questao.enunciado} className="rq-conteudo rq-card__enunciado" />
      <ConteudoHtml html={questao.introducao} className="rq-conteudo rq-card__introducao" />

      <div className="rq-alternativas" role="group" aria-label="Alternativas">
        {alternativas.map((alternativa) => (
          <Alternativa
            key={alternativa.letra}
            alternativa={alternativa}
            estado={estadoDe(alternativa.letra)}
            escolhida={escolhidaAtual === alternativa.letra}
            bloqueada={respondida}
            onSelecionar={onSelecionar}
          />
        ))}
      </div>

      {respondida ? (
        <p
          role="status"
          className={`rq-feedback ${acertou ? "rq-feedback--acerto" : "rq-feedback--erro"}`}
        >
          {acertou ? (
            <>
              <span aria-hidden="true">✓</span> Você acertou!
            </>
          ) : (
            <>
              <span aria-hidden="true">✕</span> Resposta incorreta. A alternativa correta é{" "}
              <strong>{certa}</strong>.
            </>
          )}
        </p>
      ) : (
        <div className="rq-confirmar">
          <button
            type="button"
            className="sim-btn sim-btn--primario"
            disabled={!rascunho}
            onClick={onConfirmar}
          >
            Confirmar resposta
          </button>
        </div>
      )}

      <RodapeQuestao
        ehPrimeira={ehPrimeira}
        ehUltima={ehUltima}
        marcada={marcada}
        onAnterior={onAnterior}
        onMarcar={onMarcar}
        onProxima={onProxima}
      />
    </section>
  );
}