import ScrollAnimations from "@/components/home/ScrollAnimations";

const About = () => {
  return (
    <main className="pt-24 pb-20">
      <ScrollAnimations />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animated-underline">
            About MedMap
          </h1>

          <div className="prose prose-lg max-w-none scroll-fade-in">
            <p className="text-lg text-muted-foreground mb-6">
              MedMap was created to tackle a common and dangerous problem: inconsistent medication records across patients, pharmacies, and clinics. When medication lists are fragmented or out of date, reconciliation during clinic visits and care transitions becomes slow and error-prone — and that leads to adverse drug events, avoidable hospital visits, and frustrated clinicians.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to empower patients and streamline reconciliation by providing a simple, standards-based tool that produces a single trusted medication list. MedMap combines fast capture methods (barcode scanning, photo/OCR, CSV upload, and manual entry) with evidence-informed safety checks. The result is a patient-verified medication list that patients can export as a PDF for appointments or as a FHIR MedicationStatement / MedicationRequest file for clinical systems.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              MedMap was developed as a research-driven pilot led by a Master's student in Health Informatics in partnership with campus health services and participating community pharmacists. The project emphasizes interoperability (FHIR), provenance (who changed what and when), and privacy-first design. Our aim is twofold: improve day-to-day medication safety for patients, and produce evidence about feasibility and impact that can inform wider clinical adoption.
            </p>

            <p className="text-lg text-muted-foreground">
              If you're a patient, clinician, or pharmacist interested in safer medication reconciliation, MedMap is designed to be practical, verifiable, and research-ready.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
