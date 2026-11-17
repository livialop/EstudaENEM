import { BookOpen } from "lucide-react";
import AreaCard from "./AreaCard";

export default function AreaGrid({ areas, totais, selecionada, onSelect }) {
  return (
    <section className="sel-section">
      <h2 className="sel-section__title">
        <BookOpen size={16} />
        Área de Conhecimento
      </h2>

      <div className="sel-areas">
        {areas.map((area) => (
          <AreaCard
            key={area.id}
            area={area}
            total={totais[area.id] ?? null}
            selecionada={selecionada === area.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}