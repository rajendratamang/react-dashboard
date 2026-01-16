import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Posts", icon: FileText },
  { label: "Users", icon: Users },
  { label: "Settings", icon: Settings }
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      style={{
        width: collapsed ? "72px" : "240px",
        backgroundColor: "#111118",
        borderRight: "1px solid #2a0f14",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.25s ease"
      }}
    >
      {/* Brand + Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          marginBottom: "24px"
        }}
      >
        {!collapsed && (
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#f87171"
            }}
          >
            CMS Panel
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: "none",
            border: "none",
            color: "#9ca3af",
            cursor: "pointer",
            display: "flex",
            alignItems: "center"
          }}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Menu */}
      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: collapsed ? "0" : "12px",
                justifyContent: collapsed ? "center" : "flex-start",
                padding: "10px",
                borderRadius: "8px",
                cursor: "pointer",
                marginBottom: "6px",
                color: "#e5e7eb",
                transition: "background 0.2s ease, color 0.2s ease"
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
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
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
      )}
    </aside>
  );
}
