import stepCapture from "@/assets/step-capture.jpg";
import stepConfirm from "@/assets/step-confirm.jpg";
import stepShare from "@/assets/step-share.jpg";
import { ArrowRight } from "lucide-react";
import ScrollAnimations from "@/components/home/ScrollAnimations";

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
      <ScrollAnimations />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How MedMap Works
          </h1>
          <p className="text-xl text-muted-foreground">
            Three practical steps to safer medication management
          </p>
        </div>

        {/* Flow line connecting steps */}
        <div className="max-w-5xl mx-auto mb-8 hidden md:block">
          <svg className="w-full h-16" viewBox="0 0 1000 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 30 H330 L350 30 L370 30 H630 L650 30 L670 30 H950"
              stroke="hsl(208 88% 44%)"
              strokeWidth="2"
              strokeDasharray="1000"
              className="animate-flow-line"
              opacity="0.3"
            />
            <circle cx="190" cy="30" r="8" fill="hsl(208 88% 44%)" opacity="0.5" />
            <circle cx="500" cy="30" r="8" fill="hsl(208 88% 44%)" opacity="0.5" />
            <circle cx="810" cy="30" r="8" fill="hsl(208 88% 44%)" opacity="0.5" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center scroll-fade-in`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="text-primary/30" size={32} />
                  )}
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
                <div className="relative group">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-hero rounded-full blur-2xl opacity-20 -z-10 animate-pulse-glow" />
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
