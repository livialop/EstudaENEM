import "../styles/Equipe.css";

import EquipeHero from "./equipe/EquipeHero";
import EquipeIntegrantes from "./equipe/EquipeIntegrantes";
import SobreProjeto from "./equipe/SobreProjeto";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/Footer";

export default function Equipe() {
  return (
    <>
      <Navbar />

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
