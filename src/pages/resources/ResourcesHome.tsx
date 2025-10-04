import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { FileText, HelpCircle, Shield, FlaskConical, Code, Users } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Quick-Start Guide (PDF)",
    description: "One-page starter to set up your first medication list in minutes.",
    link: "/resources/quickstart",
  },
  {
    icon: HelpCircle,
    title: "FAQ — Patients & Clinicians",
    description: "Common questions about using MedMap and sharing medication lists.",
    link: "/resources/faq",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "How we protect your medication data and maintain compliance.",
    link: "/resources/privacy",
  },
  {
    icon: FlaskConical,
    title: "Pilot Protocol",
    description: "Overview of the MedMap pilot study design and measures.",
    link: "/resources/pilot-protocol",
  },
  {
    icon: Code,
    title: "FHIR Export Guide",
    description: "Technical documentation for FHIR R4 medication exports.",
    link: "/resources/fhir-guide",
  },
  {
    icon: Users,
    title: "Partnering with MedMap",
    description: "Collaboration opportunities for clinics, pharmacies, and researchers.",
    link: "/resources/partners",
  },
];

const ResourcesHome = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            Quick resources for participants and partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <Link key={index} to={resource.link}>
              <Card className="p-6 h-full hover:shadow-md transition-shadow duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
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
