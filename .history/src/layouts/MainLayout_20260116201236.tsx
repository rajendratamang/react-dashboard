import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <header
        style={{
          padding: "16px 24px",
          background: "#0f172a",
          color: "#ffffff",
          fontWeight: 600
        }}
      >
        CMS Admin
      </header>

      <main style={{ padding: "24px" }}>
        {children}
      </main>
    </div>
  );
}
