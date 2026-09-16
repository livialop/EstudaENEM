import React from "react";

export default function EquipeHero({ titulo = "Equipe Desenvolvedora" }) {
  return (
    <section className="equipe-hero">
      <h1 className="equipe-hero-titulo">{titulo}</h1>
    </section>
  );
}
