import { MessageCircle, Globe, FlaskConical, Calculator, Star } from "lucide-react";

/**
 * `disciplina` precisa ser igual ao valor salvo na coluna `disciplina`
 * do banco. `null` = todas as áreas.
 */
export const AREAS = [
  {
    id: "linguagens",
    disciplina: "linguagens",
    titulo: "Linguagens, Códigos e suas Tecnologias",
    Icon: MessageCircle,
    tone: "blue",
  },
  {
    id: "humanas",
    disciplina: "ciencias-humanas",
    titulo: "Ciências Humanas e suas Tecnologias",
    Icon: Globe,
    tone: "green",
  },
  {
    id: "natureza",
    disciplina: "ciencias-natureza",
    titulo: "Ciências da Natureza e suas Tecnologias",
    Icon: FlaskConical,
    tone: "purple",
  },
  {
    id: "matematica",
    disciplina: "matematica",
    titulo: "Matemática e suas Tecnologias",
    Icon: Calculator,
    tone: "orange",
  },
  {
    id: "todas",
    disciplina: null,
    titulo: "Todas as áreas",
    Icon: Star,
    tone: "yellow",
  },
];

/**
 * `value` = prova_id no banco, `label` = ano exibido.
 * Ajuste os ids conforme a tabela de provas.
 */
export const ANOS = [
  { value: 2023, label: "2023" },
  { value: 2022, label: "2022" },
  { value: 2021, label: "2021" },
  { value: 2020, label: "2020" },
  { value: 2019, label: "2019" },
];