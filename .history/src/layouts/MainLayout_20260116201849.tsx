import { ReactNode } from "react";

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
        backgroundColor: "#f1f5f9" // overall app background
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "56px",
          width: "100%",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          fontWeight: 600,
          color: "#0f172a"
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
        <aside
          style={{
            width: "240px",
            backgroundColor: "#f8fafc",
            borderRight: "1px solid #e2e8f0",
            padding: "16px",
            color: "#334155"
          }}
        >
          <strong>Sidebar</strong>
        </aside>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            overflowY: "auto"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
