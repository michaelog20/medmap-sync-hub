import { Shield, Users, Lock } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "HIPAA & FHIR-compliant data security",
    description: "Your medication data is encrypted and protected to healthcare industry standards.",
  },
  {
    icon: Users,
    title: "Designed with pharmacists & care coordinators",
    description: "Built with input from healthcare professionals to meet real clinical needs.",
  },
  {
    icon: Lock,
    title: "Patients stay in control",
    description: "You decide what to share and with whom. Your data, your choice.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust and Security
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your medication information is sensitive. We've designed MedMap with privacy and security at its core.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-fade-in">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
