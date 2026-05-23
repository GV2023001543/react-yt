import { projectStats } from "../../data/dashboardData";

export default function ProjectStats() {
  return (
    <div className="panel-card">
      <div className="panel-title">Project Stats</div>
      {projectStats.map((p) => (
        <div key={p.name} className="proj-stat-item">
          <div className="proj-stat-name">{p.name}</div>
          <div className="proj-stat-bar">
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${p.pct}%`, background: p.color }} />
            </div>
            <span className="bar-pct">{p.pct}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}