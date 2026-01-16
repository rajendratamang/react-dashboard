const cardStyle: React.CSSProperties = {
  backgroundColor: "#111118",
  border: "1px solid #2a0f14",
  borderRadius: "12px",
  padding: "16px"
};

export default function Dashboard() {
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
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "32px"
        }}
      >
        {[
          { label: "Total Posts", value: "128" },
          { label: "Active Users", value: "42" },
          { label: "Draft Content", value: "9" },
          { label: "Comments", value: "356" }
        ].map((item) => (
          <div key={item.label} style={cardStyle}>
            <div
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.04em"
              }}
            >
              {item.label}
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
        ))}
      </div>

      {/* Activity */}
      <div style={{ ...cardStyle, marginBottom: "32px" }}>
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
              fontSize: "14px"
            }}
          >
            {activity}
          </div>
        ))}
      </div>

      {/* System */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px"
        }}
      >
        <div style={cardStyle}>
          <h4 style={{ color: "#e5e7eb", marginBottom: "8px" }}>
            System Status
          </h4>
          <p style={{ color: "#9ca3af" }}>
            All systems operational. No incidents reported.
          </p>
        </div>

        <div style={cardStyle}>
          <h4 style={{ color: "#e5e7eb", marginBottom: "8px" }}>
            Storage Usage
          </h4>
          <p style={{ color: "#9ca3af" }}>
            68% of allocated storage used.
          </p>
        </div>
      </div>
    </div>
  );
}
