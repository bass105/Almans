import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const slideshowImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    title: "Gedung Utama Madrasah",
    description: "Fasilitas pembelajaran modern dengan arsitektur Islami"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    title: "Ruang Kelas Interaktif",
    description: "Pembelajaran dengan teknologi digital dan metode modern"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    title: "Masjid Sekolah",
    description: "Pusat spiritual dan kegiatan keagamaan siswa"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    title: "Laboratorium Sains",
    description: "Fasilitas eksperimen dan penelitian ilmiah"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
    title: "Lab Komputer",
    description: "Teknologi terkini untuk pembelajaran digital"
  }
];

export default function GallerySlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-card/20 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Fasilitas</span> Sekolah
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jelajahi fasilitas lengkap dan modern yang mendukung proses pembelajaran berkualitas di AL-MANSHURIYAH.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Slideshow */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slideshowImages[currentSlide].url}
                  alt={slideshowImages[currentSlide].title}
                  className="w-full h-full object-cover"
                  data-testid={`slideshow-image-${currentSlide}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Slide Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute bottom-8 left-8 right-8 text-white"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    {slideshowImages[currentSlide].title}
                  </h3>
                  <p className="text-lg text-white/90 max-w-2xl">
                    {slideshowImages[currentSlide].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white"
              data-testid="slideshow-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white"
              data-testid="slideshow-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white"
              data-testid="slideshow-toggle-play"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                data-testid={`slide-indicator-${index}`}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-5 gap-4 mt-8">
            {slideshowImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-4 ring-primary scale-105' 
                    : 'hover:scale-102 opacity-70 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`thumbnail-${index}`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-primary/20"></div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress Bar */}
          {isPlaying && (
            <div className="mt-6 w-full bg-muted/30 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentSlide}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}