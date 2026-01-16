import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <header
        style={{
          height: "56px",
          padding: "0 24px",
          background: "#0f172a",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          fontWeight: 600
        }}
      >
        CMS Admin
      </header>

      <main
        style={{
          flex: 1,
          background: "#f8fafc",
          padding: "24px"
        }}
      >
        {children}
      </main>
    </div>
  );
}
