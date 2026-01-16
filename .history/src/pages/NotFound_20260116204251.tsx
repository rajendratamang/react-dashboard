import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#111118",
          border: "1px solid #2a0f14",
          borderRadius: "14px",
          padding: "32px",
          maxWidth: "420px"
        }}
      >
        <AlertTriangle size={48} color="#f87171" />

        <h1
          style={{
            marginTop: "16px",
            marginBottom: "8px",
            color: "#f87171"
          }}
        >
          404 – Page Not Found
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginBottom: "24px"
          }}
        >
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          style={{
            display: "inline-block",
            backgroundColor: "#f87171",
            color: "#111118",
            padding: "10px 16px",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none"
          }}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
