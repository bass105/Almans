import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [showText, setShowText] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 500);
    const timer2 = setTimeout(() => setShowSubtitle(true), 1500);
    const timer3 = setTimeout(() => setShowButton(true), 2500);
    const autoComplete = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(autoComplete);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0
              }}
              animate={{
                y: -50,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-sparkle">
              <GraduationCap className="w-16 h-16 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Main Title */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                  <span className="gradient-text">Selamat Datang</span>
                </h1>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-32"></div>
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-32"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtitle */}
          <AnimatePresence>
            {showSubtitle && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
                  Madrasah Aliyah AL-MANSHURIYAH
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Portal resmi sekolah yang mengintegrasikan pendidikan agama dan umum untuk membentuk generasi yang beriman, berilmu, dan berakhlak mulia.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enter Button */}
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <button
                  onClick={onComplete}
                  className="vibrant-btn px-8 py-4 text-lg font-semibold text-primary-foreground rounded-xl card-hover"
                  data-testid="enter-website-button"
                >
                  Masuk ke Website
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  Atau tunggu beberapa detik untuk masuk otomatis
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Loading indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}