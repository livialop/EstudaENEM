import React from "react";
import {
  MessageCircle,
  Globe2,
  Atom,
  Calculator,
} from "lucide-react";

export default function PerformanceCard() {

  const subjects = [
    {
      label: "Linguagens",
      value: 68,
      icon: MessageCircle,
    },
    {
      label: "Ciências Humanas",
      value: 50,
      icon: Globe2,
    },
    {
      label: "Ciências da Natureza",
      value: 20,
      icon: Atom,
    },
    {
      label: "Matemática",
      value: 82,
      icon: Calculator,
    },
  ];

  const overall = 55;

  return (
    <section className="dash-card dash-performance">

      <h2>Desempenho geral</h2>

      <div className="dash-performance__body">

        <div
          className="dash-donut"
          style={{
            "--pct": overall,
          }}
        >
          <div className="dash-donut__hole">

            <strong>{overall}%</strong>

            <small>
              de aproveitamento
            </small>

          </div>
        </div>

        <ul className="dash-performance__list">

          {subjects.map(
            ({ label, value, icon: Icon }) => (

              <li key={label}>

                <span className="dash-performance__label">

                  <Icon size={15} />

                  {label}

                </span>

                <span className="dash-performance__value">
                  {value}%
                </span>

              </li>

            )
          )}

        </ul>

      </div>

    </section>
  );
}