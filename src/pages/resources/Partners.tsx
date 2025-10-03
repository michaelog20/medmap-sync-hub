import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, GraduationCap, FlaskConical, CheckCircle } from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Clinics & Pharmacies",
    description: "Streamline reconciliation and improve patient safety with verified medication lists.",
  },
  {
    icon: GraduationCap,
    title: "Campus Health Services",
    description: "Support students with complex medication needs and polypharmacy challenges.",
  },
  {
    icon: FlaskConical,
    title: "Researchers & Educators",
    description: "Evaluate usability and safety outcomes in real-world clinical settings.",
  },
];

const benefits = [
  "Access to pilot data and insights",
  "Co-branding opportunities",
  "Early product updates and feature input",
  "Collaboration on research publications",
];

const Partners = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Partnering with MedMap
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            We welcome collaboration with organizations committed to improving medication safety and patient care.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              We collaborate with:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {partnerTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Partner Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Interested in partnering?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us to discuss partnership opportunities and how MedMap can support your organization.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <p className="text-sm mt-4 opacity-75">
              Email: <a href="mailto:research@medmap.study" className="underline">research@medmap.study</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Partners;
