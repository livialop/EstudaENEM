import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function JourneySteps() {

  const steps = [
    {
      title: "Comece seus estudos",
      desc: "Crie uma rotina e defina seus objetivos",
      done: true,
    },
    {
      title: "Pratique questões",
      desc: "Responda questões e veja seu desempenho",
      done: true,
    },
    {
      title: "Faça simulados",
      desc: "Teste seus conhecimentos em condições reais",
      done: false,
    },
    {
      title: "Acompanhe seu progresso",
      desc: "Analise seus resultados e evolua sempre!",
      done: false,
    },
  ];

  return (
    <section className="dash-card dash-journey">

      <h2>Sua jornada até a aprovação</h2>

      <div className="dash-journey__track">

        {steps.map((step, i) => (

          <div
            className="dash-journey__step"
            key={step.title}
          >

            <span
              className={`dash-journey__marker ${
                step.done
                  ? "dash-journey__marker--done"
                  : ""
              }`}
            >

              {step.done ? (
                <CheckCircle2 size={14} />
              ) : (
                i + 1
              )}

            </span>

            <strong>{step.title}</strong>

            <small>{step.desc}</small>

          </div>

        ))}

      </div>

    </section>
  );
}