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
        flexDirection: "column"
      }}
    >
      {/* Header */}
      <header
        style={{
          height: "56px",
          width: "100%",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          paddingLeft: "24px",
          fontWeight: 600
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
            backgroundColor: "#020617",
            color: "#e5e7eb",
            padding: "16px"
          }}
        >
          Sidebar
        </aside>

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            backgroundColor: "#f8fafc",
            overflowY: "auto"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
