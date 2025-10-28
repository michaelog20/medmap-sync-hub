import { useEffect, useRef, useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}

export const TeamMember = ({ name, role, bio, image, index }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementTop = rect.top + scrollPosition;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax only when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = (scrollPosition - elementTop + windowHeight) * 0.02; // Subtle 2% movement
        setParallaxOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="team-member-card scroll-fade-in"
      style={{ 
        animationDelay: `${index * 0.15}s`,
        transform: `translateY(${parallaxOffset}px)`
      }}
    >
      <div className="team-member-inner">
        <div className="team-member-image-container">
          <div 
            className="team-member-image"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="team-member-heartbeat" />
        </div>
        <div className="team-member-content">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <p className="text-primary font-semibold mb-3">{role}</p>
          <p className="text-foreground/80 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};
