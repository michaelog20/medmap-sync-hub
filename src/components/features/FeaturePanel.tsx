import { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturePanelProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeaturePanel = ({ icon: Icon, title, description, index }: FeaturePanelProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Clear any pending reversion timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    // Set a delay before reverting to default state
    timeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
      timeoutRef.current = null;
    }, 500);
  };

  const handleClick = () => {
    // Clear any pending timeout on click
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="feature-panel-container scroll-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={cn(
        "feature-panel-inner",
        isFlipped && "feature-panel-flipped"
      )}>
        {/* Front of card */}
        <div className="feature-panel-face feature-panel-front">
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="icon-glow mb-6">
              <Icon className="h-16 w-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {title}
            </h3>
          </div>
        </div>

        {/* Back of card */}
        <div className="feature-panel-face feature-panel-back">
          <div className="flex flex-col items-start justify-center h-full p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {title}
            </h3>
            <p className="text-foreground/90 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
