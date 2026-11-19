import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

// Reaproveita tokens (:root) e a navbar da página de simulados.
import "../styles/Simulado.css";
import "../styles/ResolverQuestoes.css";

import NavBar from "../components/NavBar";
import PainelProva from "./resolverquestoes/PainelProva";
import ProgressoProva from "./resolverquestoes/ProgressoProva";
import NavegadorBloco from "./resolverquestoes/NavegadorBloco";
import CartaoQuestao from "./resolverquestoes/CartaoQuestao";
import ResumoBloco from "./resolverquestoes/ResumoBloco";
import ResultadoFinal from "./resolverquestoes/ResultadoFinal";
import EstadoMensagem from "./resolverquestoes/EstadoMensagem";

import { rotuloArea } from "./resolverquestoes/constantes";
import { TAMANHO_BLOCO, useSessaoQuestoes } from "./resolverquestoes/UseSessaoQuestoes";

import { useAuth } from "./areausuario/AuthContext";

export default function ResolverQuestoes() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const provaId = params.get("prova_id");
  const ano = params.get("ano");
  const disciplinaParam = params.get("disciplina");
  // "todas" (ou ausente) = não filtra por disciplina
  const disciplina = !disciplinaParam || disciplinaParam === "todas" ? null : disciplinaParam;

  const temFiltroDeProva = Boolean(provaId || ano);

  const sessao = useSessaoQuestoes({
    provaId,
    ano,
    disciplina,
    habilitado: isAuthenticated && temFiltroDeProva,
  });

  if (isLoading) {
    return <div style={{ padding: 24, textAlign: "center" }}>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Sem prova escolhida não há o que resolver: volta para a seleção.
  if (!temFiltroDeProva) {
    return <Navigate to="/selecionarquest" replace />;
  }

  const irParaSelecao = () => navigate("/selecionarquest");
  const irParaInicio = () => navigate("/areainicial");

  function abandonar() {
    if (window.confirm("Deseja abandonar a prova? Seu progresso será perdido.")) {
      irParaSelecao();
    }
  }

  function renderPrincipal() {
    if (sessao.status === "carregando") {
      return <EstadoMensagem tipo="carregando" />;
    }

    if (sessao.status === "erro") {
      return (
        <EstadoMensagem
          tipo="erro"
          mensagem={sessao.erro}
          onTentarNovamente={sessao.recarregar}
          onVoltar={irParaSelecao}
        />
      );
    }

    if (sessao.status === "vazio") {
      return <EstadoMensagem tipo="vazio" onVoltar={irParaSelecao} />;
    }

    if (sessao.fase === "final") {
      return (
        <ResultadoFinal
          estatisticas={sessao.estatisticasFinal}
          questoes={sessao.questoesVistas}
          respostas={sessao.respostas}
          onTentarNovamente={sessao.tentarNovamente}
          onNovaSelecao={irParaSelecao}
          onVoltarInicio={irParaInicio}
        />
      );
    }

    if (sessao.fase === "resumoBloco") {
      return (
        <ResumoBloco
          numeroBloco={sessao.bloco + 1}
          totalBlocos={sessao.totalBlocos}
          estatisticas={sessao.estatisticasBloco}
          temProximoBloco={sessao.temProximoBloco}
          tamanhoBloco={TAMANHO_BLOCO}
          onContinuar={sessao.continuarBloco}
          onRevisar={sessao.revisarBloco}
          onFinalizar={sessao.finalizar}
        />
      );
    }

    const { questao } = sessao;

    return (
      <CartaoQuestao
        questao={questao}
        numeroExibido={questao.numero ?? sessao.posicao}
        ano={ano}
        rascunho={sessao.rascunhos[questao.id]}
        resposta={sessao.respostas[questao.id]}
        marcada={Boolean(sessao.marcadas[questao.id])}
        ehPrimeira={sessao.atual === 0}
        ehUltima={sessao.atual === sessao.questoesBloco.length - 1}
        onSelecionar={sessao.selecionar}
        onConfirmar={sessao.confirmar}
        onAnterior={sessao.anterior}
        onProxima={sessao.proxima}
        onMarcar={sessao.alternarMarcacao}
      />
    );
  }

  const mostrarLateral = sessao.status === "pronto" && sessao.fase === "questao";

  return (
    <>
      <NavBar />

      <div className={`rq-layout${mostrarLateral ? "" : " rq-layout--sem-lateral"}`}>
        {mostrarLateral && (
          <aside className="rq-lateral">
            <PainelProva
              titulo={`Questões ENEM${ano ? ` ${ano}` : ""}`}
              area={rotuloArea(disciplina)}
              posicao={sessao.posicao}
              total={sessao.pool.length}
              bloco={sessao.bloco + 1}
              totalBlocos={sessao.totalBlocos}
              onAbandonar={abandonar}
            />

            <ProgressoProva respondidas={sessao.respondidas} total={sessao.pool.length} />

            <NavegadorBloco
              questoes={sessao.questoesBloco}
              atual={sessao.atual}
              respostas={sessao.respostas}
              marcadas={sessao.marcadas}
              onIrPara={sessao.irPara}
            />

            <button type="button" className="rq-sair" onClick={logout}>
              <span aria-hidden="true">⎋</span> Sair
            </button>
          </aside>
        )}

        <main className="rq-principal">{renderPrincipal()}</main>
      </div>
    </>
  );
}