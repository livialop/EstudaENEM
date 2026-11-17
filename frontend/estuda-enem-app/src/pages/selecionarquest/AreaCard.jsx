import { ChevronRight } from "lucide-react";

export default function AreaCard({ area, total, selecionada, onSelect }) {
  const { titulo, Icon, tone } = area;

  return (
    <button
      type="button"
      className={`sel-card${selecionada ? " sel-card--active" : ""}`}
      aria-pressed={selecionada}
      onClick={() => onSelect(area.id)}
    >
      <span className={`sel-card__icon sel-card__icon--${tone}`}>
        <Icon size={20} />
      </span>

      <span className="sel-card__text">
        <strong>{titulo}</strong>
        <small>
          {total === null
            ? "—"
            : `${total.toLocaleString("pt-BR")} questões`}
        </small>
      </span>

      <ChevronRight size={16} className="sel-card__arrow" />
    </button>
  );
}