const navItems = [
  { icon: "layout-dashboard", label: "Dashboard", path: "/" },
  { icon: "briefcase", label: "Projects", path: "/projects" },
  { icon: "users", label: "Key Account Managers", path: "/kam" },
  { icon: "heart-handshake", label: "Donors", path: "/donors" },
  { icon: "users-group", label: "Teams", path: "/teams" },
];

export default function Sidebar({ active = "Dashboard" }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-box">aeg</span>
        <div>
          <p className="logo-name">foundation</p>
          <p className="logo-tag">NGO Management</p>
        </div>
      </div>
      <nav className="nav">
        {navItems.map((item) => (
          <div key={item.label} className={`nav-item ${active === item.label ? "active" : ""}`}>
            <i className={`ti ti-${item.icon}`} />
            {item.label}
          </div>
        ))}
      </nav>
      <div className="sidebar-logout">
        <div className="nav-item">
          <i className="ti ti-logout" /> Logout
        </div>
      </div>
    </aside>
  );
}