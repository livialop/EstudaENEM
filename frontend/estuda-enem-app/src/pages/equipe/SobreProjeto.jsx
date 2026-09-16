import React from "react";

const BLOCOS = [
  {
    id: "problema",
    icone: "🎯",
    titulo: "O problema",
    texto:
      "O EstudaENEM foi desenvolvido para oferecer praticidade e facilidade aos estudantes na resolução de questões do ENEM. A plataforma reúne, de forma totalmente gratuita, provas e questões do exame em um único banco de dados, proporcionando uma experiência organizada e intuitiva. Dessa forma, o estudante pode praticar seus conhecimentos sem se perder na resolução das questões, tornando sua preparação mais eficiente e produtiva.",
  },
  {
    id: "motivacao",
    icone: "🏆",
    titulo: "A motivação",
    texto:
      "O EstudaENEM surgiu com o objetivo de facilitar o acesso dos estudantes às questões e provas do ENEM de forma gratuita, organizada e intuitiva. A plataforma reúne esses conteúdos em um único banco de dados, permitindo que o estudante pratique seus conhecimentos de maneira mais simples e eficiente, contribuindo para uma preparação mais organizada e produtiva para o exame.",
  },
];

export default function SobreProjeto({ blocos = BLOCOS }) {
  return (
    <section className="sobre-projeto" aria-labelledby="sobre-projeto-titulo">
      <h2 id="sobre-projeto-titulo" className="sobre-projeto-titulo">
        Sobre o projeto
      </h2>

      <div className="sobre-projeto-lista">
        {blocos.map((bloco) => (
          <article key={bloco.id} className="sobre-projeto-item">
            <span className="sobre-projeto-icone" aria-hidden="true">
              {bloco.icone}
            </span>

            <div className="sobre-projeto-texto">
              <h3>{bloco.titulo}</h3>
              <p>{bloco.texto}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
