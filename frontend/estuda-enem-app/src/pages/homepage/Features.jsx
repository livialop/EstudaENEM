import React from "react";

export default function Features() {
  return (
    <section className="features" id="recursos">
      <div className="features__grid">
        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--blue">
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQUlEQVR4nO2av08UQRTHN2iBO3OaSGxMtLA1YGFjxEbEGGMQLPAXicrNuytsLDTRaHGWYGECaGEiFrY2/BG2amU0JkQTEuWUqNx7e3gKjHm7hwfcLjd7d7Ph1JdMcbt7M5/vm/dmZmfWcf7bX2xumm4IhdedVjQBeEEqXJKAy66iy04rmQDskQp/SCDtF4U/XaATzmaw9mxxrwCclkBjIoO9Tk5vXX3fBe+gACr8ga+I8FLgHVpTWU63+c8rvCuAXrdfKe6xLkBk8PxaMMoLwEkJXr/IYqcEmq2Cr5TZ4Bmv3/+Povzq+1y3dQFS0YMNABstEwkIwFf2BOBLq/Ad6S8pCbhoUcDizqG57dYECIXHLYaPLudBrxXPM7xQOGVdgMIpbovbrBt4W9rbnVJen1A4IoCeS8CSbXAZEk48tArARy7QJQG431iAAHqbPDDV6Bl6E0MAjiYN2HW7WCu0RowFSFXoThL+1P2inv66pHNTpchnUpn5w8YCeIqXgJ+ShJ8pBCVUhKK8M6i3mAsIwmjSNvzAWFG//1aB58K/u+6sDSeh8LET11IZ73SSnp8pw7OoqvBRXl9sAeWFmRX4M+MLoZ4fCIH3eyCLnbHgeYlbY1WZGLwMyiwzmXkesEcAzW8ieO33AiC5GTpZC34ozqxba+w2SdgBA/hKwZJQeDEcPoPXgndYs8puPSsZAzTieVktYlkC3WxIAMObgjQXnqIFmIYQj9GmQBbgS5EhFCeJw8bwD9+X9NmHC9bghUkSxxlGNxLRfM+T+TAaZyKLGlnCrrGoOuF17ImMjbc+TCoP64kmel5z4WVNbAEC8IlpA1EimgEvg/ifjEfvL6fjLSXWi2gWvKxnOS2zhSP1NLQioqnwsCKi0G0ePgrv1dsQJ2sjCSujw2i01V/q37X0tsqO4YV9zj+zsRVlvO1nXUAajzm2bNfVvJQKf9kMmw4bnl9tvAVuTYDCF1bhAwE0YU8AjSd+xCSA5iTgU6lw0B2mAxttiAmgz0JhVzmXxqTCj+sS+Jx1AXwQx/OEv3/Ks2NOt5kc8vG1qiVxTrdxHVwX15nIIZ+JiTQe3bTHrLFCrVUPuleMPzNo2U8N/ptjZr8Bl4ZhvhFFGtQAAAAASUVORK5CYII=" 
            alt="verified-badge"/>
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVR4nO3XPU4DMRAFYEtpsvETFyCIK1BxApDgAOkRnkDNBRA1h+AUKBRwBE4RWpCQZjatUfiRKEAhu97ExO9J01nr8VeMZp1jmJVnMLZjiD14sRcv9oxg94NgR66E+KBXEIs/VrBLt8nxQQ9/ffxnzc+4XIMFzc/rr2e96G11Xm9XUg8RdJLqu9/PZg1QST38Ots/me0QQAoDQNDJHOHj8XpXHoAsV1kCuJZYTQDa9tUqWKapoE/pAHSaqq9WwRIXvW97SRB0umhLzBJglSGAECASQAgQCSAEiAQQAsS1XoTE/wBN7iRAVwEBjDMABDACgADWyRDssq8kAQGMAOAMMAKAAEYA8F/ACOAIkEcIIASIBJBMALCCodekryQBAYwA4AwwAiAjgK1Q75cFMIq9/uls14/1wAe99sFeywG4iFWqwfkvAQZie0UDQOqzcgFGsQfRxyIBKqmHXvQm5fLUKEi85XVVBOgqyOBxBJA1AjAMw7gNyxtdSAjYlq2HIwAAAABJRU5ErkJggg==" 
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
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR4nO2XPYsUQRCGG0GDrZo79JBLzfQQI0FEzRT/gGx0XjJVO8IF/gUzPwIjhcsMjdULxUBFTUQ0UlDMFPzgYOet8RK9kV5dVkHX3Z3ZnZmzHyhomK96Zrqra5wLBAKBQCBQAu18FymusOA9q+XjBd6R4pK/h6saElweX+D3IMXFqj2cf6s+majTPTb2tZIe73+Z6WQ3Bv23WtX1pfHfiJDg/LDjtReZP7e5jwRPWPCt0SLRSneBNUtI7X6jRfqQYG02Iu0iG9ogKhehMjY0sQeVi3CBDW0UZihiU11s20bkXxSb1hg0ncNEqINTpPaKFZus9mJOsiOuZEjsYSlNJw8TEXtDgkekOEiCt6R47GoE/9p0DhfBGimWf47XSe21qxncz3+UNUIJDpHCWOyqa6oIJ+kJEttgsXsuyVuzSpAEi/6ZLPhCYi9bsZ2eWCTS7CiJYdYSHt9tkNpHlnTpR0HAczepCIvd7R0XUxa0fbgZQTFOcic90xsr7vjqObFI72uM2FNNgz3Ln+dY7KZfn63YVgov9qpYiD9FvsCwICPB7UaKsKRLnKQH/JgUN3yOu5ON+caJkGCdFc/chXwHCW756eWSfGfjRNiXfbWuL7+s+MqddPWP59VdxLN4Nqco7u7fu/qB3V9ohMgobF+RlmaHmxg8EMFW0f+B6gNbvg25zoqnzQ67VvUUDwQCgUDA1YHvdYHjsTUKIcwAAAAASUVORK5CYII=" 
            alt="leaderboard"/>
          </div>

          <h3>Ranking Semanal</h3>

          <p>
            Contamos com um sistema de ranking semanal para motivar os
            estudantes. Os alunos que mais possuírem acertos serão exibidos no
            ranking.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--teal">
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR4nO2asUoDQRCGl6TL7abRN9DWVpNGsNQgNqa0uZ0cdoYgWAbxOXwNxbewUt/CmNkLKRJXBhOLEM2tchCX/4Mt53bm4+64m1mlAAAAAAAAWFvM2dtGreMOteX20kXD0yTjHRUjOh3uJ+ReNTm/aiXEtyo2NPFjkeK/JKR8oGJCE0+CBHT4QsWEDih+9hj0VExoCHAQoCHArZGAtq+a1LVqqbvU5K6Wr/y8bgfb8Qlo+6omfiiUjOWxpvwkKgEmda2gZKx7jkpAQtwNS4jfYxPQC03or3tCAEGAhwCKRIChvDF7kS79fpA/OZPle1EKSCzfBBRxHZUAnQ03teVp4TjLU2mDRSPAUN4IjZOYeASko2awgHTUhAAFAQoCCAI8BBAEeAggCPAQQBDgIYAgwEMAQYCHAIIADwH0T0Zj5jctsVl3WK4RKKBbmoCadUdhybinXzVFiSfzpmhC7iVkTzlPWJoA1fcVTXxfKBnLY2Pz43motLoDCunP42TE/jlqL7TnneRYngCh7ytyJ6w8IJENttQCclvL8OOnwUjd5ruLcXLYQq75XZzkIjmVXzwAAAAAAAAqFj4Awl0K/5EyHIYAAAAASUVORK5CYII=" 
            alt="bar-chart"/>
          </div>

          <h3>Desempenho pessoal</h3>

          <p>
            Há também análise de desempenho pessoal para ajudar o estudante a
            focar naquilo que está prejudicando suas provas.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-card__icon feature-card__icon--red">
            <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUElEQVR4nO1az08TURB+TTSpzisreAY94c8/QMGDMV78AxSNMWBnWmzw4lmNNzGERL2pB+PRn4mpHkwEiaB/Awkn40ElEqQ7rxU0sma2W0pB7S5s243ZL9lku515M7P73vu+t2+V2iQ02vuA+IxGc1UTPwAy7wDNjCb+CGjmNfJPOdzz8rUZQDMltuLj+mbtvarZSJ0r7NRo5wDNE03miybjhHRIW481FS9IjIYVsD1jTgCZZ5p4qSYBNLOA/ByQRzQVs0B8TO5wMl3aZeUW2lXW2SqHnMs1+c+1EVvkEfGVNmqL4iWJJTFDKyCVLh2W7lJNnH9pNK/lzunz9v5wojgJaUujndNkxtwYXjyJLTlsvO1LzjZAvqeJl70G5zSZK8mBUqdqMJIDpc7y+HFjOl4Ot9U1Z0ughjrOzrWtPAXkRSC+3p6dt1STYfV/2wHEwyvdGfmV5ObT3UkA8ctK/9do96oWQ2ftI5VxBMgvJMe6TpDh02UHwykqdKuIIEWFbsmp3M35VF0HTWai/DTsnIoYgHjI6ynjPoxNQYylf6qIwcottHu9ZaGucWXai2IhbbjQUcmvrnF1/uYhFTEA8sXghUR4sOsghXjFfAXko6rFSGUKPWt1XV2nVcZjVd3Dw60YM5YQIvKNKiGKNApYiMgBjebWKs0zJ7IhmS11NbqAZLbUVStR3CJuujkFLqTyG+1eQH6/RjSOy2QAxAd8sWxdOAlI80GPJ96sE42ZQs/f8vNdSI2MR/NUtNe6cUSc12RGRRFDho+LkrUGv+9eK+PlmhTv2oh6JjMqvtJG7dKAFyXWn2T8pgupmcuxOKjRPNLEn0NbWCF/0mQeyjpFYmw0v+CGHlLpwh5Xn6G5DMT3Ac0koJnWxB+8pe4PObylrlybBjJvxdb1Qe4LMs3roIXEzN5AQMzsGDN7KLBiZlcxs+djZqeY2f+NmNmbAIiZHWNmDwVWzOwqZvZ8zOzUIGaHgG/jm8nsbR4h+n0bPxF5QkQ/+yPIfZEnROSTPlychOzTeZXPyv6ditIeInHe90zp7uq6n1lEixABzWSAXd1V++zEd2v22VtGiLwMxHdUv5MM+8uH5hEimqkUFQ+psBAVQgwNrSbEhqHZS131v+M3FK99GuFfvdcAAAAASUVORK5CYII=" 
            alt="database--v1"/>
          </div>

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
