import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const QuickStart = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Quick-Start Guide
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to MedMap! This one-page starter helps you set up your first medication list in minutes.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Steps:</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Open the MedMap app or web form.</li>
              <li>• Add your medicines (scan the barcode, snap a photo, or type them in).</li>
              <li>• Review and confirm your list.</li>
              <li>• Share securely with your clinician or pharmacist.</li>
            </ul>

            <p className="text-muted-foreground mt-8">
              Need more help? Check out the <a href="/resources/faq" className="text-primary hover:underline">FAQ</a> or contact support at{" "}
              <a href="mailto:research@medmap.study" className="text-primary hover:underline">
                research@medmap.study
              </a>
            </p>

            <div className="mt-8">
              <Button size="lg" className="gap-2">
                <Download size={20} />
                Download Quick-Start PDF
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                (PDF available in production version)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuickStart;
