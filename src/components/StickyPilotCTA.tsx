import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyPilotCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Sticky Pill Button */}
      <button
        onClick={() => setIsExpanded(true)}
        className="fixed top-20 right-4 z-40 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-sm md:text-base"
      >
        Join the Pilot
      </button>

      {/* Expanded Panel/Modal */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
            onClick={() => setIsExpanded(false)}
          />

          {/* Panel */}
          <div className="fixed top-24 right-4 z-50 bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-[calc(100vw-2rem)] animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-muted-foreground" />
            </button>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Safer Medications, Better Care — For Everyone
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join the waitlist and be part of the future of medication safety.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/pilot-signup" onClick={() => setIsExpanded(false)}>
                  Join the Waitlist <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StickyPilotCTA;
