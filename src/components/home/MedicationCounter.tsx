import { useEffect, useState } from "react";

const MedicationCounter = () => {
  const [count, setCount] = useState(147);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        // Generate a random 3-digit number, with occasional larger jumps
        const change = Math.random() > 0.7 ? Math.floor(Math.random() * 50) : Math.floor(Math.random() * 15);
        const newCount = prev + change;
        // Keep it in a reasonable range (000-999)
        return newCount > 999 ? Math.floor(Math.random() * 100) + 50 : newCount;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 blur-3xl bg-primary/20 opacity-60 animate-pulse" />
        
        {/* Counter display */}
        <div className="relative text-[180px] md:text-[240px] lg:text-[300px] font-mono font-bold tracking-wider opacity-[0.08] text-primary transition-all duration-1000 ease-in-out">
          {String(count).padStart(3, '0')}
        </div>
        
        {/* Additional subtle glow layers */}
        <div className="absolute inset-0 blur-xl bg-secondary/10 opacity-40" />
      </div>
    </div>
  );
};

export default MedicationCounter;

