import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    content: string[];
  };
  onBack: () => void;
  onNavigate: (sectionId: string) => void;
}

export function BlogPost({ post, onBack, onNavigate }: BlogPostProps) {
  const handleNavigateToSection = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <Button variant="ghost" onClick={onBack} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Blog Yazılarına Dön
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="border-t pt-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">Bu yazıyı paylaş:</span>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0 text-2xl">
                İD
              </div>
              <div>
                <h3 className="text-xl mb-2">Dkt. İrem Doğan</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dil ve Konuşma Terapisti | 3+ Yıl Deneyim
                </p>
                <p className="text-sm text-muted-foreground">
                  Medipol Üniversitesi Dil ve Konuşma Terapisi bölümünden mezun olduktan sonra, 
                  3 yıldır çocukların dil ve konuşma gelişiminde ailelerle birlikte çalışıyorum. 
                  Her çocuğun benzersiz olduğuna ve kendi potansiyelini ortaya çıkarabileceğine inanıyorum.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl mb-4">Çocuğunuz için destek mi arıyorsunuz?</h3>
            <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
              Değerlendirme görüşmesi için hemen randevu alın. Birlikte çocuğunuzun gelişimini destekleyelim.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => handleNavigateToSection("iletisim")}
            >
              Randevu Al
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
}