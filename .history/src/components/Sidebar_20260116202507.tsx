type MenuItem = {
  label: string;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard" },
  { label: "Posts" },
  { label: "Users" },
  { label: "Settings" }
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        backgroundColor: "#111118",
        borderRight: "1px solid #2a0f14",
        padding: "16px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Brand / Title */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#f87171",
          marginBottom: "24px"
        }}
      >
        CMS Panel
      </div>

      {/* Menu */}
      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div
            key={item.label}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "6px",
              color: "#e5e7eb",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1a0f14";
              e.currentTarget.style.color = "#f87171";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#e5e7eb";
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        style={{
          fontSize: "12px",
          color: "#9ca3af",
          paddingTop: "12px",
          borderTop: "1px solid #2a0f14"
        }}
      >
        © 2026 CMS
      </div>
    </aside>
  );
}
