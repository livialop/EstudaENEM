import React from "react";
import CardSimulado from "./CardSimulado";

const SIMULADOS = [
  {
    id: 1,
    titulo: "Simulado ENEM 1",
    questoes: 180,
    duracao: "5h30min",
    nivel: "Difícil",
    icone: "",
    cor: "azul",
  },
  {
    id: 2,
    titulo: "Simulado ENEM 2",
    questoes: 180,
    duracao: "5h30min",
    nivel: "Difícil",
    icone: "",
    cor: "roxo",
  },
  {
    id: 3,
    titulo: "Simulado de Ciências Humanas",
    questoes: 45,
    duracao: "1h30min",
    nivel: "Médio",
    icone: "",
    cor: "verde",
  },
  {
    id: 4,
    titulo: "Simulado de Linguagens",
    questoes: 45,
    duracao: "1h30min",
    nivel: "Médio",
    icone: "",
    cor: "laranja",
  },
];

export default function SimuladosDisponiveis({ simulados = SIMULADOS, onIniciar }) {
  return (
    <section className="sim-card sim-disponiveis">
      <header className="sim-secao__cabecalho">
        <div>
          <h2 className="sim-secao__titulo">Simulados disponíveis</h2>
          <p className="sim-secao__subtitulo">
            Escolha um desafio e comece a treinar agora
          </p>
        </div>

        <button type="button" className="sim-link">
          Ver todos os simulados <span aria-hidden="true">›</span>
        </button>
      </header>

      <div className="sim-disponiveis__grade">
        {simulados.map((simulado) => (
          <CardSimulado
            key={simulado.id}
            {...simulado}
            onIniciar={() => onIniciar?.(simulado)}
          />
        ))}
      </div>
    </section>
  );
}
