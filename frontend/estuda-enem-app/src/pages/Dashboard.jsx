// src/pages/Dashboard.jsx

import TopBar from "./dashboard/TopBar";
import Sidebar from "./dashboard/Sidebar";
import WelcomeBanner from "./dashboard/WelcomeBanner";
import QuickActions from "./dashboard/QuickActions";
import PerformanceCard from "./dashboard/PerformanceCard";
import JourneySteps from "./dashboard/JourneySteps";
import "../Dashboard.css";

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