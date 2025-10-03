import { Card } from "@/components/ui/card";
import { Camera, Shield, Share2, Bell, History, Users, BarChart3, Lock } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Medication aggregation — capture any way that works for you",
    description: "Barcode scan, bottle photo (OCR), CSV upload of pharmacy printouts, or manual entry. Guided fields (dose, route, frequency) help create a structured, complete list that clinicians can trust.",
  },
  {
    icon: Shield,
    title: "Automatic safety checks & plain-language advisories",
    description: "Real-time drug–drug interaction checks, drug–condition flags, and allergy alerts. Patient-friendly explanations accompany clinician-facing references so users understand risk and can escalate appropriately.",
  },
  {
    icon: Share2,
    title: "Interoperable export: FHIR + PDF",
    description: "Export a FHIR-compliant MedicationStatement or MedicationRequest file for import into friendly EHR/test environments, or download a printable PDF for appointments. Each export includes provenance metadata and version ID so receiving systems can see when the list was created and verified.",
  },
  {
    icon: Bell,
    title: "Refill reminders & adherence supports",
    description: "Set refill schedules and receive configurable reminders (daily, weekly, pre-refill). Optional adherence logging captures simple taken/missed events (user opt-in) that can inform clinical follow-up.",
  },
  {
    icon: History,
    title: "Versioning & audit trail",
    description: "Every change to the medication list is recorded: who made it (user or clinician), when, and what changed. Version history simplifies reconciliation and supports the pilot's audit methodology.",
  },
  {
    icon: Users,
    title: "Clinician & pharmacist tools",
    description: "Lightweight clinician view for receiving shared lists, with clear flags for items requiring follow-up. CSV/FHIR export options allow pharmacy systems or clinic test environments to ingest patient-verified lists easily.",
  },
  {
    icon: BarChart3,
    title: "Research & pilot features",
    description: "Consent-driven data capture for pre/post reconciliation audits, SUS usability scores, and time-to-complete metrics. De-identified analytics exports to support thesis analysis and quality improvement while preserving participant privacy.",
  },
  {
    icon: Lock,
    title: "Security & compliance",
    description: "TLS in transit, encrypted storage, and role-based access for clinician functions. Minimal data retention by default and clear export/delete tools for participants.",
  },
];

const Features = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Medication Safety
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to create, verify, and share a trusted medication list.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Features;
