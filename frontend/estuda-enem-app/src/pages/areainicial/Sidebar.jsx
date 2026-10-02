import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  HelpCircle,
  BookOpen,
  BarChart2,
} from "lucide-react";

const items = [
  { label: "Início", icon: Home, to: "/areainicial" },
  { label: "Questões", icon: HelpCircle, to: "/questoes" },
  { label: "Simulado", icon: BookOpen, to: "/simulados" },
  { label: "Desempenho", icon: BarChart2, to: "/areausuario" },
];

export default function Sidebar({ activeItem = "Início", onSair }) {
  const navigate = useNavigate();

  return (
    <aside className="dash-sidebar">
      {items.map(({ label, icon: Icon, to }) => (
        <button
          key={label}
          type="button"
          onClick={() => navigate(to)}
          className={`dash-sidebar__item ${
            label === activeItem ? "dash-sidebar__item--active" : ""
          }`}
        >
          <Icon size={17} />
          <span>{label}</span>
        </button>
      ))}

      {onSair ? (
        <button type="button" className="dash-sidebar__sair" onClick={onSair}>
          Sair <span aria-hidden="true">↪</span>
        </button>
      ) : null}
    </aside>
  );
}