import { Mic, MessageSquare, Brain, Baby, Ear, Book } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
	{
		icon: Mic,
		title: "Artikülasyon Bozuklukları",
		description:
			"Sesleri doğru çıkaramayan çocuklar için özel terapi programları. Oyun bazlı aktivitelerle ses üretimini geliştiriyoruz.",
		color: "bg-blue-100 text-blue-600",
	},
	{
		icon: MessageSquare,
		title: "Dil Gelişim Geriliği",
		description:
			"Kelime dağarcığı ve dil bilgisi becerilerinin geliştirilmesi. Yaşıtlarına göre geç konuşan çocuklar için destek.",
		color: "bg-purple-100 text-purple-600",
	},
	{
		icon: Brain,
		title: "Kekemelik Terapisi",
		description:
			"Akıcılık bozukluklarında etkili teknikler ve stratejiler. Çocuğun özgüvenini artırıcı yaklaşımlar.",
		color: "bg-green-100 text-green-600",
	},
	{
		icon: Baby,
		title: "Erken Müdahale",
		description:
			"0-3 yaş arası bebekler ve küçük çocuklar için erken dönem dil stimülasyonu ve aile eğitimi.",
		color: "bg-orange-100 text-orange-600",
	},
	{
		icon: Book,
		title: "Okuma Yazmaya Hazırlık",
		description:
			"Fonolojik farkındalık ve okul öncesi dil becerileri. Okuma yazmaya geçiş sürecinde destek.",
		color: "bg-indigo-100 text-indigo-600",
	},
];

export function Services() {
	return (
		<section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
						Hizmetlerim
					</div>
					<h2 className="text-3xl md:text-4xl mb-4">Uzmanlık Alanlarım</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Her çocuğun ihtiyaçları farklıdır. Size uygun terapi programını birlikte belirleyelim.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardHeader className="flex items-center gap-4 md:flex-col md:items-start">
									<div
										className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-0 md:mb-4`}
									>
										<Icon className="w-6 h-6" />
									</div>
									<CardTitle>{service.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>{service.description}</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 md:p-12">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-2xl md:text-3xl mb-4">Terapi Süreci Nasıl İşler?</h3>
							<p className="text-blue-50 mb-6">
								İlk görüşmede detaylı değerlendirme yapıyoruz. Ardından bireysel terapi planı oluşturup, haftada 2-3 seans
								şeklinde devam ediyoruz.
							</p>
						</div>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">1</div>
								<p>İlk değerlendirme ve aile görüşmesi</p>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">2</div>
								<p>Bireysel terapi planının oluşturulması</p>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">3</div>
								<p>Düzenli terapi seansları ve takip</p>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">4</div>
								<p>Aile eğitimi ve ev ödevleri</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
