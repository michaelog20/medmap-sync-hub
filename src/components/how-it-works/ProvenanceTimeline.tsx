import { useEffect, useState } from "react";

const ProvenanceTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [provenanceId, setProvenanceId] = useState("A5B-D3K-12T");

  // Scroll-based node activation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('[data-step]');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        
        if (scrollPosition >= sectionTop) {
          setActiveStep(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Provenance ID cycling
  useEffect(() => {
    const generateId = () => {
      const chars = 'ABCDEFGHKLMNPQRSTUVWXYZ123456789';
      const segments = [
        Array(3).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join(''),
        Array(3).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join(''),
        Array(3).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
      ];
      return segments.join('-');
    };

    const interval = setInterval(() => {
      setProvenanceId(generateId());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
      {/* Timeline nodes */}
      <div className="flex flex-col items-center gap-6">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                activeStep >= step
                  ? 'bg-primary border-primary shadow-[0_0_12px_rgba(59,130,246,0.6)] scale-125'
                  : 'bg-background border-muted-foreground/30'
              }`}
            >
              {/* Glow effect when active */}
              {activeStep >= step && (
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              )}
            </div>
            
            {/* Connecting line */}
            {step < 3 && (
              <div
                className={`w-0.5 h-16 transition-all duration-500 ${
                  activeStep > step
                    ? 'bg-gradient-to-b from-primary to-primary/30'
                    : 'bg-muted-foreground/20'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Provenance ID */}
      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-wider">
          Provenance ID
        </div>
        <div className="font-mono text-xs text-primary/80 bg-primary/5 px-3 py-1.5 rounded border border-primary/20 shadow-sm transition-all duration-300">
          {provenanceId}
        </div>
      </div>
    </div>
  );
};

export default ProvenanceTimeline;
