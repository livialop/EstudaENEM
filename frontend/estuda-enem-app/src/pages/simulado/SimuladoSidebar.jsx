import React from "react";
import { Link } from "react-router-dom";

const ITENS = [
  { id: "inicio", label: "Início", icone: "", rota: "/areainicial" },
  { id: "questoes", label: "Questões", icone: "", rota: "/questoes" },
  { id: "simulado", label: "Simulado", icone: "", rota: "/simulado" },
  { id: "desempenho", label: "Desempenho", icone: "", rota: "/desempenho" },
];

export default function SimuladoSidebar({ ativo = "simulado", onSair }) {
  return (
    <aside className="sim-sidebar">
      <nav className="sim-sidebar__menu">
        {ITENS.map((item) => (
          <Link
            key={item.id}
            to={item.rota}
            className={
              "sim-sidebar__item" +
              (ativo === item.id ? " sim-sidebar__item--ativo" : "")
            }
          >
            <span aria-hidden="true">{item.icone}</span>
            {item.label}
          </Link>
        ))}
      </nav>


      <button type="button" className="sim-sidebar__sair" onClick={onSair}>
        Sair <span aria-hidden="true">↪</span>
      </button>
    </aside>
  );
}
