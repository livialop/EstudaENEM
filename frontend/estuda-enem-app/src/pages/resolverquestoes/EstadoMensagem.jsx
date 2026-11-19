import React from "react";

export default function EstadoMensagem({ tipo, mensagem, onTentarNovamente, onVoltar }) {
  if (tipo === "carregando") {
    return (
      <div className="rq-card rq-estado" role="status">
        <span className="rq-spinner" aria-hidden="true" />
        <p>Carregando questões...</p>
      </div>
    );
  }

  const ehVazio = tipo === "vazio";

  return (
    <div className="rq-card rq-estado" role={ehVazio ? "status" : "alert"}>
      <h2 className="rq-estado__titulo">
        {ehVazio ? "Nenhuma questão encontrada" : "Não foi possível carregar as questões"}
      </h2>
      <p>
        {ehVazio
          ? "Não existem questões para a prova e a área escolhidas. Tente outra combinação."
          : mensagem}
      </p>

      <div className="rq-resumo__acoes">
        {!ehVazio && (
          <button type="button" className="sim-btn sim-btn--primario" onClick={onTentarNovamente}>
            Tentar de novo
          </button>
        )}
        <button
          type="button"
          className={`sim-btn ${ehVazio ? "sim-btn--primario" : "sim-btn--secundario"}`}
          onClick={onVoltar}
        >
          Escolher outras questões
        </button>
      </div>
    </div>
  );
}