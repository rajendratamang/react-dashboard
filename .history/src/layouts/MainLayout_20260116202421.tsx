import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0b0b0f" // app background (blackish)
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "56px",
          width: "100%",
          backgroundColor: "#111118",
          borderBottom: "1px solid #2a0f14",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          fontWeight: 600,
          color: "#f87171" // soft red
        }}
      >
        CMS Admin
      </header>

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: "flex",
          width: "100%",
          overflow: "hidden"
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            backgroundColor: "#0f0f16",
            color: "#e5e7eb",
            overflowY: "auto"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
