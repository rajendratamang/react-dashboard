import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0b0b0f"
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "56px",
          backgroundColor: "#111118",
          borderBottom: "1px solid #2a0f14",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px"
        }}
      >
        <span
          style={{
            color: "#f87171",
            fontWeight: 700,
            fontSize: "16px"
          }}
        >
          CMS Admin
        </span>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "transparent",
            border: "1px solid #2a0f14",
            color: "#f87171",
            borderRadius: "8px",
            padding: "6px 12px",
            cursor: "pointer"
          }}
        >
          <LogOut size={16} />
          Logout
        </button>
      </header>

      {/* Body */}
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            backgroundColor: "#0f0f16"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
