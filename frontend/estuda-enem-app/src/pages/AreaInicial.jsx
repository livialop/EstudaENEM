import { useNavigate } from "react-router-dom";
import { useAuth } from "./areausuario/AuthContext";
import TopBar from "./areainicial/TopBar";
import Sidebar from "./areainicial/Sidebar";
import WelcomeBanner from "./areainicial/WelcomeBanner";
import QuickActions from "./areainicial/QuickActions";
import PerformanceCard from "./areainicial/PerformanceCard";
import JourneySteps from "./areainicial/JourneySteps";
import "../styles/AreaInicial.css";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className="dash-app">
      <TopBar />

      <div className="dash-body">
        <Sidebar onSair={handleLogout} />

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