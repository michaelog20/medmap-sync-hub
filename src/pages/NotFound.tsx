import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import ParticleNetworkBackground from "@/components/ParticleNetworkBackground";
import { Button } from "@/components/ui/button";
import { Home, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetworkBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Broken Connection Visual */}
          <div className="mb-12 flex justify-center">
            <svg 
              width="400" 
              height="300" 
              viewBox="0 0 400 300" 
              className="animate-pulse"
              style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.4))' }}
            >
              {/* Left network node - active */}
              <circle cx="80" cy="150" r="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.8">
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="150" r="12" fill="hsl(var(--primary))" opacity="0.4" />
              
              {/* Right network node - dark/failed */}
              <circle cx="320" cy="150" r="20" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="3" opacity="0.3" />
              <circle cx="320" cy="150" r="12" fill="hsl(var(--muted-foreground))" opacity="0.2" />
              
              {/* Broken connection lines */}
              <path 
                d="M 100 150 L 180 150" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2" 
                strokeDasharray="4,4"
                opacity="0.7"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
              </path>
              
              {/* Gap in the middle - the break */}
              <circle cx="200" cy="150" r="6" fill="hsl(var(--destructive))" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
              </circle>
              
              <path 
                d="M 220 150 L 300 150" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth="2" 
                strokeDasharray="4,4"
                opacity="0.3"
              />
              
              {/* Circuit traces around left node */}
              <path d="M 80 130 L 80 100 L 120 100" stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 80 170 L 80 200 L 120 200" stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M 60 150 L 30 150 L 30 120" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.5" />
              
              {/* Dead circuit traces around right node */}
              <path d="M 320 130 L 320 100 L 280 100" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.2" />
              <path d="M 320 170 L 320 200 L 280 200" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.2" />
              <path d="M 340 150 L 370 150 L 370 180" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" opacity="0.2" />
              
              {/* Small data particles that fail to cross */}
              <circle cx="140" cy="150" r="3" fill="hsl(var(--secondary))">
                <animate attributeName="cx" values="100;180;100" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Error indicator - X mark at break */}
              <path 
                d="M 195 145 L 205 155 M 205 145 L 195 155" 
                stroke="hsl(var(--destructive))" 
                strokeWidth="2" 
                strokeLinecap="round"
                opacity="0.8"
              >
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <span className="text-6xl md:text-8xl font-bold text-primary/30">404</span>
          </div>

          {/* Main Messaging */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Error 404: Medication Data Lost in Transit
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Looks like this digital connection couldn't be verified. Don't worry, your medication list is safe. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="gap-2 min-w-[240px]"
            >
              <Link to="/">
                <Home size={20} />
                Verify Connection (Go to Homepage)
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="gap-2 min-w-[240px] border-primary/30 hover:border-primary"
            >
              <Link to="/how-it-works">
                <BookOpen size={20} />
                Check Our Guide (How It Works)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
