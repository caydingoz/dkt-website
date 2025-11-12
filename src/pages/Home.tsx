import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo!);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        // Clear state to avoid repeated scrolling on re-render
        navigate(location.pathname, { replace: true, state: null });
      }, 100);
    }
  }, [location, navigate]);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dil ve Konuşma Terapisi | Dkt. İrem Doğan</title>
        <meta name="description" content="Çocuklarda dil ve konuşma terapisi, kekemelik ve artikülasyon problemleri için bireysel terapi programları. Online ve yüz yüze seanslar." />
        <link rel="canonical" href="https://dkt-iremdogan.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dil ve Konuşma Terapisi | Dkt. İrem Doğan" />
        <meta property="og:description" content="Çocuklarda dil ve konuşma terapisi, kekemelik ve artikülasyon problemleri için bireysel terapi programları." />
        <meta property="og:url" content="https://dkt-iremdogan.com/" />
        <meta property="og:image" content="https://dkt-iremdogan.com/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dil ve Konuşma Terapisi | Dkt. İrem Doğan" />
        <meta name="twitter:description" content="Çocuklarda dil ve konuşma terapisi, kekemelik ve artikülasyon problemleri için bireysel terapi programları." />
        <meta name="twitter:image" content="https://dkt-iremdogan.com/og-home.jpg" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Services />
      <Blog onPostClick={handlePostClick} />
      <Contact />
      <Footer />
    </div>
  );
}