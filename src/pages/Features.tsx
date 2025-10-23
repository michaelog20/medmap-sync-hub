import { Camera, Shield, Share2, Bell, History, Users, BarChart3, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimations from "@/components/home/ScrollAnimations";

const features = [
  {
    icon: Camera,
    title: "Medication Aggregation",
    description: "Capture medications any way that works for you — barcode scan, bottle photo (OCR), CSV upload of pharmacy printouts, or manual entry. Guided fields (dose, route, frequency) help create a structured, complete list that clinicians can trust."
  },
  {
    icon: Shield,
    title: "Automatic Safety Checks",
    description: "Real-time drug–drug interaction checks, drug–condition flags, and allergy alerts. Patient-friendly explanations accompany clinician-facing references so users understand risk and can escalate appropriately."
  },
  {
    icon: Share2,
    title: "Interoperable Export: FHIR + PDF",
    description: "Export a FHIR-compliant MedicationStatement or MedicationRequest file for import into friendly EHR/test environments, or download a printable PDF for appointments. Each export includes provenance metadata and version ID."
  },
  {
    icon: Bell,
    title: "Refill Reminders & Adherence Supports",
    description: "Set refill schedules and receive configurable reminders (daily, weekly, pre-refill). Optional adherence logging captures simple taken/missed events (user opt-in) that can inform clinical follow-up."
  },
  {
    icon: History,
    title: "Versioning & Audit Trail",
    description: "Every change to the medication list is recorded: who made it (user or clinician), when, and what changed. Version history simplifies reconciliation and supports the pilot's audit methodology."
  },
  {
    icon: Users,
    title: "Clinician & Pharmacist Tools",
    description: "Lightweight clinician view for receiving shared lists, with clear flags for items requiring follow-up. CSV/FHIR export options allow pharmacy systems or clinic test environments to ingest patient-verified lists easily."
  },
  {
    icon: BarChart3,
    title: "Research & Pilot Features",
    description: "Consent-driven data capture for pre/post reconciliation audits, SUS usability scores, and time-to-complete metrics. De-identified analytics exports to support thesis analysis and quality improvement while preserving participant privacy."
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "TLS in transit, encrypted storage, and role-based access for clinician functions. Minimal data retention by default and clear export/delete tools for participants."
  }
];

const Features = () => {
  return (
    <main>
      <ScrollAnimations />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for safer medication management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="hover-lift scroll-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="icon-glow mb-4">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;
