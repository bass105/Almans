import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SchoolProfile from "@/components/school-profile";
import NewsAnnouncements from "@/components/news-announcements";
import Gallery from "@/components/gallery";
import GallerySlideshow from "@/components/gallery-slideshow";
import AcademicPrograms from "@/components/academic-programs";
import TeacherStaff from "@/components/teacher-staff";
import Extracurricular from "@/components/extracurricular";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <Navigation />
      
      <main>
        <HeroSection />
        <SchoolProfile />
        <NewsAnnouncements />
        <GallerySlideshow />
        <Gallery />
        <AcademicPrograms />
        <TeacherStaff />
        <Extracurricular />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full z-50 vibrant-btn neon-glow animate-pulse-glow"
          size="icon"
          data-testid="back-to-top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}
