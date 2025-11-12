import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "../lib/blogData";

interface BlogProps {
  onPostClick: (slug: string) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Blog
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Faydalı Bilgiler ve Öneriler
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dil ve konuşma gelişimi hakkında ailelere yol gösterici yazılarım
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => onPostClick(post.slug)}>
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                <Button variant="link" className="p-0 h-auto group/btn">
                  Devamını Oku
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Tüm Blog Yazılarını Görüntüle
          </Button>
        </div>
      </div>
    </section>
  );
}