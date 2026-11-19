const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

/**
 * GET /simulado  ->  list[QuestaoResponse]
 * Filtros opcionais: prova_id, ano, disciplina, idioma
 */
export async function buscarQuestoes({
  provaId,
  ano,
  disciplina,
  idioma,
  signal,
} = {}) {
  const params = new URLSearchParams();

  if (provaId) params.set("prova_id", provaId);
  if (ano) params.set("ano", ano);
  if (disciplina) params.set("disciplina", disciplina);
  if (idioma) params.set("idioma", idioma);

  const query = params.toString();
  const resposta = await fetch(`${API_URL}/simulado${query ? `?${query}` : ""}`, {
    signal,
  });

  if (!resposta.ok) {
    throw new Error("Não foi possível carregar as questões.");
  }

  return resposta.json();
}