import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      // If we're on a blog post detail page, use the navigate function
      onNavigate(id);
      setIsMenuOpen(false);
    } else {
      // Otherwise, scroll normally
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
              İD
            </div>
            <div>
              <h1 className="text-lg">Dkt. İrem Doğan</h1>
              <p className="text-xs text-muted-foreground">Dil ve Konuşma Terapisti</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("anasayfa")} className="text-sm hover:text-blue-600 transition-colors cursor-pointer">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection("hakkimda")} className="text-sm hover:text-blue-600 transition-colors cursor-pointer">
              Hakkımda
            </button>
            <button onClick={() => scrollToSection("hizmetler")} className="text-sm hover:text-blue-600 transition-colors cursor-pointer">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-sm hover:text-blue-600 transition-colors cursor-pointer">
              Blog
            </button>
            <Button onClick={() => scrollToSection("iletisim")} size="sm">
              İletişim
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("anasayfa")} className="text-sm hover:text-blue-600 transition-colors text-left cursor-pointer">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection("hakkimda")} className="text-sm hover:text-blue-600 transition-colors text-left cursor-pointer">
              Hakkımda
            </button>
            <button onClick={() => scrollToSection("hizmetler")} className="text-sm hover:text-blue-600 transition-colors text-left cursor-pointer">
              Hizmetler
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-sm hover:text-blue-600 transition-colors text-left cursor-pointer">
              Blog
            </button>
            <Button onClick={() => scrollToSection("iletisim")} size="sm" className="w-fit">
              İletişim
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}