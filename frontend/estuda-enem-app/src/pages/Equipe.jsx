import React from "react";
import "../styles/Equipe.css";

import EquipeNavbar from "./equipe/EquipeNavbar";
import EquipeHero from "./equipe/EquipeHero";
import EquipeIntegrantes from "./equipe/EquipeIntegrantes";
import SobreProjeto from "./equipe/SobreProjeto";

export default function Equipe() {
  return (
    <>
      <EquipeNavbar />

      <div className="equipe-layout">
        <main className="equipe-content">
          <EquipeHero />

          <EquipeIntegrantes />

          <SobreProjeto />
        </main>
      </div>
    </>
  );
}
