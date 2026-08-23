import "../Perfil.css";
import { useRef, useState } from "react";
import AcertosChart from "./areausuario/AcertosChart";
import EditInfoModal from "./areausuario/EditInfoModal";
import ProgressDonut from "./areausuario/ProgressDonut";
import { useAuth } from "./areausuario/AuthContext";

export default function Perfil() {
  const { user, updateUser } = useAuth();
  const fileInputRef = useRef(null);
  const [modalAberto, setModalAberto] = useState(false);
  const stats = user?.stats ?? {
    aproveitamento: 0,
    questoesRespondidas: 0,
    acertos: 0,
    erros: 0,
    tempoEstudoMinutos: 0,
    evolucao: [],
  };

  function handleFotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => updateUser({ avatarUrl: reader.result });
    reader.readAsDataURL(file);
  }

  function formatTempo(minutos = 0) {
    const minutosSeguros = Math.max(Number(minutos) || 0, 0);
    const horas = Math.floor(minutosSeguros / 60);
    const minutosRestantes = minutosSeguros % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  return (
    <main className="perfil-page">
      <h1>Meu perfil</h1>

      <section className="perfil-grid">
        <div className="card foto-card">
          <img
            src={user?.avatarUrl ?? "/assets/default-avatar.png"}
            alt="Foto de perfil"
            className="avatar"
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            hidden
            onChange={handleFotoChange}
          />
          <button className="link-btn" type="button" onClick={() => fileInputRef.current?.click()}>
            Alterar foto
          </button>
        </div>

        <div className="card dados-card">
          <h2>Dados pessoais</h2>
          <div className="field">
            <span className="field-label">Nome completo</span>
            <span className="field-value">{user?.nome ?? "-"}</span>
          </div>
          <div className="field">
            <span className="field-label">E-mail</span>
            <span className="field-value">{user?.email ?? "-"}</span>
          </div>
          <button className="link-btn" type="button" onClick={() => setModalAberto(true)}>
            Alterar informações
          </button>
        </div>
      </section>

      <section className="card progresso-card">
        <div className="progresso-header">
          <h2>Seu progresso atual</h2>
          <p>Acompanhe seu desempenho das questões</p>
        </div>

        <div className="progresso-body">
          <ProgressDonut percentual={stats.aproveitamento} />
          <div className="evolucao-chart">
            <h3>Evolução de acertos</h3>
            <span className="chart-subtitle">Últimos simulados</span>
            <AcertosChart dados={stats.evolucao} />
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <strong>{stats.questoesRespondidas}</strong>
            <span>Questões respondidas</span>
          </div>
          <div className="stat-box acerto">
            <strong>{stats.acertos}</strong>
            <span>Acertos</span>
          </div>
          <div className="stat-box erro">
            <strong>{stats.erros}</strong>
            <span>Erros</span>
          </div>
          <div className="stat-box">
            <strong>{formatTempo(stats.tempoEstudoMinutos)}</strong>
            <span>Tempo de estudo</span>
          </div>
        </div>
      </section>

      {modalAberto && (
        <EditInfoModal
          nomeAtual={user?.nome}
          emailAtual={user?.email}
          onClose={() => setModalAberto(false)}
          onSave={(dados) => {
            updateUser(dados);
            setModalAberto(false);
          }}
        />
      )}
    </main>
  );
}
