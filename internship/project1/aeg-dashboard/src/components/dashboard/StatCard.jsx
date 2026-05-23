const BAR_COLORS = ["#5b9bd5", "#e05c30", "#f0b429"];

export default function StatCard({ label, value }) {
  const heights = [60, 100, 45, 75, 55];
  return (
    <div className="stat-card">
      <div>
        <div className="stat-num">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
      <div className="mini-bars">
        {heights.map((h, i) => (
          <div
            key={i}
            className="bar"
            style={{ height: `${h}%`, background: BAR_COLORS[i % 3] }}
          />
        ))}
      </div>
    </div>
  );
}