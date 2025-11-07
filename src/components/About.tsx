import { Award, Heart, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="hakkimda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjQ4Mzg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Ayşe Kaya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-4xl mb-2">4</div>
              <p className="text-sm">Yıllık Deneyim</p>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
              Hakkımda
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Çocukların Gelişimine Tutkuyla Bağlı Bir Terapist
            </h2>
            <p className="text-muted-foreground mb-6">
              Merhaba, ben Dkt. İrem Doğan. 4 yıldır dil ve konuşma terapisti olarak çocukların iletişim becerilerini geliştirmelerine yardımcı oluyorum. Hacettepe Üniversitesi Dil ve Konuşma Terapisi bölümünden mezun olduktan sonra, hem yurt içinde hem de yurt dışında çeşitli eğitimler aldım.
            </p>
            <p className="text-muted-foreground mb-8">
              Her çocuğun benzersiz olduğuna ve kendi hızında geliştiğine inanıyorum. Bu nedenle her çocuk için özel olarak hazırlanmış bireysel terapi programları uyguluyorum. Aileleri de bu sürecin bir parçası olarak görüyor ve onları da aktif bir şekilde dahil ediyorum.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1">Sertifikalı Uzman</h3>
                  <p className="text-sm text-muted-foreground">Uluslararası geçerliliği olan sertifikalar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1">Şefkatli Yaklaşım</h3>
                  <p className="text-sm text-muted-foreground">Her çocuğa sevgiyle yaklaşım</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="mb-1">Aile Odaklı</h3>
                  <p className="text-sm text-muted-foreground">Ailelerle işbirliği içinde çalışma</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="mb-1">Kanıta Dayalı</h3>
                  <p className="text-sm text-muted-foreground">Bilimsel yöntemlerle terapi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}