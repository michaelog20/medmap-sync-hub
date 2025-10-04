import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

const FHIRGuide = () => {
  const [showSample, setShowSample] = useState(false);

  const samplePayload = `{
  "resourceType": "MedicationStatement",
  "id": "example-med-statement",
  "status": "active",
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "308136",
        "display": "Amoxicillin 500 MG Oral Capsule"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  },
  "effectivePeriod": {
    "start": "2024-01-15"
  },
  "dosage": [
    {
      "text": "Take one capsule three times daily",
      "timing": {
        "repeat": {
          "frequency": 3,
          "period": 1,
          "periodUnit": "d"
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral route"
          }
        ]
      },
      "doseAndRate": [
        {
          "doseQuantity": {
            "value": 500,
            "unit": "mg",
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          }
        }
      ]
    }
  ]
}`;

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            FHIR Export Guide
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              MedMap supports export in FHIR R4 MedicationStatement and MedicationRequest formats.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Key Points
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>MedicationStatement</strong> = what the patient is taking (self-reported, reconciled).</li>
                <li>• <strong>MedicationRequest</strong> = what has been prescribed.</li>
                <li>• Includes fields for medication code, dosage, route, frequency, and notes.</li>
                <li>• Compatible with major EHR systems that support FHIR R4.</li>
                <li>• Sample payloads available for integration testing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Sample FHIR Payload
              </h2>
              <p className="text-muted-foreground mb-4">
                Below is a simplified example of a FHIR R4 MedicationStatement resource. Click to view the JSON structure.
              </p>
              
              <Button
                onClick={() => setShowSample(!showSample)}
                variant="outline"
                className="mb-4 gap-2"
              >
                {showSample ? (
                  <>
                    <ChevronUp size={20} />
                    Hide sample payload
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    Show sample payload
                  </>
                )}
              </Button>

              {showSample && (
                <div className="bg-muted p-6 rounded-lg border border-border overflow-x-auto">
                  <pre className="text-sm text-foreground whitespace-pre-wrap">
                    {samplePayload}
                  </pre>
                </div>
              )}

              <div className="mt-6">
                <Button className="gap-2">
                  <Download size={20} />
                  Download Sample FHIR Export
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  (Full JSON file available in production version)
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Integration Support
              </h2>
              <p className="text-muted-foreground">
                For technical questions about FHIR integration or to request sample exports for testing, contact{" "}
                <a href="mailto:research@medmap.study" className="text-primary hover:underline">
                  research@medmap.study
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FHIRGuide;
