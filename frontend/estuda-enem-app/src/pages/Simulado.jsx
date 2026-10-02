import React from "react";
import "../styles/Simulado.css";

import TopBar from "./areainicial/TopBar";
import Sidebar from "./areainicial/Sidebar";
import SimuladoHero from "./simulado/SimuladoHero";
import SimuladoResumo from "./simulado/SimuladoResumo";
import SimuladosDisponiveis from "./simulado/SimuladosDisponiveis";
import HistoricoSimulados from "./simulado/HistoricoSimulados";
import RankingSemanal from "./simulado/RankingSemanal";

import { useAuth } from "./areausuario/AuthContext";
import { Navigate } from "react-router-dom";

export default function Simulado() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  if (isLoading) {
    return <div style={{ padding: 24, textAlign: "center" }}>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <TopBar nome={user?.nome ?? "Fulano"} />

      <div className="simulado-layout">
        <Sidebar activeItem="Simulado" onSair={logout} />

        <main className="simulado-content">
          <SimuladoHero />

          <SimuladoResumo realizados={12} melhorResultado={89} />

          <SimuladosDisponiveis />

          <section className="simulado-colunas">
            <HistoricoSimulados />
          </section>

          <RankingSemanal posicao={23} percentil={15} />
        </main>
      </div>
    </>
  );
}
