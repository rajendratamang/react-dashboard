import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/posts" element={<Posts />} />
        </Routes>

          {/* 404 MUST be last */}
          <Route path="*" element={<NotFound />} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
