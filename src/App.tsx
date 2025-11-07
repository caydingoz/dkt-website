import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { blogPosts } from "./lib/blogData";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const selectedPost = selectedPostId 
    ? blogPosts.find(post => post.id === selectedPostId)
    : null;

  useEffect(() => {
    // Scroll to top when a blog post is opened or closed
    window.scrollTo(0, 0);
  }, [selectedPostId]);

  const handleNavigateToSection = (sectionId: string) => {
    setSelectedPostId(null);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigateToSection} />
        <BlogPost 
          post={selectedPost} 
          onBack={() => setSelectedPostId(null)} 
          onNavigate={handleNavigateToSection}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog onPostClick={setSelectedPostId} />
      <Contact />
      <Footer />
    </div>
  );
}