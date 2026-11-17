import { Calendar, ChevronDown } from "lucide-react";

export default function YearSelect({ anos, value, onChange }) {
  return (
    <section className="sel-section">
      <h2 className="sel-section__title">
        <Calendar size={16} />
        Ano ENEM
      </h2>

      <div className="sel-select">
        <Calendar size={16} className="sel-select__icon" />
        <select
          aria-label="Ano ENEM"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Selecione o ano</option>
          {anos.map((ano) => (
            <option key={ano.value} value={ano.value}>
              {ano.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="sel-select__chevron" />
      </div>
    </section>
  );
}