const CIRCUMFERENCE = 2 * Math.PI * 36; // r=36

export default function FinancialStats() {
  const pct = 37;
  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;

  return (
    <div className="financial-card">
      <span className="fin-title">FINANCIAL STATS</span>
      <div className="gauge-wrap">
        <svg width="90" height="90" viewBox="0 0 90 90" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="45" cy="45" r="36" fill="none" stroke="#eee" strokeWidth="10" />
          <circle cx="45" cy="45" r="36" fill="none" stroke="#c0392b" strokeWidth="10"
            strokeDasharray={CIRCUMFERENCE} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <div className="gauge-label">{pct}%</div>
      </div>
      <div className="fin-stats">
        <div className="fin-row"><span>Tasks Completed</span><strong>108 / 148</strong></div>
        <div className="fin-row"><span>Total Projects Value (INR)</span><strong>₹ 1,120,846,125</strong></div>
        <div className="fin-row"><span>Accomplished Value (INR)</span><strong>₹ 17,141,002</strong></div>
      </div>
    </div>
  );
}