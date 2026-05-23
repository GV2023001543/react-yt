import { recentActivity } from "../../data/dashboardData";

export default function RecentActivity() {
  return (
    <div className="panel-card">
      <div className="panel-title">Recent Activity</div>
      {recentActivity.map((a, i) => (
        <div key={i} className="activity-item">
          <div className="act-icon"><i className="ti ti-clock" /></div>
          <div>
            <div className="act-name">{a.project}</div>
            <div className="act-sub">{a.action} in {a.project}</div>
          </div>
        </div>
      ))}
    </div>
  );
}