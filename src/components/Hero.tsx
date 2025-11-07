import { Button } from "./ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="anasayfa" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              Uzman Dil ve Konuşma Terapisti
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Her Çocuğun Kendini İfade Etme Hakkı Var
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              4 yıllık deneyimle çocukların dil ve konuşma gelişiminde yanınızdayım. Bireysel terapi programlarıyla her çocuğun potansiyelini ortaya çıkarıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection("iletisim")}>
                <Calendar className="mr-2 w-4 h-4" />
                Randevu Al
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("hakkimda")}>
                <MessageCircle className="mr-2 w-4 h-4" />
                Daha Fazla Bilgi
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-blue-600 mb-1">4+</div>
                <p className="text-sm text-muted-foreground">Yıl Deneyim</p>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-1">200+</div>
                <p className="text-sm text-muted-foreground">Mutlu Aile</p>
              </div>
              <div>
                <div className="text-3xl text-blue-600 mb-1">98%</div>
                <p className="text-sm text-muted-foreground">Başarı Oranı</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759592702596-626aca3a99cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB0aGVyYXB5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzYyNTQ2NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dil ve konuşma terapisi seansı"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm italic">
                "Oğlum artık çok daha rahat konuşuyor. Bu değişimi görmek bizim için muhteşem!"
              </p>
              <p className="text-xs text-muted-foreground mt-2">- Elif Yılmaz, Anne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}