import React from "react";
import {
  Home,
  HelpCircle,
  BookOpen,
  BarChart2,
} from "lucide-react";

export default function Sidebar() {

  const items = [
    {
      label: "Início",
      icon: Home,
      active: true,
    },
    {
      label: "Questões",
      icon: HelpCircle,
    },
    {
      label: "Simulado",
      icon: BookOpen,
    },
    {
      label: "Desempenho",
      icon: BarChart2,
    },
  ];

  return (
    <aside className="dash-sidebar">

      {items.map(({ label, icon: Icon, active }) => (

        <button
          key={label}
          className={`dash-sidebar__item ${
            active
              ? "dash-sidebar__item--active"
              : ""
          }`}
        >

          <Icon size={17} />

          <span>{label}</span>

        </button>

      ))}

    </aside>
  );
}