import { useState } from "react";

export default function EditInfoModal({ nomeAtual, emailAtual, onClose, onSave }) {
  const [nome, setNome] = useState(nomeAtual ?? "");
  const [email, setEmail] = useState(emailAtual ?? "");

  function handleSubmit(event) {
    event.preventDefault();
    onSave({ nome, email });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal-card" onClick={(event) => event.stopPropagation()} onSubmit={handleSubmit}>
        <h2>Alterar informações</h2>
        <label>
          Nome completo
          <input value={nome} onChange={(event) => setNome(event.target.value)} required />
        </label>
        <label>
          E-mail
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <div className="modal-actions">
          <button type="button" className="btn-secondary" onClick={onClose}>Cancelar</button>
          <button type="submit" className="btn-primary">Salvar</button>
        </div>
      </form>
    </div>
  );
}
