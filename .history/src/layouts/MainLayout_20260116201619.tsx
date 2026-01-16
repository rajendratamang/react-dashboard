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

      <div
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "#f8fafc",
          overflow: "auto"
        }}
      >
        {children}
      </div>
    </div>
  );
}
