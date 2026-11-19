import React from "react";
import ConteudoHtml from "./ConteudoHtml";

const SELOS = {
  correta: { icone: "✓", texto: "Correta" },
  errada: { icone: "✕", texto: "Sua resposta" },
};

export default function Alternativa({
  alternativa,
  estado, // neutro | selecionada | correta | errada
  escolhida,
  bloqueada,
  onSelecionar,
}) {
  const { letra, texto, img } = alternativa;
  const selo = SELOS[estado];

  return (
    <button
      type="button"
      className={`rq-alt rq-alt--${estado}`}
      aria-pressed={escolhida}
      aria-disabled={bloqueada}
      onClick={() => {
        if (!bloqueada) onSelecionar(letra);
      }}
    >
      <span className="rq-alt__letra">{letra}</span>

      <span className="rq-alt__corpo">
        {texto && <ConteudoHtml como="span" html={texto} className="rq-alt__texto" />}
        {img && (
          <img
            className="rq-alt__img"
            src={img}
            alt={`Alternativa ${letra}`}
            loading="lazy"
          />
        )}
      </span>

      {selo && (
        <span className="rq-alt__selo">
          <span aria-hidden="true">{selo.icone}</span> {selo.texto}
        </span>
      )}
    </button>
  );
}