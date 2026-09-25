import React from "react";
import IntegranteCard from "./IntegranteCard";

const INTEGRANTES = [
  {
    id: 1,
    nome: "Raissa Kelly",
    funcao: "Desenvolvedora Front-end",
    descricao: "Responsável pela interface do usuário e experiência visual da plataforma.",
    foto: "",
  },
  {
    id: 2,
    nome: "Lívia Lopes",
    funcao: "Desenvolvedora Back-end",
    descricao: "Cuida da lógica, dados e integração para tudo funcionar por trás dos bastidores.",
    foto: "",
  },
  {
    id: 3,
    nome: "Ezaelly Clara",
    funcao: "Designer & UX/UI",
    descricao: "Responsável pelo designer, usabilidade e experiência com o usuário.",
    foto: "",
  },
];

export default function EquipeIntegrantes({ integrantes = INTEGRANTES }) {
  return (
    <section className="equipe-integrantes" aria-label="Integrantes da equipe">
      <ul className="equipe-integrantes-grid">
        {integrantes.map((integrante) => (
          <IntegranteCard key={integrante.id} {...integrante} />
        ))}
      </ul>
    </section>
  );
}
