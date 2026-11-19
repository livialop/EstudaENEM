import React from "react";

export default function NavegadorBloco({
  questoes,
  atual,
  respostas,
  marcadas,
  onIrPara,
}) {
  return (
    <section className="sim-card rq-navegador" aria-label="Questões deste bloco">
      <h2 className="rq-navegador__titulo">Neste bloco</h2>

      <ol className="rq-navegador__lista">
        {questoes.map((questao, indice) => {
          const respondida = Boolean(respostas[questao.id]);
          const marcada = Boolean(marcadas[questao.id]);
          const ativa = indice === atual;

          const descricao = [
            `Questão ${indice + 1} do bloco`,
            respondida ? "respondida" : "em branco",
            marcada ? "marcada para revisão" : null,
            ativa ? "atual" : null,
          ]
            .filter(Boolean)
            .join(", ");

          return (
            <li key={questao.id}>
              <button
                type="button"
                className={
                  "rq-navegador__item" +
                  (ativa ? " rq-navegador__item--atual" : "") +
                  (respondida ? " rq-navegador__item--respondida" : "")
                }
                aria-label={descricao}
                aria-current={ativa ? "true" : undefined}
                onClick={() => onIrPara(indice)}
              >
                {indice + 1}
                {marcada && (
                  <span className="rq-navegador__flag" aria-hidden="true">
                    ⚑
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}