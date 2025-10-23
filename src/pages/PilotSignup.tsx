import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";

const PilotSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    ageRange: "",
    medications: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please review and agree to the consent terms to continue.",
        variant: "destructive",
      });
      return;
    }

    // Mock submission - in production, connect to Netlify/Formspree
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you within 3-5 business days.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      ageRange: "",
      medications: "",
      consent: false,
    });
  };

  return (
    <main className="pt-24 pb-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join the MedMap Pilot
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your interest in helping test MedMap. The pilot evaluates usability and the effect of a patient-verified medication list on reconciliation accuracy.
            </p>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What participation involves
            </h2>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Onboarding session (15–30 minutes):</strong> Create your initial medication list with researcher support (in-person or virtual).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Baseline audit:</strong> A researcher compares your usual medication list to a reference (e.g., pharmacy record or chart).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Follow-up (2–4 weeks):</strong> Update your MedMap list, then complete a follow-up audit and a brief interview (~20–30 minutes).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Optional questionnaires:</strong> System Usability Scale (SUS) and short experience surveys.</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              <strong>Time commitment:</strong> Total estimated time: 60–90 minutes over the pilot period.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Sign up for the pilot
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="John Doe"
                  className="focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john.doe@example.com"
                  className="focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(416) 555-0123"
                  className="focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div>
                <Label htmlFor="ageRange">Age Range *</Label>
                <select
                  id="ageRange"
                  required
                  value={formData.ageRange}
                  onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="">Select age range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45-54">45-54</option>
                  <option value="55-64">55-64</option>
                  <option value="65+">65+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="medications">How many medications do you currently take? *</Label>
                <Input
                  id="medications"
                  required
                  value={formData.medications}
                  onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
                  placeholder="e.g., 3-5 medications"
                  className="focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-4">Informed Consent</h3>
                <div className="space-y-3 text-sm text-muted-foreground mb-4">
                  <p>
                    <strong>Data collected:</strong> Personal identifiers (name, email), medication list data, usage logs, and optional adherence metadata.
                  </p>
                  <p>
                    <strong>How used:</strong> For reconciliation audits, usability analysis, and pilot research outcomes.
                  </p>
                  <p>
                    <strong>Privacy & security:</strong> Data encrypted in transit and at rest. Access limited to authorized research staff.
                  </p>
                  <p>
                    <strong>Risks & benefits:</strong> Minimal risk. Potential benefits include improved medication safety and contributing to healthcare research.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                  />
                  <Label htmlFor="consent" className="text-sm cursor-pointer">
                    I have read and understood the pilot information above. I consent to participate in the MedMap pilot study and understand that my data will be used for research purposes as described. *
                  </Label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>

          <p className="text-sm text-muted-foreground text-center">
            Questions about the pilot? Contact us at{" "}
            <a href="mailto:research@medmap.study" className="text-primary hover:underline">
              research@medmap.study
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PilotSignup;
