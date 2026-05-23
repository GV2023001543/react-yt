import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/dashboard/StatCard";
import FinancialStats from "./components/dashboard/FinancialStats";
import MilestoneTable from "./components/dashboard/MilestoneTable";
import ProjectStats from "./components/dashboard/ProjectStats";
import RecentActivity from "./components/dashboard/RecentActivity";
import { stats } from "./data/dashboardData";

export default function App() {
  return (
    <div className="layout">
      <Sidebar active="Dashboard" />
      <div className="main">
        <Topbar user={{ email: "baskar.reddy@syngenta.com", role: "Admin", initials: "B" }} />
        <div className="content">
          <div className="center-col">
            <div className="stat-grid">
              {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
            <FinancialStats />
            <MilestoneTable />
          </div>
          <div className="right-col">
            <ProjectStats />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}