import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar__container">
          <a href="/" className="navbar__logo">
            Estuda<span>ENEM</span>
          </a>

          <nav
            className={`navbar__links ${
              menuOpen ? "navbar__links--open" : ""
            }`}
          >
            <a href="#inicio">Simulados</a>
            <a href="#recursos">Questões</a>
            <a href="#sobre">Conteúdos</a>
            <a href="#contato">Sobre nós</a>
          </nav>

          <div className="navbar__actions">
            <button className="btn btn--ghost">Entrar</button>
            <button className="btn btn--primary">Cadastrar</button>
          </div>

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero__content">
          <h1 className="hero__title">
            Sua aprovação começa <span className="hero__highlight">hoje.</span> 
          </h1>

          <p className="hero__subtitle">
            A plataforma completa para você mandar bem no ENEM. <br />
            Conteúdo de qualidade, milhares de questões, simulados e muito mais!
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn--primary btn--lg">
              Começar Agora
            </button>
          </div>

          <div className="hero__social-proof">

            <span>Plataforma totalmente gratuita</span>
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features" id="recursos">
        <div className="features__grid">
          <div className="feature-card">
            <div className="feature-card__icon feature-card__icon--blue">
              #
            </div>

            <h3>Por estudantes, para estudantes</h3>

            <p>
              A plataforma EstudaENEM foi feita por estudantes que compreendem
              o processo de estudo para o vestibular e entendem o que é necessário
              para praticar.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon feature-card__icon--green">
              #
            </div>

            <h3>Simulados</h3>

            <p>
              Selecione o ano e o dia de provado ENEM e tenha a possibilidade de 
              realizar simulados focados na experiência real da prova, com cronometragem 
              de tempo.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon feature-card__icon--purple">
              #
            </div>

            <h3>Responda questões</h3>

            <p>
              Há também a possibilidade de responder questões sem precisar realizar simulados. 
              Para esses casos, basta apenas selecionar os tipos de questões desejadas e responder de acordo.
              Há cronometragem de tempo por questão
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon feature-card__icon--orange">
              #
            </div>

            <h3>Ranking Semanal</h3>

            <p>
              Contamos com um sistema de ranking semanal para motivar os estudantes. Os alunos que mais possuírem
              acertos serão exibidos no ranking.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon feature-card__icon--teal">
              #
            </div>

            <h3>Desempenho pessoal</h3>

            <p>
              Há também análise de desempenho pessoal para ajudar o estudante a focar naquilo que está
              prejudicando suas provas.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon feature-card__icon--red">
              #
            </div>

            <h3>Banco de questões</h3>

            <p>
              Temos acesso a todas as questões de provas anteriores do ENEM para que os estudantes
              possam realizar simulados e responder questçies. Utilizamo a API externa API ENEM (enem.dev).
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <div className="footer__logo">
              Estuda<span>ENEM</span>
            </div>

            <p>
              A plataforma de estudos mais completa para o ENEM. Feita por estudantes, para estudantes.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default App;