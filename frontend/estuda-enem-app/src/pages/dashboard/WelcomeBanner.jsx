import React from "react";
import { ArrowRight } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <div className="dash-hero">

      <div className="dash-hero__text">

        <h1>
          Estude com estratégia.
          <br />
          <span>Conquiste seu futuro.</span>
        </h1>

        <p>
          A plataforma mais completa para você mandar bem
          no ENEM. Conteúdo de qualidade, questões,
          simulados e muito mais!
        </p>

        <button className="btn btn--primary">
          Continuar Estudando
          <ArrowRight size={16} />
        </button>

      </div>

      <svg
        viewBox="0 0 240 200"
        className="dash-hero__art"
        aria-hidden="true"
      >
        <circle
          cx="120"
          cy="100"
          r="92"
          fill="var(--dash-blue-100)"
        />

        <rect
          x="42"
          y="118"
          width="86"
          height="58"
          rx="6"
          fill="#fff"
          stroke="var(--dash-blue-300)"
          strokeWidth="2"
        />

        <path
          d="M42 130 h86"
          stroke="var(--dash-blue-300)"
          strokeWidth="2"
        />

        <circle
          cx="118"
          cy="72"
          r="24"
          fill="#ffd9b3"
        />

        <path
          d="M96 66 q22 -26 44 0 q2 20 -6 30
          q-16 12 -32 0 q-8 -10 -6 -30 Z"
          fill="#241b12"
        />

        <rect
          x="150"
          y="96"
          width="52"
          height="40"
          rx="4"
          fill="#1e2a4a"
        />

        <rect
          x="154"
          y="100"
          width="44"
          height="26"
          rx="2"
          fill="#3d5aa8"
        />

        <rect
          x="140"
          y="136"
          width="80"
          height="8"
          rx="4"
          fill="var(--dash-blue-300)"
        />

        <rect
          x="176"
          y="112"
          width="20"
          height="6"
          rx="1"
          fill="#ff7a59"
        />

        <rect
          x="176"
          y="120"
          width="20"
          height="6"
          rx="1"
          fill="#3ecf8e"
        />

        <rect
          x="176"
          y="128"
          width="20"
          height="6"
          rx="1"
          fill="#5b8def"
        />
      </svg>

    </div>
  );
}