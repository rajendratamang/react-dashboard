import { Plus, Edit, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  status: "Published" | "Draft";
  author: string;
  date: string;
};

const posts: Post[] = [
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
  const navigate = useNavigate();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const openDeleteModal = (post: Post) => {
    setSelectedPost(post);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedPost(null);
    setShowDeleteModal(false);
  };

  const confirmDelete = () => {
    // API call will go here later
    console.log("Deleting post:", selectedPost);
    closeDeleteModal();
  };

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
          onClick={() => navigate("/posts/create")}
          style={primaryBtn}
        >
          <Plus size={16} />
          New Post
        </button>
      </div>

      {/* Table */}
      <div style={tableWrapper}>
        <table style={table}>
          <thead>
            <tr style={{ backgroundColor: "#0f0f16" }}>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Author</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id} style={trStyle}>
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
                  <button
                    onClick={() =>
                      navigate(`/posts/${post.id}/edit`)
                    }
                    style={iconBtn}
                  >
                    <Edit size={16} />
                  </button>

                  <button
                    onClick={() => openDeleteModal(post)}
                    style={{ ...iconBtn, color: "#f87171" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE MODAL */}
      {showDeleteModal && selectedPost && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <div style={modalHeader}>
              <h3 style={{ color: "#f87171" }}>
                Delete Post
              </h3>
              <button
                onClick={closeDeleteModal}
                style={iconBtn}
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ color: "#9ca3af", marginBottom: "24px" }}>
              Are you sure you want to delete{" "}
              <strong>{selectedPost.title}</strong>?  
              This action cannot be undone.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={confirmDelete}
                style={dangerBtn}
              >
                Delete
              </button>

              <button
                onClick={closeDeleteModal}
                style={secondaryBtn}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const primaryBtn: React.CSSProperties = {
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
};

const secondaryBtn: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "1px solid #2a0f14",
  color: "#9ca3af",
  borderRadius: "8px",
  padding: "10px 16px",
  cursor: "pointer"
};

const dangerBtn: React.CSSProperties = {
  backgroundColor: "#f87171",
  color: "#111118",
  border: "none",
  borderRadius: "8px",
  padding: "10px 16px",
  fontWeight: 600,
  cursor: "pointer"
};

const tableWrapper: React.CSSProperties = {
  backgroundColor: "#111118",
  border: "1px solid #2a0f14",
  borderRadius: "12px",
  overflow: "hidden"
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  color: "#e5e7eb"
};

const trStyle: React.CSSProperties = {
  borderTop: "1px solid #2a0f14"
};

const thStyle: React.CSSProperties = {
  padding: "14px",
  fontSize: "13px",
  color: "#9ca3af",
  fontWeight: 600,
  textAlign: "left"
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

const modalOverlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modalBox: React.CSSProperties = {
  backgroundColor: "#111118",
  border: "1px solid #2a0f14",
  borderRadius: "12px",
  padding: "24px",
  width: "100%",
  maxWidth: "420px"
};

const modalHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px"
};
