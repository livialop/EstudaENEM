import { useCallback, useEffect, useMemo, useState } from "react";
import { buscarQuestoes } from "../../utils/simuladoService";

export const TAMANHO_BLOCO = 5;

// Fisher-Yates
export function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function letraCorreta(questao) {
  return (
    questao?.alternativa_correta?.letra ??
    questao?.alternativas?.find((alt) => alt.correta)?.letra ??
    null
  );
}

export function calcularEstatisticas(questoes, respostas) {
  let acertos = 0;
  let erros = 0;

  questoes.forEach((questao) => {
    const escolhida = respostas[questao.id];
    if (!escolhida) return;
    if (escolhida === letraCorreta(questao)) acertos += 1;
    else erros += 1;
  });

  const total = questoes.length;
  return {
    total,
    acertos,
    erros,
    emBranco: total - acertos - erros,
    percentual: total ? Math.round((acertos / total) * 100) : 0,
  };
}

/**
 * Estado completo da sessão de prática:
 * busca UMA vez, embaralha, e entrega as questões em blocos de 5.
 */
export function useSessaoQuestoes({ provaId, ano, disciplina, habilitado = true }) {
  const [status, setStatus] = useState("carregando"); // carregando | erro | vazio | pronto
  const [erro, setErro] = useState("");
  const [todas, setTodas] = useState([]);
  const [pool, setPool] = useState([]);
  const [tentativa, setTentativa] = useState(0);

  const [fase, setFase] = useState("questao"); // questao | resumoBloco | final
  const [bloco, setBloco] = useState(0);
  const [atual, setAtual] = useState(0);
  const [rascunhos, setRascunhos] = useState({}); // alternativa clicada, ainda não confirmada
  const [respostas, setRespostas] = useState({}); // alternativa confirmada
  const [marcadas, setMarcadas] = useState({});

  const zerarProgresso = useCallback(() => {
    setFase("questao");
    setBloco(0);
    setAtual(0);
    setRascunhos({});
    setRespostas({});
    setMarcadas({});
  }, []);

  useEffect(() => {
    if (!habilitado) return undefined;

    const controlador = new AbortController();
    setStatus("carregando");
    setErro("");

    buscarQuestoes({ provaId, ano, disciplina, signal: controlador.signal })
      .then((dados) => {
        const lista = Array.isArray(dados) ? dados : [];

        const validas = lista.filter(
          (q) => Array.isArray(q.alternativas) && q.alternativas.length > 0
        );
        // sem repetição
        const unicas = Array.from(new Map(validas.map((q) => [q.id, q])).values());
        const filtradas = disciplina
          ? unicas.filter((q) => q.disciplina === disciplina)
          : unicas;

        setTodas(filtradas);
        setPool(embaralhar(filtradas));
        zerarProgresso();
        setStatus(filtradas.length ? "pronto" : "vazio");
      })
      .catch((e) => {
        if (e.name === "AbortError") return;
        setErro(e.message || "Erro inesperado ao carregar as questões.");
        setStatus("erro");
      });

    return () => controlador.abort();
  }, [provaId, ano, disciplina, habilitado, tentativa, zerarProgresso]);

  const questoesBloco = useMemo(
    () => pool.slice(bloco * TAMANHO_BLOCO, (bloco + 1) * TAMANHO_BLOCO),
    [pool, bloco]
  );
  const questoesVistas = useMemo(
    () => pool.slice(0, (bloco + 1) * TAMANHO_BLOCO),
    [pool, bloco]
  );

  const questao = questoesBloco[atual] ?? null;
  const totalBlocos = Math.ceil(pool.length / TAMANHO_BLOCO);
  const temProximoBloco = bloco < totalBlocos - 1;
  const posicao = bloco * TAMANHO_BLOCO + atual + 1;

  const estatisticasBloco = useMemo(
    () => calcularEstatisticas(questoesBloco, respostas),
    [questoesBloco, respostas]
  );
  const estatisticasFinal = useMemo(
    () => calcularEstatisticas(questoesVistas, respostas),
    [questoesVistas, respostas]
  );

  const selecionar = useCallback(
    (letra) => {
      if (!questao || respostas[questao.id]) return;
      setRascunhos((prev) => ({ ...prev, [questao.id]: letra }));
    },
    [questao, respostas]
  );

  const confirmar = useCallback(() => {
    if (!questao) return;
    const letra = rascunhos[questao.id];
    if (!letra || respostas[questao.id]) return;
    setRespostas((prev) => ({ ...prev, [questao.id]: letra }));
  }, [questao, rascunhos, respostas]);

  const alternarMarcacao = useCallback(() => {
    if (!questao) return;
    setMarcadas((prev) => ({ ...prev, [questao.id]: !prev[questao.id] }));
  }, [questao]);

  const anterior = useCallback(() => setAtual((a) => Math.max(0, a - 1)), []);

  const proxima = useCallback(() => {
    if (atual < questoesBloco.length - 1) setAtual(atual + 1);
    else setFase("resumoBloco");
  }, [atual, questoesBloco.length]);

  const irPara = useCallback((indice) => setAtual(indice), []);

  const continuarBloco = useCallback(() => {
    setBloco((b) => b + 1);
    setAtual(0);
    setFase("questao");
  }, []);

  const revisarBloco = useCallback(() => {
    setAtual(0);
    setFase("questao");
  }, []);

  const finalizar = useCallback(() => setFase("final"), []);

  const tentarNovamente = useCallback(() => {
    setPool(embaralhar(todas));
    zerarProgresso();
  }, [todas, zerarProgresso]);

  const recarregar = useCallback(() => setTentativa((t) => t + 1), []);

  return {
    status,
    erro,
    fase,
    pool,
    bloco,
    totalBlocos,
    temProximoBloco,
    atual,
    posicao,
    questao,
    questoesBloco,
    questoesVistas,
    rascunhos,
    respostas,
    marcadas,
    respondidas: Object.keys(respostas).length,
    estatisticasBloco,
    estatisticasFinal,
    selecionar,
    confirmar,
    alternarMarcacao,
    anterior,
    proxima,
    irPara,
    continuarBloco,
    revisarBloco,
    finalizar,
    tentarNovamente,
    recarregar,
  };
}