export default function Dashboard() {
  return (
    <div style={{ padding: "24px" }}>
      {/* Page Title */}
      <h1 style={{ color: "#f87171", marginBottom: "4px" }}>
        CMS Dashboard
      </h1>
      <p style={{ color: "#9ca3af", marginBottom: "24px" }}>
        Overview of your system activity and content.
      </p>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
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
          <div
            key={item.label}
            style={{
              backgroundColor: "#111118",
              border: "1px solid #2a0f14",
              borderRadius: "10px",
              padding: "16px"
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginBottom: "6px"
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#f87171"
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div
        style={{
          backgroundColor: "#111118",
          border: "1px solid #2a0f14",
          borderRadius: "10px",
          padding: "16px",
          marginBottom: "24px"
        }}
      >
        <h3
          style={{
            color: "#e5e7eb",
            marginBottom: "12px"
          }}
        >
          Recent Activity
        </h3>

        {[
          "New post published: 'Getting Started Guide'",
          "User 'admin' updated site settings",
          "New comment pending approval",
          "Draft saved: 'Release Notes v1.2'"
        ].map((activity, index) => (
          <div
            key={index}
            style={{
              padding: "10px 0",
              borderBottom:
                index !== 3 ? "1px solid #2a0f14" : "none",
              color: "#9ca3af",
              fontSize: "14px"
            }}
          >
            {activity}
          </div>
        ))}
      </div>

      {/* System Status */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px"
        }}
      >
        <div
          style={{
            backgroundColor: "#111118",
            border: "1px solid #2a0f14",
            borderRadius: "10px",
            padding: "16px"
          }}
        >
          <h4 style={{ color: "#e5e7eb", marginBottom: "8px" }}>
            System Status
          </h4>
          <p style={{ color: "#9ca3af" }}>
            All systems operational. No incidents reported.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#111118",
            border: "1px solid #2a0f14",
            borderRadius: "10px",
            padding: "16px"
          }}
        >
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
