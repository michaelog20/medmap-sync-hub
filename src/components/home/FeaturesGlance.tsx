import { Check } from "lucide-react";

const features = [
  "Smart medication capture (barcode, OCR, uploads, manual entry)",
  "Automatic interaction & allergy safety checks",
  "Secure sharing in PDF & FHIR formats",
  "Refill reminders & adherence support",
  "Version history & audit trail",
];

const FeaturesGlance = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Features at a Glance
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check size={16} className="text-primary" />
                  </div>
                </div>
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGlance;
