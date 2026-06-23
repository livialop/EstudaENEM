import React from "react";

export default function Features() {
  return (
    <section className="features" id="recursos">
      <div className="features__grid">
        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--blue">#</div>

          <h3>Por estudantes, para estudantes</h3>

          <p>
            A plataforma EstudaENEM foi feita por estudantes que compreendem
            o processo de estudo para o vestibular e entendem o que é necessário
            para praticar.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--green">#</div>

          <h3>Simulados</h3>

          <p>
            Selecione o ano e o dia de provado ENEM e tenha a possibilidade de 
            realizar simulados focados na experiência real da prova, com cronometragem 
            de tempo.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--purple">#</div>

          <h3>Responda questões</h3>

          <p>
            Há também a possibilidade de responder questões sem precisar realizar simulados. 
            Para esses casos, basta apenas selecionar os tipos de questões desejadas e responder de acordo.
            Há cronometragem de tempo por questão
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--orange">#</div>

          <h3>Ranking Semanal</h3>

          <p>
            Contamos com um sistema de ranking semanal para motivar os estudantes. Os alunos que mais possuírem
            acertos serão exibidos no ranking.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--teal">#</div>

          <h3>Desempenho pessoal</h3>

          <p>
            Há também análise de desempenho pessoal para ajudar o estudante a focar naquilo que está
            prejudicando suas provas.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--red">#</div>

          <h3>Banco de questões</h3>

          <p>
            Temos acesso a todas as questões de provas anteriores do ENEM para que os estudantes
            possam realizar simulados e responder questçies. Utilizamo a API externa API ENEM (enem.dev).
          </p>
        </div>
      </div>
    </section>
  );
}
