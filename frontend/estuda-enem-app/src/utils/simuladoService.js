const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

/**
 * GET /simulado  ->  list[QuestaoResponse]
 * Filtros opcionais: prova_id, disciplina, idioma
 */
export async function buscarQuestoes({ provaId, disciplina, idioma } = {}) {
  const params = new URLSearchParams();
  if (provaId) params.set("prova_id", provaId);
  if (disciplina) params.set("disciplina", disciplina);
  if (idioma) params.set("idioma", idioma);

  const query = params.toString();
  const resposta = await fetch(`${API_URL}/simulado${query ? `?${query}` : ""}`);

  if (!resposta.ok) {
    throw new Error("Não foi possível carregar as questões.");
  }
  return resposta.json();
}