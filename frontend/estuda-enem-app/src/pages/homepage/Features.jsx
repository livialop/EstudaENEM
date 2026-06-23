import React from "react";

export default function Features() {
  return (
    <section className="features" id="recursos">
      <div className="features__grid">
        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--blue">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2az08TQRTHN+hR/QNM9ODVqAcvBk3ovBZ/HMATEcXon2CigvFUj+AN8aAJmEjnlYSTnk3UgzcjnozExKghUVQOwr63tQqseWyBWrtlpu2sVHnJO3R3uvP5zryZNzuznrdl/7ApTVdB+1e8VjSVD84qpCXQtJzO0UWvlUzlfVCavgNyGDn9SCGd8DaDZe4HexXSW0AaTqOf6XgSbi+/r5APA/LCOnzkCok7cnykvGw2G7ZJeYV8QyG/Oj4R7HEuADDo/R2MPwPyWErz6Yz2DyjNs5Xwa2U1z0oZKSv/UdF/y8oEvc4FKKTbcYCNutI04lwAIL90J4CnnMK3j37dqTQtOuyBxZO5uV3OBEDe73QFDyWXicFJy0fw9MC1AJA68n6n1Fk3cCbPuwG5SyEPAtIzpanoHpz/CCeZWgH5rkK6oPL+fmMBgDydNDBs5JpfGwtQyENJA55/WKjdI8iDxgJSOjiaJPzlR4Xw3bel8M5UMV7ARNBuLEBSPGj+lCT8zELk1URIxu6ZDLd5Niap3jV8/+NC+L4MXlx+91WEk0Ie9WxN5bg7yZafKcGLqCrlu6wFyKLLFfxATMv3V4cPhcWu9WWJW2NVmSQ8lFaxwmT+MoI8v1ngYW0cEIGmUzXh0+j32WTdjeZukwHbbwC/3hNUVNo/VxUekC+tvMMaPmzkedEYoJGWh0rXtAxI1xoSIPCmIE2FxxoCTENI5mhToGbDq1ohZDOIq83hH+aXwutPC+7g0WAQ20yjtUQ0v+XZfBq1SWRxM0u1awP1xjzWkcjESlsfGz68Wk80bcBiqQdy3G0tADTfM60gTkQz4CHyMSv4lR0zy6VEpYgmwofWy+kMBsfqqWhVRDPhoeTykmUTPjfrrUgGayMDFuJ7YailX+qVpjctva2SxsI+77/Z2Ioz2fZzLSCV89OeK+uYDHeApp8uw6bdRcuXm2yBOxOA/MIpfCSARpyFkKZbf+OIaQ6QxwGDHjVOh2puiGn+Ann/YDSWaBiQP5bfT+vgjHMBchAneUISi2RHWXaYHPLJtcolcTYbtskzSnux04kc8pkYaF9t2mNWm1Br2YPuVZPPDFr2U4Mt88zsF/L7hiBlV3/sAAAAAElFTkSuQmCC"
              alt="verified-badge"
            />
          </div>

          <h3>Por estudantes, para estudantes</h3>

          <p>
            A plataforma EstudaENEM foi feita por estudantes que compreendem o
            processo de estudo para o vestibular e entendem o que é necessário
            para praticar.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--green">
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJ0lEQVR4nO2Zx04bURSGWSQPkTcIvTebtgzKKsoyO4xNL6Y+Q8oLsIggCs2YYo89LuMy9riMMQHiEGCZGEeKIpZ+gBP5aAaCMcjKvXMtI670bef+38y5919MRcXjeoBraWnp6cqG7cOKxXH5act5+Xmbfy+K4pOKclmrVv7d2o4L1nc9sLHnhU2bABab8LYkYRKLfS/lhd5f8mIfxBd6C7K6zcPajvtmYLsPrM6AbosTu7Z5EXZcIdh1h2HPI4HNGwW7EIPIbNcNJJUZPUhmfSYyq+8nFojN92TyA8dyzPdcsWkXwML5YMsRAKszCGpg1/rHV/za8ms1MOePgyMgAx/cB5eYvB36H8IzegiZdRfEAmroP+dJyGazBbl+wxLseSJgF6LA+WLg8MfBGUhcBXaHDsAT/gJe6RCEyPGdz/t9moCwWYfQ+AL4lu/aLMd1YPmOwEcgRI/BF/sK/ngKAvI3CCa+3/vMkFmHMBGIJE+uA0uH4I3kBz7BwOL+KYSTZyAdnMPR2Y/7BaY7EWKB6Fw35LhvMy0QpzuR8hWY6kCIBSJz3XhbsBYITnUg5ALKNcdcYLIdIRZQ72jWAoHJdoRcQCmVUgj4J9rIBXLhc4XCWsA/0UZJQCmU/A2em0Lw7I2fCpWmUEEB33gruYDaiPkbVGos4BtvpSSgFArrEfKNt4Iw1kIuIJZIQBhroSOgFgrNM1BoZLIFBLxaClRqLOAdbUaIBdRCYT1CntFmpHwFRpoQYgG1UGiegWJGyj3ShGgmoHUPuIcbEWIBtVBYj5BruBEpX4GhBoRYQC0UmmegmGuUH2pANBPQugd4Uz1CLKAWCusRcprqkfIVMNYhxALYiCNNVM9AMSPlMNYh5AJKI9I8A0UJDNYixALYiMONzEeIG6xFyAWUQimJgKGGXAAbcaiBuYDdUIOQCyiFUgoB20A1uQA2oqmeuYBtoJqSgFIo6XSaWfh0+ic9AbURZVlmio2agFIoSY8VUqkUE/ZdFnoCnLEug62oFAtXCOXGuIUS4v+pIv/Jxxlr++2Gmkx+6IKBlZuDDlUXdkPVC2KBx/W4Hvj6C9Wqa5nh6yC6AAAAAElFTkSuQmCC" 
            alt="clipboard"
            />
          </div>

          <h3>Simulados</h3>

          <p>
            Selecione o ano e o dia de provado ENEM e tenha a possibilidade de
            realizar simulados focados na experiência real da prova, com
            cronometragem de tempo.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--purple">
            📝
          </div>

          <h3>Responda questões</h3>

          <p>
            Há também a possibilidade de responder questões sem precisar
            realizar simulados. Para esses casos, basta apenas selecionar os
            tipos de questões desejadas e responder de acordo. Há cronometragem
            de tempo por questão
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--orange">
            🥇🥈🏅
          </div>

          <h3>Ranking Semanal</h3>

          <p>
            Contamos com um sistema de ranking semanal para motivar os
            estudantes. Os alunos que mais possuírem acertos serão exibidos no
            ranking.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--teal">📊</div>

          <h3>Desempenho pessoal</h3>

          <p>
            Há também análise de desempenho pessoal para ajudar o estudante a
            focar naquilo que está prejudicando suas provas.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--red">🗄️</div>

          <h3>Banco de questões</h3>

          <p>
            Temos acesso a todas as questões de provas anteriores do ENEM para
            que os estudantes possam realizar simulados e responder questçies.
            Utilizamo a API externa API ENEM (enem.dev).
          </p>
        </div>
      </div>
    </section>
  );
}
