import { useParams, useNavigate } from "react-router-dom";
import { Save, ArrowLeft } from "lucide-react";

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  return (
    <div style={{ padding: "24px", maxWidth: "900px" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <button
          onClick={() => navigate("/posts")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            color: "#9ca3af",
            cursor: "pointer",
            marginBottom: "12px"
          }}
        >
          <ArrowLeft size={16} />
          Back to Posts
        </button>

        <h1 style={{ color: "#f87171", marginBottom: "6px" }}>
          {isEdit ? "Edit Post" : "Create New Post"}
        </h1>
        <p style={{ color: "#9ca3af" }}>
          {isEdit
            ? "Update your existing content."
            : "Create and publish new content."}
        </p>
      </div>

      {/* Form */}
      <div
        style={{
          backgroundColor: "#111118",
          border: "1px solid #2a0f14",
          borderRadius: "12px",
          padding: "24px"
        }}
      >
        {/* Title */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Title</label>
          <input
            type="text"
            placeholder="Enter post title"
            style={inputStyle}
          />
        </div>

        {/* Content */}
        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Content</label>
          <textarea
            rows={10}
            placeholder="Write your content here..."
            style={textareaStyle}
          />
        </div>

        {/* Status */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Status</label>
          <select style={inputStyle}>
            <option>Draft</option>
            <option>Published</option>
          </select>
        </div>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: "12px"
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#f87171",
              color: "#111118",
              border: "none",
              borderRadius: "8px",
              padding: "10px 16px",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            <Save size={16} />
            {isEdit ? "Update Post" : "Save Post"}
          </button>

          <button
            onClick={() => navigate("/posts")}
            style={{
              backgroundColor: "transparent",
              border: "1px solid #2a0f14",
              color: "#9ca3af",
              borderRadius: "8px",
              padding: "10px 16px",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  color: "#9ca3af",
  marginBottom: "6px"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  backgroundColor: "#0f0f16",
  border: "1px solid #2a0f14",
  borderRadius: "8px",
  color: "#e5e7eb",
  outline: "none"
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: "vertical"
};
