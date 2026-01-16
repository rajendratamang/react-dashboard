import {
  FileText,
  Users,
  Edit,
  MessageSquare,
  HardDrive
} from "lucide-react";
import { useState } from "react";

const baseCardStyle: React.CSSProperties = {
  backgroundColor: "#111118",
  border: "1px solid #2a0f14",
  borderRadius: "12px",
  padding: "16px",
  transition: "transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease"
};

export default function Dashboard() {
  const storageUsed = 68;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const stats = [
    { label: "Total Posts", value: "128", icon: FileText },
    { label: "Active Users", value: "42", icon: Users },
    { label: "Draft Content", value: "9", icon: Edit },
    { label: "Comments", value: "356", icon: MessageSquare }
  ];

  return (
    <div style={{ padding: "24px" }}>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ color: "#f87171", marginBottom: "6px" }}>
          CMS Dashboard
        </h1>
        <p style={{ color: "#9ca3af" }}>
          Overview of your system activity and content.
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "32px"
        }}
      >
        {stats.map((item) => {
          const Icon = item.icon;
          const isHovered = hoveredCard === item.label;

          return (
            <div
              key={item.label}
              style={{
                ...baseCardStyle,
                transform: isHovered ? "translateY(-4px)" : "none",
                boxShadow: isHovered
                  ? "0 8px 24px rgba(248,113,113,0.15)"
                  : "none",
                border: isHovered
                  ? "1px solid #f87171"
                  : "1px solid #2a0f14"
              }}
              onMouseEnter={() => setHoveredCard(item.label)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px"
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                  }}
                >
                  {item.label}
                </span>

                <Icon
                  size={18}
                  color="#f87171"
                  style={{
                    transition: "transform 0.25s ease",
                    transform: isHovered ? "scale(1.15)" : "scale(1)"
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#f87171"
                }}
              >
                {item.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div
        style={{
          ...baseCardStyle,
          marginBottom: "32px"
        }}
      >
        <h3 style={{ color: "#e5e7eb", marginBottom: "12px" }}>
          Recent Activity
        </h3>

        {[
          "New post published: 'Getting Started Guide'",
          "User 'admin' updated site settings",
          "New comment pending approval",
          "Draft saved: 'Release Notes v1.2'"
        ].map((activity, index, arr) => (
          <div
            key={index}
            style={{
              padding: "10px 0",
              borderBottom:
                index !== arr.length - 1
                  ? "1px solid #2a0f14"
                  : "none",
              color: "#9ca3af",
              fontSize: "14px",
              transition: "color 0.2s ease"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#f87171")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#9ca3af")
            }
          >
            {activity}
          </div>
        ))}
      </div>

      {/* System + Storage */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px"
        }}
      >
        <div style={baseCardStyle}>
          <h4 style={{ color: "#e5e7eb", marginBottom: "8px" }}>
            System Status
          </h4>
          <p style={{ color: "#9ca3af" }}>
            All systems operational. No incidents reported.
          </p>
        </div>

        <div style={baseCardStyle}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px"
            }}
          >
            <h4 style={{ color: "#e5e7eb" }}>
              Storage Usage
            </h4>
            <HardDrive size={18} color="#f87171" />
          </div>

          <p style={{ color: "#9ca3af", marginBottom: "10px" }}>
            {storageUsed}% of allocated storage used
          </p>

          <div
            style={{
              height: "8px",
              width: "100%",
              backgroundColor: "#1f1f2a",
              borderRadius: "999px",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${storageUsed}%`,
                backgroundColor: "#f87171",
                transition: "width 0.5s ease"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
