import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağım.");
  };

  return (
    <section id="iletisim" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            İletişim
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Benimle İletişime Geçin
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sorularınız için bana ulaşabilir veya randevu talebinde bulunabilirsiniz
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">
                        Adınız Soyadınız *
                      </label>
                      <Input id="name" required placeholder="Adınız ve soyadınız" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2">
                        Telefon *
                      </label>
                      <Input id="phone" type="tel" required placeholder="05** *** ** **" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      E-posta *
                    </label>
                    <Input id="email" type="email" required placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2">
                      Konu
                    </label>
                    <Input id="subject" placeholder="Mesajınızın konusu" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Mesajınız *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Lütfen mesajınızı yazın..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">Adres</h3>
                    <p className="text-sm text-muted-foreground">
                      Şenlikköy Mah. Avcılar Sk. <br />
                      Özel Florya Gelişim Akademisi<br />
                      Bakırköy / İstanbul
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">Telefon</h3>
                    <p className="text-sm text-muted-foreground">
                      +90 5** *** ** **
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">E-posta</h3>
                    <p className="text-sm text-muted-foreground">
                      dktiremdogan@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">Çalışma Saatleri</h3>
                    <p className="text-sm text-muted-foreground">
                      Cuma: 10:00 - 18:00<br />
                      Pazar: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
