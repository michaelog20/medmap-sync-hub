import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-phone-transparent.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-primary/20 text-primary-foreground backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
                Personal Medication Reconciliation
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Keep Every Medication in <span className="text-secondary">Sync</span> — <span className="text-secondary">Safely and Simply</span>
            </h1>
            <p className="text-xl text-foreground/90 mb-4">
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
              <img
                src={heroMockup}
                alt="MedMap secure medication platform with glowing phone interface and data network visualization"
                className="w-full h-auto animate-hero-float drop-shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
