import stepCapture from "@/assets/step-capture.jpg";
import stepConfirm from "@/assets/step-confirm.jpg";
import stepShare from "@/assets/step-share.jpg";

const steps = [
  {
    number: "01",
    title: "Capture your meds",
    description: "Scan the barcode, photograph bottles or printouts (OCR), upload a CSV, or enter manually.",
    microcopy: ["Scan a medication", "Upload prescription", "Add manually"],
    image: stepCapture,
  },
  {
    number: "02",
    title: "Confirm & review",
    description: "MedMap parses items and prompts you to confirm dose, route, and frequency. Interaction or allergy flags appear with simple explanations and clinician references.",
    microcopy: ["Confirm medication", "Resolve alert", "Edit details"],
    image: stepConfirm,
  },
  {
    number: "03",
    title: "Share securely",
    description: "Export your verified list as a FHIR file or PDF, or generate a secure share link for a clinician or pharmacy. Each export shows a version stamp and brief provenance info.",
    microcopy: [],
    image: stepShare,
  },
];

const HowItWorks = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How MedMap Works
          </h1>
          <p className="text-xl text-muted-foreground">
            Three practical steps to safer medication management
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <span className="text-5xl font-bold text-primary/20">
                    {step.number}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.microcopy.map((text, idx) => (
                    <span
                      key={idx}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-hero rounded-full blur-2xl opacity-20 -z-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HowItWorks;
