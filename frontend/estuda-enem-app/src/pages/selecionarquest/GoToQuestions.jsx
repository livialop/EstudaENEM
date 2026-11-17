import { BookOpen } from "lucide-react";

export default function GoToQuestions({ disabled, onClick }) {
  return (
    <button
      type="button"
      className="btn btn--primary sel-go"
      disabled={disabled}
      onClick={onClick}
    >
      <BookOpen size={14} />
      Ir para questões
    </button>
  );
}