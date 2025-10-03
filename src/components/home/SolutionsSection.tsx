import { Card } from "@/components/ui/card";
import solutionCapture from "@/assets/solution-capture.jpg";
import solutionVerify from "@/assets/solution-verify.jpg";
import solutionShare from "@/assets/solution-share.jpg";
import solutionAdherence from "@/assets/solution-adherence.jpg";

const solutions = [
  {
    title: "Capture Medications",
    description: "Scan barcodes, snap photos, or upload prescriptions. MedMap automatically recognizes and organizes your meds.",
    image: solutionCapture,
  },
  {
    title: "Verify & Protect",
    description: "Run real-time interaction checks, allergy alerts, and version tracking — ensuring accuracy and safety.",
    image: solutionVerify,
  },
  {
    title: "Share Securely",
    description: "Export medication lists as PDFs or FHIR files directly with providers and care teams.",
    image: solutionShare,
  },
  {
    title: "Support Adherence",
    description: "Refill reminders, dose tracking, and a history log keep patients on track with their therapy.",
    image: solutionAdherence,
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            One Trusted Medication List. Shared Securely.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MedMap brings together everything you need to manage and share your medications safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-md transition-shadow duration-300 bg-gradient-card border-border"
            >
              <div className="mb-4">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-20 h-20 object-contain mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
