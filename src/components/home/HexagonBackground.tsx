import { useIsMobile } from "@/hooks/use-mobile";
import heroHexagonFallback from "@/assets/hero-hexagon-fallback.jpg";

const HexagonBackground = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="absolute inset-0 -z-10">
        <img
          src={heroHexagonFallback}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated SVG Hexagon Grid */}
      <svg
        className="absolute inset-0 w-full h-full animate-hexagon-flow"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hexagons"
            x="0"
            y="0"
            width="100"
            height="87"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
              fill="none"
              stroke="hsla(208, 88%, 44%, 0.15)"
              strokeWidth="1"
            />
            <polygon
              points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
              fill="hsla(192, 91%, 40%, 0.03)"
            />
          </pattern>
          
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(210, 40%, 98%)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "hsl(192, 91%, 85%)", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "hsl(208, 88%, 70%)", stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#hexGradient)" />
        <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-hexagon-drift" />
      </svg>

      {/* Animated Data Flow Dots */}
      <div className="absolute inset-0">
        <div className="hexagon-dot hexagon-dot-1" />
        <div className="hexagon-dot hexagon-dot-2" />
        <div className="hexagon-dot hexagon-dot-3" />
        <div className="hexagon-dot hexagon-dot-4" />
        <div className="hexagon-dot hexagon-dot-5" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/40" />
    </div>
  );
};

export default HexagonBackground;
