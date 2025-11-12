import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}