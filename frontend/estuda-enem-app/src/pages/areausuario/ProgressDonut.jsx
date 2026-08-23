export default function ProgressDonut({ percentual = 0 }) {
  const raio = 54;
  const circunferencia = 2 * Math.PI * raio;
  const percentualSeguro = Math.min(Math.max(Number(percentual) || 0, 0), 100);
  const preenchido = (percentualSeguro / 100) * circunferencia;

  return (
    <div className="donut-wrapper">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={raio} fill="none" stroke="#e5edff" strokeWidth="14" />
        <circle
          cx="70"
          cy="70"
          r={raio}
          fill="none"
          stroke="#2f6bff"
          strokeWidth="14"
          strokeDasharray={`${preenchido} ${circunferencia}`}
          strokeLinecap="round"
          transform="rotate(-90 70 70)"
        />
      </svg>
      <div className="donut-label">
        <strong>{percentualSeguro}%</strong>
        <span>de aproveitamento</span>
      </div>
    </div>
  );
}
