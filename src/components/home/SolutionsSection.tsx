import { Card, CardContent } from "@/components/ui/card";
import { Camera, Shield, Share2, Calendar } from "lucide-react";
import solutionCapture from "@/assets/solution-capture.png";
import solutionVerify from "@/assets/solution-verify.png";
import solutionShare from "@/assets/solution-share.png";
import solutionAdherence from "@/assets/solution-adherence.png";

const solutions = [
  {
    icon: Camera,
    title: "Capture Medications",
    description: "Scan barcodes, snap photos, or upload prescriptions. MedMap automatically recognizes and organizes your meds.",
    image: solutionCapture,
  },
  {
    icon: Shield,
    title: "Verify & Protect",
    description: "Run real-time interaction checks, allergy alerts, and version tracking — ensuring accuracy and safety.",
    image: solutionVerify,
  },
  {
    icon: Share2,
    title: "Share Securely",
    description: "Export medication lists as PDFs or FHIR files directly with providers and care teams.",
    image: solutionShare,
  },
  {
    icon: Calendar,
    title: "Support Adherence",
    description: "Refill reminders, dose tracking, and a history log keep patients on track with their therapy.",
    image: solutionAdherence,
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How MedMap Works for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four simple steps to safer, more coordinated medication management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group hover-lift overflow-hidden scroll-fade-in transition-all duration-300 hover:-translate-y-2 bg-slate-800/95 border-slate-700/50 hover:border-secondary/60 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden flex items-center justify-center bg-slate-900/50">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-auto h-40 object-contain transition-transform duration-300 hover:scale-110 drop-shadow-2xl"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 icon-glow">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
