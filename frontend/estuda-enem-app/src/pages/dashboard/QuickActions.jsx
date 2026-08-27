import React from "react";
import {
  BookOpen,
  HelpCircle,
} from "lucide-react";

export default function QuickActions() {

  const actions = [
    {
      label: "Simulado",
      desc: "Simulados completos por correção",
      icon: BookOpen,
    },
    {
      label: "Questões",
      desc: "Pratique e teste seus conhecimentos",
      icon: HelpCircle,
    },
  ];

  return (
    <section className="dash-card dash-quick">

      <h2>O que quer fazer agora</h2>

      <div className="dash-quick__grid">

        {actions.map(
          ({ label, desc, icon: Icon }) => (

            <button
              key={label}
              className="dash-quick__item"
            >

              <span className="dash-quick__icon">
                <Icon size={22} />
              </span>

              <strong>{label}</strong>

              <small>{desc}</small>

            </button>

          )
        )}

      </div>

    </section>
  );
}