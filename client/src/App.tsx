import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import IntroScreen from "@/components/intro-screen";
import { useState, useEffect } from "react";

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('intro-completed');
    }
    return true;
  });

  const handleIntroComplete = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('intro-completed', 'true');
    }
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="dark">
            <Toaster />
            <IntroScreen onComplete={handleIntroComplete} />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
