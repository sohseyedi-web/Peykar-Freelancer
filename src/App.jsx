import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Owner from "./pages/Owner";
import FreeLancer from "./pages/FreeLancer";
import NotFound from "./pages/NotFound";
import Layout from "./ui/AppLayout/Layout";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Auth />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<Owner />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route path="/freelancer" element={<FreeLancer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
