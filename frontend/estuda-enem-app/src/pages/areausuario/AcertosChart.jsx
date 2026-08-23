export default function AcertosChart({ dados = [] }) {
  if (!dados.length) {
    return <p className="chart-empty">Sem dados de simulados ainda.</p>;
  }

  const largura = 300;
  const altura = 140;
  const passoX = largura / (dados.length - 1 || 1);
  const pontos = dados.map((dado, index) => ({
    x: index * passoX,
    y: altura - (dado.percentual / 100) * altura,
    ...dado,
  }));
  const path = pontos.map((ponto) => `${ponto.x},${ponto.y}`).join(" ");

  return (
    <svg width={largura} height={altura + 30} viewBox={`0 0 ${largura} ${altura + 30}`}>
      <polyline points={path} fill="none" stroke="#2f6bff" strokeWidth="2" />
      {pontos.map((ponto) => (
        <g key={`${ponto.label}-${ponto.percentual}`}>
          <circle cx={ponto.x} cy={ponto.y} r="4" fill="#2f6bff" />
          <text x={ponto.x} y={ponto.y - 8} fontSize="10" textAnchor="middle" fill="#2f6bff">
            {ponto.percentual}%
          </text>
          <text x={ponto.x} y={altura + 20} fontSize="9" textAnchor="middle" fill="#8a94a6">
            {ponto.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
