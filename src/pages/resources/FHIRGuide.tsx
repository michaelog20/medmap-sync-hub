import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";

const FHIRGuide = () => {

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            FHIR Export Guide (Technical)
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            MedMap supports export in FHIR R4 MedicationStatement and MedicationRequest formats.
          </p>

          <Card className="p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Key Points
                </h2>
              </div>
            </div>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>
                  <strong className="text-foreground">MedicationStatement</strong> = what the patient is taking (self-reported, reconciled).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>
                  <strong className="text-foreground">MedicationRequest</strong> = what has been prescribed.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>
                  Includes fields for <strong className="text-foreground">medication code, dosage, route, frequency, and notes</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>
                  Compatible with <strong className="text-foreground">major EHR systems</strong> that support FHIR R4.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>
                  <strong className="text-foreground">Sample payloads available</strong> for integration testing.
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              FHIR Export Availability
            </h3>
            <p className="text-muted-foreground border-l-4 border-primary pl-4 py-2">
              A downloadable, FHIR-compliant version of the Medication List will be directly accessible for export within the main MedMap application and pilot environments.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default FHIRGuide;
