import { GraduationCap } from "lucide-react";

export default function SelectHeader() {
  return (
    <header className="sel-header">
      <div className="sel-header__icon">
        <GraduationCap size={40} />
      </div>
      <div>
        <h1>Selecionar Área de Conhecimento</h1>
        <p>Escolha a área para visualizar e praticar questões.</p>
      </div>
    </header>
  );
}