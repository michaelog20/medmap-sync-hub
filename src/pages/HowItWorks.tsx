import ScrollAnimations from "@/components/home/ScrollAnimations";

import stepCapture from "@/assets/step-capture.jpg";
import stepConfirm from "@/assets/step-confirm.jpg";
import stepShare from "@/assets/step-share.jpg";

const steps = [
  {
    number: 1,
    title: "Capture your meds",
    description: "Scan the barcode, photograph bottles or printouts (OCR), upload a CSV, or enter manually.",
    microcopy: ["Scan a medication", "Upload prescription", "Add manually"],
    image: stepCapture
  },
  {
    number: 2,
    title: "Confirm & review",
    description: "MedMap parses items and prompts you to confirm dose, route, and frequency. Interaction or allergy flags appear with simple explanations and clinician references.",
    microcopy: ["Confirm medication", "Resolve alert", "Edit details"],
    image: stepConfirm
  },
  {
    number: 3,
    title: "Share securely",
    description: "Export your verified list as a FHIR file or PDF, or generate a secure share link for a clinician or pharmacy. Each export shows a version stamp and brief provenance info.",
    microcopy: ["Export FHIR", "Download PDF", "Share with clinician"],
    image: stepShare
  }
];

const HowItWorks = () => {
  return (
    <main>
      <ScrollAnimations />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How MedMap Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three practical steps to safer medication management
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Flow line connecting steps */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2 animate-flow-line" />
            
            {/* Animated arrow connectors */}
            <div className="hidden lg:block absolute left-1/2 top-[25%] -translate-x-1/2 -translate-y-1/2">
              <div className="text-primary text-3xl animate-arrow-bounce">↓</div>
            </div>
            <div className="hidden lg:block absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
              <div className="text-primary text-3xl animate-arrow-bounce" style={{ animationDelay: '0.3s' }}>↓</div>
            </div>

            <div className="space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-8 scroll-fade-in ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                        {step.number}
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {step.microcopy.map((text, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold shadow-sm"
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Illustration */}
                  <div className="flex-1">
                    <div className="relative aspect-square max-w-md mx-auto">
                      <img
                        src={step.image}
                        alt={`Step ${step.number}: ${step.title}`}
                        className="w-full h-full object-contain rounded-2xl shadow-lg hover-lift animate-step-float"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
