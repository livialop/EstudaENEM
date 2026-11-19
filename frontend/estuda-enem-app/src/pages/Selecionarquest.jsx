import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./areausuario/AuthContext";
import TopBar from "./areainicial/TopBar";
import Sidebar from "./areainicial/Sidebar";
import SelectHeader from "./selecionarquest/SelectHeader";
import YearSelect from "./selecionarquest/YearSelect";
import AreaGrid from "./selecionarquest/AreaGrid";
import GoToQuestions from "./selecionarquest/GoToQuestions";
import { AREAS, ANOS } from "./selecionarquest/areas";
import { buscarQuestoes } from "../utils/simuladoService";
import "../styles/AreaInicial.css";
import "../styles/Selecionarquest.css";

export default function Selecionarquest() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const [provaId, setProvaId] = useState("");
  const [areaId, setAreaId] = useState(null);
  const [questoes, setQuestoes] = useState([]);
  const [erro, setErro] = useState("");

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  // Recarrega as questões pelo ID interno da prova escolhida.
  useEffect(() => {
    let cancelado = false;
    setErro("");

    buscarQuestoes({ provaId: provaId || undefined })
      .then((dados) => !cancelado && setQuestoes(dados))
      .catch((e) => !cancelado && setErro(e.message));

    return () => {
      cancelado = true;
    };
  }, [provaId]);

  // { linguagens: 1248, humanas: 1132, ..., todas: 4571 }
  const totais = useMemo(() => {
    const resultado = {};
    AREAS.forEach((area) => {
      resultado[area.id] = area.disciplina
        ? questoes.filter((q) => q.disciplina === area.disciplina).length
        : questoes.length;
    });
    return resultado;
  }, [questoes]);

  function handleIrParaQuestoes() {
    const prova = ANOS.find((item) => String(item.value) === String(provaId));
    const area = AREAS.find((item) => item.id === areaId);

    if (!prova || !area) return;

    const params = new URLSearchParams();
    params.set("prova_id", String(prova.value));
    params.set("ano", String(prova.ano));

    if (area.disciplina) {
      params.set("disciplina", area.disciplina);
    } else {
      params.set("disciplina", "todas");
    }

    navigate(`/questoes/resolver?${params.toString()}`);
  }

  return (
    <div className="dash-app">
      <TopBar />

      <div className="dash-body">
        <Sidebar onSair={handleLogout} />

        <main className="dash-main">
          <div className="dash-card sel-panel">
            <SelectHeader />

            <div className="sel-body">
              <YearSelect anos={ANOS} value={provaId} onChange={setProvaId} />

              <AreaGrid
                areas={AREAS}
                totais={erro ? {} : totais}
                selecionada={areaId}
                onSelect={setAreaId}
              />

              {erro && (
                <p className="sel-error" role="alert">
                  {erro}
                </p>
              )}

              <GoToQuestions
                disabled={!provaId || !areaId}
                onClick={handleIrParaQuestoes}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}