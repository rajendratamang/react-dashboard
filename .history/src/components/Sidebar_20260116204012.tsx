import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  path: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Posts", path: "/posts", icon: FileText },
  { label: "Users", path: "/users", icon: Users },
  { label: "Settings", path: "/settings", icon: Settings }
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
            cursor: "pointer"
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
            <NavLink
              key={item.label}
              to={item.path}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? "0" : "12px",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "6px",
                textDecoration: "none",
                color: isActive ? "#f87171" : "#e5e7eb",
                backgroundColor: isActive ? "#1a0f14" : "transparent",
                transition: "all 0.2s ease"
              })}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
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
