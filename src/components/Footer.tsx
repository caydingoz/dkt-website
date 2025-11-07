import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                İD
              </div>
              <div>
                <h3 className="text-lg">Dkt. İrem Doğan</h3>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Dil ve Konuşma Terapisti olarak çocukların iletişim becerilerini geliştirmelerine yardımcı oluyorum.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={() => scrollToSection("anasayfa")} className="hover:text-white transition-colors">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("hakkimda")} className="hover:text-white transition-colors">
                  Hakkımda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("hizmetler")} className="hover:text-white transition-colors">
                  Hizmetler
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blog")} className="hover:text-white transition-colors">
                  Blog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Artikülasyon Bozuklukları</li>
              <li>Dil Gelişim Geriliği</li>
              <li>Kekemelik Terapisi</li>
              <li>Erken Müdahale</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Bizi Takip Edin</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Dr. Ayşe Kaya - Dil ve Konuşma Terapisti. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}