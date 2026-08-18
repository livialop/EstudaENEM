# Requisitos EstudaENEM

# Requisitos Funcionais

### RF01 — Apresentar a Homepage

**Descrição:**
O sistema deve disponibilizar uma página inicial de apresentação do EstudaENEM para usuários não autenticados.

**A página deve apresentar:**

* apresentação do EstudaENEM;
* informações sobre a finalidade da plataforma;
* funcionalidades oferecidas pelo sistema;
* destaque para o banco de questões;
* destaque para o acompanhamento de desempenho;
* destaque para o ranking semanal;
* botões de acesso às páginas de cadastro e login;
* botão de acesso à página "Sobre nós".

**Pré-condição:**
Nenhuma. A página deve ser acessível sem autenticação.

---

### RF02 — Acessar a página "Sobre Nós"

**Descrição:**
O sistema deve permitir que usuários acessem uma página contendo informações sobre o EstudaENEM, a equipe desenvolvedora e sua proposta.

**Pré-condição:**
Nenhuma.

---

### RF03 — Realizar cadastro

**Descrição:**
O sistema deve permitir que novos usuários criem uma conta na plataforma.

**Dados necessários:**

* nome completo;
* e-mail;
* senha;
* confirmação de senha.

**Regras:**

* o e-mail deve ser único no sistema;
* a senha e a confirmação de senha devem ser iguais;
* todos os campos obrigatórios devem ser preenchidos;
* o sistema deve informar o usuário caso algum dado seja inválido;
* o sistema deve impedir o cadastro de um e-mail já utilizado.

**Pós-condição:**
Após um cadastro realizado com sucesso, o usuário poderá realizar login na plataforma.

---

### RF04 — Realizar login

**Descrição:**
O sistema deve permitir que usuários cadastrados acessem suas contas.

**Dados necessários:**

* e-mail;
* senha.

**Regras:**

* o sistema deve verificar se o e-mail está cadastrado;
* o sistema deve verificar se a senha corresponde à conta;
* o sistema deve informar o usuário caso as credenciais sejam inválidas.

**Pós-condição:**
Após autenticação bem-sucedida, o usuário deve ser redirecionado para a **Área Inicial**.

---

### RF05 — Controlar acesso de usuários autenticados

**Descrição:**
O sistema deve controlar o acesso às funcionalidades que exigem autenticação.

**Regras:**

* páginas públicas, como Homepage, Cadastro, Login e Sobre Nós, devem estar disponíveis sem autenticação;
* páginas internas, como Área Inicial, Questões, Simulados e Área do Usuário, devem exigir autenticação;
* usuários não autenticados que tentarem acessar uma página restrita devem ser redirecionados para a página de login;
* usuários autenticados devem ter acesso à Área Inicial e às demais funcionalidades permitidas.

---

### RF06 — Navegar pela Área Inicial

**Descrição:**
Após realizar o login, o usuário deve ser direcionado para a Área Inicial.

A Área Inicial deve possuir uma sidebar contendo as opções:

* **Início**
* **Questões**
* **Simulado**
* **Área do Usuário**

O conteúdo principal deve apresentar:

* seção "O que fazer agora";
* atalhos para resolução de questões;
* atalho para realização de simulados;
* ranking semanal;
* seção "Jornada até a aprovação".

A seção "Jornada até a aprovação" deve apresentar textos motivacionais relacionados à preparação para o ENEM.

---

### RF07 — Acessar o banco de questões

**Descrição:**
O sistema deve permitir que usuários autenticados acessem um banco de questões de provas anteriores do ENEM.

As questões devem poder ser organizadas por **área de conhecimento**.

As áreas de conhecimento devem contemplar:

* Linguagens, Códigos e suas Tecnologias;
* Ciências Humanas e suas Tecnologias;
* Ciências da Natureza e suas Tecnologias;
* Matemática e suas Tecnologias.

**Regras:**

* o usuário deve poder selecionar uma área de conhecimento;
* o sistema deve apresentar questões correspondentes à seleção realizada;
* cada questão deve possuir suas respectivas alternativas;
* o usuário deve poder responder às questões.

---

### RF08 — Apresentar questões

**Descrição:**
O sistema deve apresentar ao usuário uma questão do ENEM contendo:

* enunciado;
* alternativas de resposta;
* identificação da questão;
* informações referentes ao ano da prova;
* área de conhecimento correspondente.

O usuário deve poder selecionar uma alternativa como resposta.

---

### RF09 — Registrar resposta de questão

**Descrição:**
O sistema deve registrar a resposta selecionada pelo usuário para cada questão respondida.

**Regras:**

* o sistema deve comparar a resposta selecionada com a alternativa correta;
* o sistema deve identificar se o usuário acertou ou errou;
* o resultado deve ser associado ao usuário e à questão;
* o resultado deve ser utilizado posteriormente para cálculo do desempenho.

---

### RF10 — Indicar visualmente o resultado da questão

**Descrição:**
Durante a resolução de questões ou simulados, o sistema deve indicar visualmente o resultado de cada questão respondida.

**Regras:**

* questões respondidas corretamente devem ser identificadas pela cor **verde**;
* questões respondidas incorretamente devem ser identificadas pela cor **vermelha**;
* questões ainda não respondidas devem permanecer sem indicação de acerto ou erro.

---

### RF11 — Selecionar um simulado

**Descrição:**
O sistema deve disponibilizar uma página para seleção de simulados.

A página deve apresentar os simulados disponíveis para realização.

Os simulados devem poder representar uma determinada edição e dia do ENEM, por exemplo:

> ENEM 2020 — Dia 1

A página deve manter a sidebar contendo:

* Início;
* Questões;
* Simulado;
* Área do Usuário.

**Pré-condição:**
O usuário deve estar autenticado.

---

### RF12 — Iniciar um simulado

**Descrição:**
O sistema deve permitir que o usuário selecione um simulado e inicie sua realização.

Ao iniciar o simulado, o sistema deve carregar as questões correspondentes à prova selecionada.

**Pré-condição:**
O usuário deve ter selecionado um simulado disponível.

**Pós-condição:**
O sistema deve iniciar o cronômetro referente à realização do simulado.

---

### RF13 — Cronometrar o tempo do simulado

**Descrição:**
O sistema deve disponibilizar um temporizador durante a realização do simulado.

O temporizador deve:

* iniciar quando o usuário começar o simulado;
* contabilizar o tempo utilizado pelo usuário;
* permanecer visível na sidebar;
* permitir que o usuário acompanhe o tempo de realização.

O número de questões do simulado também deve ser apresentado na sidebar.

---

### RF14 — Navegar entre questões do simulado

**Descrição:**
O sistema deve permitir que o usuário navegue entre as questões do simulado.

A sidebar deve apresentar a identificação das questões disponíveis.

O usuário deve poder visualizar uma questão específica e registrar sua resposta.

Após responder uma questão, sua identificação deve apresentar o resultado correspondente:

* **verde:** questão acertada;
* **vermelho:** questão errada.

---

### RF15 — Finalizar simulado

**Descrição:**
O sistema deve permitir que o usuário finalize a realização de um simulado.

Ao finalizar, o sistema deve encerrar a contagem do tempo e registrar os resultados obtidos.

O sistema deve contabilizar, no mínimo:

* quantidade de questões respondidas;
* quantidade de acertos;
* quantidade de erros;
* tempo utilizado.

---

### RF16 — Registrar desempenho do usuário

**Descrição:**
O sistema deve armazenar os resultados obtidos pelo usuário durante a resolução das questões e simulados.

O sistema deve utilizar os resultados registrados para calcular informações de desempenho.

Devem ser considerados, no mínimo:

* quantidade total de questões respondidas;
* quantidade de acertos;
* quantidade de erros;
* desempenho em questões;
* desempenho em simulados.

---

### RF17 — Apresentar dados de desempenho na Área do Usuário

**Descrição:**
A Área do Usuário deve apresentar informações sobre o desempenho do estudante.

O sistema deve apresentar, no mínimo:

* quantidade de questões respondidas;
* quantidade de questões acertadas;
* quantidade de questões erradas.

Essas informações devem ser atualizadas conforme o usuário realiza novas questões e simulados.

---

### RF18 — Acessar a Área do Usuário

**Descrição:**
O sistema deve disponibilizar uma página de perfil para cada usuário autenticado.

A página deve apresentar:

* foto do usuário;
* nome;
* e-mail;
* informações pessoais;
* estatísticas de desempenho.

---

### RF19 — Alterar dados pessoais

**Descrição:**
O sistema deve permitir que o usuário altere determinadas informações de seu perfil.

O usuário poderá alterar:

* nome;
* foto do usuário, caso a funcionalidade esteja disponível.

O e-mail cadastrado não poderá ser alterado pelo usuário por meio da Área do Usuário.

**Regra:**
O sistema deve preservar o e-mail originalmente associado à conta.

---

### RF20 — Apresentar ranking semanal

**Descrição:**
O sistema deve disponibilizar um ranking semanal entre os usuários da plataforma.

O ranking deve apresentar os usuários de acordo com um critério de desempenho definido pelo sistema.

O ranking deve ser atualizado conforme os usuários realizam atividades na plataforma.

O ranking deve estar disponível:

* na Área Inicial;
* em local específico definido posteriormente para consulta do ranking, caso necessário.

---

### RF21 — Atualizar o ranking semanal

**Descrição:**
O sistema deve atualizar periodicamente os dados utilizados para o ranking semanal.

Ao iniciar um novo período semanal, o sistema deve iniciar uma nova classificação correspondente àquela semana.

Os resultados das semanas anteriores devem ser preservados caso o sistema implemente um histórico de rankings.

---

### RF22 — Inativar conta

**Descrição:**
O sistema deve permitir que o usuário autenticado inative sua conta.

Ao realizar a inativação:

* a conta passará a ficar inativa;
* o usuário deve ser redirecionado para uma página pública, preferencialmente a Homepage;
* o usuário não poderá mais acessar a sua conta.

---

### RF23 — Encerrar sessão

Descrição:
O sistema deve permitir que o usuário autenticado encerre sua sessão.

Ao realizar o logout:

a sessão autenticada deve ser encerrada;
o usuário deve ser redirecionado para uma página pública, preferencialmente a Homepage;
páginas restritas não devem continuar acessíveis sem nova autenticação.

---
