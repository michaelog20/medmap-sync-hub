import { useState } from 'react';
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

  return (
    <div 
      className="feature-panel-container scroll-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
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
