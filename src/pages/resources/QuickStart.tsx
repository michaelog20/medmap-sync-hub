import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card } from "@/components/ui/card";

const QuickStart = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Quick-Start Guide
          </h1>

          <Card className="p-8">
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to MedMap! This comprehensive guide helps you set up your first medication list in minutes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-6">Steps:</h2>
            <ul className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>Open the MedMap app or web form.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>Add your medicines (scan the barcode, snap a photo, or type them in).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>Review and confirm your list.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">•</span>
                <span>Share securely with your clinician or pharmacist.</span>
              </li>
            </ul>

            <p className="text-muted-foreground mb-8">
              Need more help? Check out the <a href="/resources/faq" className="text-primary hover:underline">FAQ</a> or contact support at{" "}
              <a href="mailto:research@medmap.study" className="text-primary hover:underline">
                research@medmap.study
              </a>
            </p>

            <Button size="lg" className="gap-2" asChild>
              <a href="/resources-files/QuickStart_MedMap.pdf" download>
                <Download size={20} />
                Download Quick-Start PDF
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default QuickStart;
