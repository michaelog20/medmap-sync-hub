import { Camera, Shield, Share2, Bell, History, Users, BarChart3, Lock } from "lucide-react";
import ScrollAnimations from "@/components/home/ScrollAnimations";
import { FeaturePanel } from "@/components/features/FeaturePanel";

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
      
      {/* Interactive Data Panels Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Features at a Glance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hover or click any panel to explore detailed features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FeaturePanel
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;
