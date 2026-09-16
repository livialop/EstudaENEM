import React from "react";

const HISTORICO = [
  { id: 1, simulado: "Simulado ENEM 01", data: "10/06/2024", acertos: "132/180", nota: 73 },
  { id: 2, simulado: "Simulado ENEM 02", data: "08/06/2024", acertos: "118/180", nota: 65 },
  { id: 3, simulado: "Simulado Linguagens", data: "02/06/2024", acertos: "38/45", nota: 84 },
  { id: 4, simulado: "Simulado Ciências Humanas", data: "29/05/2024", acertos: "32/45", nota: 71 },
  { id: 5, simulado: "Simulado Ciências da Natureza", data: "20/05/2024", acertos: "30/45", nota: 64 },
  { id: 6, simulado: "Simulado Matemática", data: "14/05/2024", acertos: "42/45", nota: 90 },
];

function classeNota(nota) {
  if (nota >= 80) return "sim-nota sim-nota--alta";
  if (nota >= 70) return "sim-nota sim-nota--media";
  return "sim-nota sim-nota--baixa";
}

export default function HistoricoSimulados({ historico = HISTORICO }) {
  return (
    <section className="sim-card sim-historico">
      <header className="sim-secao__cabecalho">
        <h2 className="sim-secao__titulo">Histórico de simulados</h2>
        <button type="button" className="sim-link">
          Ver histórico completo <span aria-hidden="true">›</span>
        </button>
      </header>

      <table className="sim-tabela">
        <thead>
          <tr>
            <th>Simulado</th>
            <th>Data</th>
            <th>Acertos</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((item) => (
            <tr key={item.id}>
              <td>{item.simulado}</td>
              <td>{item.data}</td>
              <td>{item.acertos}</td>
              <td>
                <span className={classeNota(item.nota)}>{item.nota}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
