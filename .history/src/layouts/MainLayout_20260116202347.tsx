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
        color: "#e5e7eb"
      }}
    >
      {/* Sidebar Title */}
      <div
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#f87171",
          marginBottom: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase"
        }}
      >
        Menu
      </div>

      {/* Menu Items */}
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.label}
            style={{
              padding: "10px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "4px",
              color: "#e5e7eb"
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
    </aside>
  );
}
