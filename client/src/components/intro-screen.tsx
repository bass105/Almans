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
    const timer1 = setTimeout(() => setShowText(true), 1200);
    const timer2 = setTimeout(() => setShowSubtitle(true), 2500);
    const timer3 = setTimeout(() => setShowButton(true), 4000);
    const autoComplete = setTimeout(() => onComplete(), 8000);

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-primary/15 to-accent/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)] opacity-90"></div>
        
        {/* Enhanced floating particles with more variety */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                i % 4 === 0 ? 'w-4 h-4 bg-primary/40 rounded-full' : 
                i % 4 === 1 ? 'w-3 h-3 bg-accent/50 rounded-full' : 
                i % 4 === 2 ? 'w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full' :
                'w-1 h-1 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse'
              }`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                opacity: 0,
                scale: 0
              }}
              animate={{
                y: -100,
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Enhanced cosmic rays and light beams */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className={`absolute ${i % 3 === 0 ? 'h-0.5' : 'h-px'} ${
                i % 2 === 0 ? 'bg-gradient-to-r from-transparent via-primary/70 to-transparent' :
                'bg-gradient-to-r from-transparent via-accent/60 to-transparent'
              }`}
              style={{
                width: '120vw',
                top: `${15 + i * 7}%`,
                left: '-60%',
                transform: `rotate(${-45 + i * 8}deg)`
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
                rotate: [-45 + i * 8, -35 + i * 8, -45 + i * 8]
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-md"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 8}%`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                x: [-20, 20, -20],
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Enhanced Logo with more dramatic entrance */}
          <motion.div
            initial={{ scale: 0, rotate: -360, opacity: 0, y: 100 }}
            animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.5, 
              type: "spring", 
              bounce: 0.4,
              delay: 0.3
            }}
            className="mb-8 relative"
          >
            {/* Outer glow ring */}
            <motion.div 
              className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main logo container */}
            <div className="relative w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl border-2 border-primary/30">
              {/* Inner pulse effect */}
              <motion.div 
                className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/30 to-accent/30"
                animate={{
                  scale: [1, 0.95, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <GraduationCap className="w-20 h-20 text-primary-foreground drop-shadow-lg" />
              </motion.div>
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
                <h1 className="text-5xl lg:text-8xl font-black mb-6 tracking-tight">
                  <motion.span 
                    className="gradient-text inline-block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: '200% 200%'
                    }}
                  >
                    Selamat Datang
                  </motion.span>
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
                <motion.h2 
                  className="text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Madrasah Aliyah AL-MANSHURIYAH
                </motion.h2>
                <motion.p 
                  className="text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Portal resmi sekolah yang mengintegrasikan pendidikan agama dan umum untuk membentuk generasi yang beriman, berilmu, dan berakhlak mulia.
                </motion.p>
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
                <motion.button
                  onClick={onComplete}
                  className="relative px-10 py-5 text-xl font-bold text-primary-foreground rounded-2xl overflow-hidden group"
                  data-testid="enter-website-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundSize: '200% 200%'
                    }}
                  />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Button text */}
                  <span className="relative z-10 flex items-center gap-3">
                    Masuk ke Website
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.div>
                  </span>
                </motion.button>
                <motion.p 
                  className="text-base text-foreground/60 mt-6"
                  animate={{
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Atau tunggu beberapa detik untuk masuk otomatis
                </motion.p>
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