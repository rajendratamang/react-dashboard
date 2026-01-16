import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Later replace with real auth + token
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          backgroundColor: "#111118",
          border: "1px solid #2a0f14",
          borderRadius: "14px",
          padding: "32px"
        }}
      >
        <h1
          style={{
            color: "#f87171",
            marginBottom: "8px",
            textAlign: "center"
          }}
        >
          CMS Login
        </h1>

        <p
          style={{
            color: "#9ca3af",
            textAlign: "center",
            marginBottom: "24px"
          }}
        >
          Sign in to continue
        </p>

        {/* Email */}
        <div style={{ marginBottom: "16px" }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="admin@example.com"
            style={inputStyle}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "24px" }}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={inputStyle}
          />
        </div>

        {/* Login Button */}
        <button onClick={handleLogin} style={loginBtn}>
          <LogIn size={16} />
          Login
        </button>
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

const loginBtn: React.CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  backgroundColor: "#f87171",
  color: "#111118",
  border: "none",
  borderRadius: "8px",
  padding: "12px",
  fontWeight: 600,
  cursor: "pointer"
};
