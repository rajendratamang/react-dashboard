import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  );
}
