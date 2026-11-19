import "../styles/Perfil.css";
import { useEffect, useRef, useState } from "react";
import {
  UserRound,
  Mail,
  Pencil,
  Clock3,
  CheckCircle2,
  XCircle,
  HelpCircle,
  LogOut,
  ChevronDown,
  Trash2,
} from "lucide-react";
import AcertosChart from "./areausuario/AcertosChart";
import EditInfoModal from "./areausuario/EditInfoModal";
import ProgressDonut from "./areausuario/ProgressDonut";
import { useAuth } from "./areausuario/AuthContext";
import NavBar from "../components/NavBar";
import JoaoEnemImage from "../assets/Joao_ENEM.png";

const AVATAR_PADRAO = "/images/avatar-padrao.png";
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export default function Perfil() {
  const { user, token, updateUser, logout } = useAuth();
  const fileInputRef = useRef(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [stats, setStats] = useState({
    aproveitamento: 0,
    questoesRespondidas: 0,
    acertos: 0,
    erros: 0,
    tempoEstudoMinutos: 0,
    evolucao: [],
  });

  useEffect(() => {
    if (!token) return;

    const headers = { Authorization: `Bearer ${token}` };

    Promise.all([
      fetch(`${API_URL}/usuarios/me`, { headers }),
      fetch(`${API_URL}/usuarios/me/desempenho`, { headers }),
    ])
      .then(async ([resUsuario, resStats]) => {
        if (resUsuario.ok) {
          const dados = await resUsuario.json();
          updateUser({
            nome: dados.nome,
            email: dados.email,
            avatarUrl: dados.foto_url || null,
            stats: stats,
          });
        }
        if (resStats.ok) {
          const dados = await resStats.json();
          setStats(dados);
          updateUser({ stats: dados });
        }
      })
      .catch(() => {});
  }, [token]);

  async function salvarNoBackend(partial) {
    if (!token) return;
    await fetch(`${API_URL}/usuarios/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partial),
    });
  }

  function handleFotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updateUser({ avatarUrl: reader.result });
      salvarNoBackend({ foto_url: reader.result });
    };
    reader.readAsDataURL(file);
  }

  function removerFoto() {
    updateUser({ avatarUrl: null });
    salvarNoBackend({ foto_url: null });
  }

  function formatTempo(minutos = 0) {
    const seguros = Math.max(Number(minutos) || 0, 0);
    return `${Math.floor(seguros / 60)}h ${seguros % 60}min`;
  }

  const avatar = user?.avatarUrl || AVATAR_PADRAO;

  return (
    <main className="perfil-page">
      <div className="perfil-navbar">
        <NavBar />
      </div>

      <div className="perfil-content">
        <div className="perfil-heading-row">
          <h1>Meu perfil</h1>
          <div className="perfil-session">
            <span>Olá, {user?.nome ?? "Aluno"}</span>
            <ChevronDown size={16} />
            <button
              type="button"
              onClick={logout}
              aria-label="Sair da conta"
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        </div>

        <section className="perfil-top-grid">
          <article className="perfil-card foto-card">
            <div className="avatar-wrap">
              <img
                src={avatar}
                alt="Foto de perfil"
                className="perfil-avatar"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              hidden
              onChange={handleFotoChange}
            />
            <button
              className="perfil-link-btn"
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              <Pencil size={15} /> Alterar foto
            </button>
            {user?.avatarUrl && (
              <button
                className="perfil-remove-btn"
                type="button"
                onClick={removerFoto}
              >
                <Trash2 size={14} /> Remover foto
              </button>
            )}
          </article>

          <article className="perfil-card dados-card">
            <h2>
              <UserRound size={22} /> Dados pessoais
            </h2>
            <div className="perfil-field">
              <UserRound size={18} />
              <div>
                <span>Nome completo</span>
                <strong>{user?.nome ?? "-"}</strong>
              </div>
            </div>
            <div className="perfil-field">
              <Mail size={18} />
              <div>
                <span>E-mail cadastrado</span>
                <strong>{user?.email ?? "-"}</strong>
              </div>
            </div>
            <button
              className="perfil-link-btn dados-edit"
              type="button"
              onClick={() => setModalAberto(true)}
            >
              <Pencil size={15} /> Alterar informações
            </button>
          </article>
        </section>

        <section className="perfil-card progresso-card">
          <div className="progresso-heading">
            <span className="progresso-heading-icon">
              <CheckCircle2 size={22} />
            </span>
            <div>
              <h2>Seu progresso atual</h2>
              <p>Acompanhe seu desempenho nos simulados</p>
            </div>
          </div>

          <div className="progresso-body">
            <div className="desempenho-donut">
              <ProgressDonut percentual={stats.aproveitamento} />
            </div>

            <div className="evolucao-chart">
              <div className="evolucao-title">
                <h3>Evolução de acertos</h3>
                <p>Últimos simulados</p>
              </div>
              <AcertosChart dados={stats.evolucao} />
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <HelpCircle size={20} />
              <div>
                <strong>{stats.questoesRespondidas}</strong>
                <span>Questões respondidas</span>
              </div>
            </div>
            <div className="stat-box acerto">
              <CheckCircle2 size={20} />
              <div>
                <strong>{stats.acertos}</strong>
                <span>Acertos</span>
              </div>
            </div>
            <div className="stat-box erro">
              <XCircle size={20} />
              <div>
                <strong>{stats.erros}</strong>
                <span>Erros</span>
              </div>
            </div>
            <div className="stat-box">
              <Clock3 size={20} />
              <div>
                <strong>{formatTempo(stats.tempoEstudoMinutos)}</strong>
                <span>Tempo de estudo</span>
              </div>
            </div>
          </div>
        </section>

        <div className="perfil-illustration" aria-hidden="true">
          <img src={JoaoEnemImage} alt="" />
        </div>
      </div>

      {modalAberto && (
        <EditInfoModal
          nomeAtual={user?.nome}
          emailAtual={user?.email}
          onClose={() => setModalAberto(false)}
          onSave={(dados) => {
            updateUser(dados);
            salvarNoBackend({ nome: dados.nome });
            setModalAberto(false);
          }}
        />
      )}
    </main>
  );
}
