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
 * value = id interno da tabela provas
 * ano = ano exibido e enviado separadamente para a interface
 */
export const ANOS = [
  { value: 1, ano: 2023, label: "2023" },
  { value: 2, ano: 2022, label: "2022" },
  { value: 3, ano: 2021, label: "2021" },
  { value: 4, ano: 2020, label: "2020" },
  { value: 5, ano: 2019, label: "2019" },
  { value: 6, ano: 2018, label: "2018" },
  { value: 7, ano: 2017, label: "2017" },
  { value: 8, ano: 2016, label: "2016" },
  { value: 9, ano: 2015, label: "2015" },
  { value: 10, ano: 2014, label: "2014" },
  { value: 11, ano: 2013, label: "2013" },
  { value: 12, ano: 2012, label: "2012" },
  { value: 13, ano: 2011, label: "2011" },
  { value: 14, ano: 2010, label: "2010" },
  { value: 15, ano: 2009, label: "2009" },
];