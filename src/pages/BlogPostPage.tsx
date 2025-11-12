import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { BlogPost } from "../components/BlogPost";
import { Footer } from "../components/Footer";
import { blogPosts } from "../lib/blogData";
import { Helmet } from "react-helmet-async";

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "blog" } });
  };

  const handleNavigate = (sectionId: string) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <div className="container mx-auto px-4 pt-24 pb-20">
          <h1 className="text-2xl mb-4">Yazı bulunamadı</h1>
          <button
            className="text-blue-600 hover:underline"
            onClick={handleBack}
          >
            Blog’a dön
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | Dkt. İrem Doğan</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://dkt-iremdogan.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | Dkt. İrem Doğan`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://dkt-iremdogan.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | Dkt. İrem Doğan`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: [post.image],
            author: {
              '@type': 'Person',
              name: 'Dkt. İrem Doğan'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Dkt. İrem Doğan',
              logo: {
                '@type': 'ImageObject',
                url: 'https://dkt-iremdogan.com/logo.png'
              }
            },
            datePublished: post.date,
            url: `https://dkt-iremdogan.com/blog/${post.slug}`,
            description: post.excerpt,
            articleBody: post.content.join('\n\n')
          })}
        </script>
      </Helmet>
      <Header onNavigate={handleNavigate} />
      <BlogPost post={post} onBack={handleBack} onNavigate={handleNavigate} />
      <Footer />
    </div>
  );
}