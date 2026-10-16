import React from "react";
import IntegranteCard from "./IntegranteCard";
import imagemLivia from "../../assets/livia.jpg"
import imagemRaissa from "../../assets/Raissa.jpg"
import imagemEzaelly from "../../assets/ezaelly.jpg"

const INTEGRANTES = [
  {
    id: 1,
    nome: "Ezaelly Clara",
    funcao: "Designer & UX/UI",
    descricao: "Responsável pelo designer, usabilidade e experiência com o usuário.",
    foto: imagemEzaelly,
  },
  {
    id: 2,
    nome: "Lívia Lopes",
    funcao: "Desenvolvedora Back-end",
    descricao: "Cuida da lógica, dados e integração para tudo funcionar por trás dos bastidores.",
    foto: imagemLivia,
  },
  {
    id: 3,
    nome: "Raissa Kelly",
    funcao: "Desenvolvedora Front-end",
    descricao: "Responsável pela interface do usuário e experiência visual da plataforma.",
    foto: imagemRaissa,
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
