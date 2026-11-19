import "../styles/Equipe.css";

import EquipeHero from "./equipe/EquipeHero";
import EquipeIntegrantes from "./equipe/EquipeIntegrantes";
import SobreProjeto from "./equipe/SobreProjeto";
import NavBar from "../components/NavBar";
import Footer from "./homepage/Footer";

export default function Equipe() {
  return (
    <>
      <NavBar />

      <div className="equipe-layout">
        <main className="equipe-content">
          <EquipeHero />

          <EquipeIntegrantes />

          <SobreProjeto />
        </main>

        <Footer />
      </div>
    </>
  );
}
