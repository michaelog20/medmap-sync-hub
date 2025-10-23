import { Check, Shield, Share2, Bell, History, Lock } from "lucide-react";

const features = [
  {
    icon: Check,
    text: "Smart medication capture (barcode, OCR, uploads, manual entry)"
  },
  {
    icon: Shield,
    text: "Automatic interaction & allergy safety checks"
  },
  {
    icon: Share2,
    text: "Secure sharing in PDF & FHIR formats"
  },
  {
    icon: Bell,
    text: "Refill reminders & adherence support"
  },
  {
    icon: History,
    text: "Version history & audit trail"
  },
  {
    icon: Lock,
    text: "HIPAA & FHIR-compliant data security"
  }
];

const FeaturesGlance = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features at a Glance
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for safer medication management
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover-lift scroll-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-glow">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                </div>
                <p className="text-foreground">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGlance;
