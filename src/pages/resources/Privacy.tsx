import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from "lucide-react";

const privacySections = [
  {
    icon: FileText,
    title: "What we collect & why",
    content: [
      "Personal identifiers (name, email): scheduling & follow-up.",
      "Medication list data: for reconciliation audits and exports.",
      "Usage logs (timestamps, actions): usability and pilot metrics.",
      "Optional adherence metadata: only if you opt in.",
    ],
  },
  {
    icon: Lock,
    title: "How we protect your data",
    content: [
      "Encryption: TLS in transit; encrypted storage at rest.",
      "Access controls: limited to authorized research staff; identifiers stored separately from de-identified analytics.",
      "Audit & provenance: version metadata included in exports to support clinical workflows.",
    ],
  },
  {
    icon: UserCheck,
    title: "Consent, retention & deletion",
    content: [
      "Explicit consent required for pilot participants.",
      "Retention: data retained only as necessary for pilot analysis (typical pilot retention: 12 months) unless otherwise specified.",
      "Deletion & export: participants may request data export or deletion by emailing research@medmap.study.",
    ],
  },
  {
    icon: Eye,
    title: "Sharing & third parties",
    content: [
      "No advertising use — we never sell or share your data for advertising.",
      "Third-party services used in the demo (form handlers or analytics) will be listed; production integrations must have data processing agreements.",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & oversight",
    content: [
      "The pilot is designed to follow HIPAA principles and FHIR privacy best practices.",
      "The protocol will be submitted to the institutional REB prior to recruitment.",
    ],
  },
];

const Privacy = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy & Security Summary
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            MedMap is built with your safety and privacy in mind. We collect only the minimum data required for reconciliation and the pilot study, and we take steps to protect it.
          </p>

          <div className="space-y-6">
            {privacySections.map((section, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3 ml-16">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-8 bg-muted/30 border-primary/20">
            <div className="flex items-start gap-4">
              <AlertCircle size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Contact for privacy requests
                </h3>
                <p className="text-muted-foreground">
                  For data export, deletion requests, or privacy questions, please contact:{" "}
                  <a 
                    href="mailto:research@medmap.study" 
                    className="text-primary hover:underline font-medium"
                  >
                    research@medmap.study
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
