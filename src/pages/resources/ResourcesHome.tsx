import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { FileText, HelpCircle, Shield, FlaskConical, Code, Handshake, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Quick-Start Guide",
    description: "Get started with MedMap in minutes with our step-by-step guide.",
    icon: FileText,
    path: "/resources/quickstart",
  },
  {
    title: "FAQ — Patients & Clinicians",
    description: "Common questions answered for both patients and healthcare providers.",
    icon: HelpCircle,
    path: "/resources/faq",
  },
  {
    title: "Privacy & Security Summary",
    description: "Learn how we protect your data and maintain compliance.",
    icon: Shield,
    path: "/resources/privacy",
  },
  {
    title: "Pilot Protocol (Summary)",
    description: "Overview of the MedMap pilot study design and methodology.",
    icon: FlaskConical,
    path: "/resources/pilot-protocol",
  },
  {
    title: "FHIR Export Guide (Technical)",
    description: "Technical documentation for FHIR integration and data export.",
    icon: Code,
    path: "/resources/fhir-guide",
  },
  {
    title: "Partnering with MedMap",
    description: "Collaboration opportunities for clinics, pharmacies, and researchers.",
    icon: Handshake,
    path: "/resources/partners",
  },
];

const ResourcesHome = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            Quick resources for participants and partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <Link key={index} to={resource.path} className="group">
              <Card className="p-6 h-full hover-lift transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 icon-glow">
                    <resource.icon size={24} className="text-primary" />
                  </div>
                  <ArrowRight 
                    size={20} 
                    className="text-muted-foreground ml-auto transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground">
                  {resource.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ResourcesHome;
