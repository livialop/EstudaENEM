import React from "react";
import EstatisticasGrid from "./EstastiticasGrid";

export default function ResumoBloco({
  numeroBloco,
  totalBlocos,
  estatisticas,
  temProximoBloco,
  tamanhoBloco,
  onContinuar,
  onRevisar,
  onFinalizar,
}) {
  return (
    <section className="rq-card rq-resumo" aria-labelledby="resumo-bloco-titulo">
      <h2 id="resumo-bloco-titulo" className="rq-resumo__titulo">
        Bloco {numeroBloco} de {totalBlocos} concluído
      </h2>
      <p className="rq-resumo__texto">Veja como você foi neste bloco de {tamanhoBloco} questões.</p>

      <EstatisticasGrid estatisticas={estatisticas} />

      <div className="rq-resumo__acoes">
        {temProximoBloco && (
          <button type="button" className="sim-btn sim-btn--primario" onClick={onContinuar}>
            Continuar: próximas {tamanhoBloco} questões
          </button>
        )}

        <button type="button" className="sim-btn sim-btn--secundario" onClick={onRevisar}>
          Revisar este bloco
        </button>

        <button
          type="button"
          className={`sim-btn ${temProximoBloco ? "sim-btn--secundario" : "sim-btn--primario"}`}
          onClick={onFinalizar}
        >
          {temProximoBloco ? "Encerrar e ver resultado" : "Ver resultado final"}
        </button>
      </div>
    </section>
  );
}