import { Plus, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Getting Started Guide",
    status: "Published",
    author: "Admin",
    date: "2026-01-05"
  },
  {
    id: 2,
    title: "Release Notes v1.2",
    status: "Draft",
    author: "Admin",
    date: "2026-01-10"
  },
  {
    id: 3,
    title: "CMS Best Practices",
    status: "Published",
    author: "Editor",
    date: "2026-01-12"
  }
];

export default function Posts() {
  return (
    <div style={{ padding: "24px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px"
        }}
      >
        <div>
          <h1 style={{ color: "#f87171", marginBottom: "6px" }}>
            Posts
          </h1>
          <p style={{ color: "#9ca3af" }}>
            Manage your published and draft content.
          </p>
        </div>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#f87171",
            color: "#111118",
            border: "none",
            borderRadius: "8px",
            padding: "10px 14px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          <Plus size={16} />
          New Post
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          backgroundColor: "#111118",
          border: "1px solid #2a0f14",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "#e5e7eb"
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#0f0f16",
                textAlign: "left"
              }}
            >
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Author</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr
                key={post.id}
                style={{
                  borderTop: "1px solid #2a0f14"
                }}
              >
                <td style={tdStyle}>{post.title}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "999px",
                      fontSize: "12px",
                      backgroundColor:
                        post.status === "Published"
                          ? "#1a0f14"
                          : "#1f1f2a",
                      color:
                        post.status === "Published"
                          ? "#f87171"
                          : "#9ca3af"
                    }}
                  >
                    {post.status}
                  </span>
                </td>
                <td style={tdStyle}>{post.author}</td>
                <td style={tdStyle}>{post.date}</td>
                <td style={tdStyle}>
                  <button style={iconBtn}>
                    <Edit size={16} />
                  </button>
                  <button style={{ ...iconBtn, color: "#f87171" }}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "14px",
  fontSize: "13px",
  color: "#9ca3af",
  fontWeight: 600
};

const tdStyle: React.CSSProperties = {
  padding: "14px",
  fontSize: "14px"
};

const iconBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#9ca3af",
  cursor: "pointer",
  marginRight: "8px"
};
