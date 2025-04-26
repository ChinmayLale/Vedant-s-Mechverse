import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import ProjectDetails from "@/pages/ProjectDetails";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/Vedant-s-Mechverse/" />
      <Route element={<DocsPage />} path="/about" />
      <Route element={<ProjectDetails />} path="/projects" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
