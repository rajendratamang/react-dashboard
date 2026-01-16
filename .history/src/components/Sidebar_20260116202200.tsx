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
        backgroundColor: "#f8fafc",
        borderRight: "1px solid #e2e8f0",
        padding: "16px",
        color: "#334155"
      }}
    >
      {/* Sidebar Title */}
      <div
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#64748b",
          marginBottom: "12px",
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
              marginBottom: "4px"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e2e8f0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
