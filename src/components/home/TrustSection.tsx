import { Shield, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "HIPAA & FHIR-compliant data security",
    description: "Your health data is protected with industry-standard encryption and security protocols",
  },
  {
    icon: Users,
    title: "Designed with pharmacists & care coordinators",
    description: "Built in collaboration with healthcare professionals to meet real clinical needs",
  },
  {
    icon: Lock,
    title: "Patients stay in control",
    description: "You decide what information to share and with whom — always",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust & Clinical Standards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Security, compliance, and patient-centered design at every step
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-card border border-border hover-lift scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 icon-glow">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center py-16 px-4 rounded-2xl bg-gradient-hero scroll-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Safer Medications, Better Care — For Everyone
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the pilot or contact us to learn more about how MedMap can help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/pilot-signup">
                Join the Pilot <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
