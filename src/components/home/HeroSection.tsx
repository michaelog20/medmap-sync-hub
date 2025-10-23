import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-phone-pills.avif";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Personal Medication Reconciliation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Keep Every Medication in <span className="text-primary">Sync</span> — <span className="text-primary">Safely and Simply</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              The first medication reconciliation platform built for patients, providers, and pharmacists.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With MedMap, you capture, verify, and share a single <strong>up-to-date medication list</strong>. Reduce errors, prevent adverse interactions, and give every care provider confidence they're working from the same record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/pilot-signup">
                  Get Early Access <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={heroMockup}
                  alt="MedMap medication list interface showing phone with medications"
                  className="w-full"
                />
                
                {/* Animated CSS Pills - video-like bouncing effect */}
                <div className="absolute inset-0 overflow-visible rounded-2xl pointer-events-none">
                  {/* Blue/Teal Capsule */}
                  <div className="absolute top-[15%] left-[35%] w-12 h-6 bg-gradient-to-r from-[#0B90C6] to-[#0F6FD1] rounded-full shadow-lg animate-pill-bounce-1" 
                       style={{ boxShadow: '0 4px 12px rgba(11, 144, 198, 0.4)' }} />
                  
                  {/* Orange Capsule */}
                  <div className="absolute top-[35%] right-[30%] w-10 h-5 bg-gradient-to-r from-[#FF8A00] to-[#FF6B00] rounded-full shadow-lg animate-pill-bounce-2"
                       style={{ boxShadow: '0 4px 12px rgba(255, 138, 0, 0.4)' }} />
                  
                  {/* White Tablet */}
                  <div className="absolute top-[25%] left-[45%] w-8 h-8 bg-white border-2 border-gray-200 rounded-full shadow-lg animate-pill-bounce-3"
                       style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }} />
                  
                  {/* Pink Capsule */}
                  <div className="absolute top-[45%] left-[38%] w-11 h-5 bg-gradient-to-r from-[#E91E63] to-[#C2185B] rounded-full shadow-lg animate-pill-bounce-4"
                       style={{ boxShadow: '0 4px 12px rgba(233, 30, 99, 0.4)' }} />
                  
                  {/* Yellow Tablet */}
                  <div className="absolute top-[55%] right-[35%] w-9 h-6 bg-gradient-to-br from-[#FFC107] to-[#FFA000] rounded-full shadow-lg animate-pill-bounce-5"
                       style={{ boxShadow: '0 4px 12px rgba(255, 193, 7, 0.4)' }} />
                  
                  {/* Additional smaller pills for depth */}
                  <div className="absolute top-[20%] right-[40%] w-6 h-3 bg-gradient-to-r from-[#9C27B0] to-[#7B1FA2] rounded-full shadow-md animate-pill-bounce-1 opacity-70" />
                  <div className="absolute top-[50%] left-[30%] w-7 h-4 bg-gradient-to-r from-[#4CAF50] to-[#388E3C] rounded-full shadow-md animate-pill-bounce-3 opacity-70" />
                </div>
                
                {/* Subtle scanning animation overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1/3 animate-scan-beam" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-hero rounded-full blur-3xl opacity-20 -z-10 animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
