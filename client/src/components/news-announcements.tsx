import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, Star, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  featured: boolean;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

const categories = [
  { id: "all", label: "Semua Berita" },
  { id: "featured", label: "Berita Utama" },
  { id: "academic", label: "Akademik" },
  { id: "achievement", label: "Prestasi" },
  { id: "event", label: "Kegiatan" }
];

export default function NewsAnnouncements() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const { data: articles = [], isLoading } = useQuery<NewsArticle[]>({
    queryKey: ['/api/news', { published: true }],
    queryFn: async () => {
      const response = await fetch('/api/news?published=true');
      if (!response.ok) throw new Error('Failed to fetch news');
      return response.json();
    }
  });

  const filteredArticles = articles.filter(article => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "featured") return article.featured;
    // For other categories, we could add a category field to the schema
    // For now, we'll just show all for other categories
    return true;
  });

  const featuredArticles = articles.filter(article => article.featured).slice(0, 3);
  const recentArticles = articles.slice(0, 6);

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded mb-4 w-3/4"></div>
                  <div className="h-20 bg-muted rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="berita" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Berita</span> & Pengumuman
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dapatkan informasi terbaru tentang kegiatan, prestasi, dan pengumuman penting dari Madrasah Aliyah AL-MANSHURIYAH.
          </p>
        </motion.div>

        {/* Featured News */}
        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8 flex items-center">
              <Star className="w-6 h-6 text-primary mr-2 animate-sparkle" />
              Berita Utama
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`featured-article-${article.id}`}
                >
                  <Card className="glass-effect border-border card-hover h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Utama
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {article.title}
                      </h4>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <CalendarDays className="w-4 h-4 mr-1" />
                          {article.publishedAt && format(new Date(article.publishedAt), 'dd MMM yyyy', { locale: id })}
                        </div>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                        data-testid={`button-read-more-${article.id}`}
                      >
                        {expandedArticle === article.id ? 'Tutup' : 'Baca Selengkapnya'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-card rounded-full p-2 flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Recent News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Clock className="w-6 h-6 text-accent mr-2" />
            Berita Terbaru
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`article-${article.id}`}
              >
                <Card className="glass-effect border-border card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {article.publishedAt && format(new Date(article.publishedAt), 'dd MMM yyyy', { locale: id })}
                      </div>
                      {article.featured && (
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          <Star className="w-3 h-3 mr-1" />
                          Utama
                        </Badge>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {article.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                        data-testid={`button-expand-${article.id}`}
                      >
                        {expandedArticle === article.id ? 'Tutup' : 'Baca'}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expanded Article Modal/Content */}
        {expandedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setExpandedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card border border-border rounded-2xl max-w-4xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              data-testid={`expanded-article-${expandedArticle}`}
            >
              {(() => {
                const article = articles.find(a => a.id === expandedArticle);
                if (!article) return null;
                
                return (
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        {article.featured && (
                          <Badge className="bg-primary text-primary-foreground mr-3">
                            <Star className="w-3 h-3 mr-1" />
                            Berita Utama
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setExpandedArticle(null)}
                        data-testid="button-close-article"
                      >
                        ✕
                      </Button>
                    </div>
                    
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                      {article.title}
                    </h1>
                    
                    <div className="flex items-center text-muted-foreground mb-6 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {article.publishedAt && format(new Date(article.publishedAt), 'dd MMMM yyyy', { locale: id })}
                      </div>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* No Articles Message */}
        {filteredArticles.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="text-muted-foreground">
              <Clock className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">Belum ada berita untuk kategori ini.</p>
              <p className="mt-2">Silakan coba kategori lain atau periksa kembali nanti.</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}