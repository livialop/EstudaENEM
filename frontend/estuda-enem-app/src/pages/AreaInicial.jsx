// src/pages/Dashboard.jsx

import TopBar from "./areainicial/TopBar";
import Sidebar from "./areainicial/Sidebar";
import WelcomeBanner from "./areainicial/WelcomeBanner";
import QuickActions from "./areainicial/QuickActions";
import PerformanceCard from "./areainicial/PerformanceCard";
import JourneySteps from "./areainicial/JourneySteps";
import "../AreaInicial.css";

export default function Dashboard() {
  return (
    <div className="dash-app">
      <TopBar />

      <div className="dash-body">
        <Sidebar />

        <main className="dash-main">
          <div className="dash-greeting">
            <h1>Olá, futuro(a) aprovado(a)!</h1>
            <p>Prontos para mais um dia de estudos?</p>
          </div>

          <WelcomeBanner />

          <div className="dash-grid">
            <QuickActions />
            <PerformanceCard />
          </div>

          <JourneySteps />
        </main>
      </div>
    </div>
  );
}