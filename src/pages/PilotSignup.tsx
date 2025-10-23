import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimations from "@/components/home/ScrollAnimations";

const PilotSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    medications: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please agree to the consent statement to participate.",
        variant: "destructive"
      });
      return;
    }

    // Mock endpoint - replace with actual form handler
    toast({
      title: "Application received!",
      description: "We'll contact you within one week to schedule your onboarding session.",
    });
    setFormData({ name: "", email: "", phone: "", medications: "", consent: false });
  };

  return (
    <main>
      <ScrollAnimations />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 scroll-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join the MedMap Pilot
            </h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your interest in helping test MedMap. The pilot evaluates usability and the effect of a patient-verified medication list on reconciliation accuracy.
            </p>
          </div>

          <Card className="mb-8 scroll-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="text-2xl">What participation involves</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Onboarding session (15–30 minutes)</h3>
                <p className="text-muted-foreground">
                  Create your initial medication list with researcher support (in-person or virtual).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Baseline audit</h3>
                <p className="text-muted-foreground">
                  A researcher compares your usual medication list to a reference (e.g., pharmacy record or chart).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Follow-up (2–4 weeks)</h3>
                <p className="text-muted-foreground">
                  Update your MedMap list, then complete a follow-up audit and a brief interview (~20–30 minutes).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Optional questionnaires</h3>
                <p className="text-muted-foreground">
                  System Usability Scale (SUS) and short experience surveys.
                </p>
              </div>
              <div className="pt-4 border-t">
                <p className="font-semibold">Time commitment:</p>
                <p className="text-muted-foreground">Total estimated time: 60–90 minutes over the pilot period.</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="scroll-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Data collected</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal identifiers (name, email)</li>
                  <li>Medication list data</li>
                  <li>Usage logs (timestamps, actions)</li>
                  <li>Optional adherence metadata</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="scroll-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>How used</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Data will be used for reconciliation audits, usability analysis, and thesis research. All data is de-identified for analysis and never shared for advertising.
                </p>
              </CardContent>
            </Card>

            <Card className="scroll-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle>Privacy & security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TLS encryption in transit, encrypted storage at rest, and role-based access controls. See our Privacy page for full details.
                </p>
              </CardContent>
            </Card>

            <Card className="scroll-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle>Risks & benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Minimal risk. Potential benefits include a safer medication list and contributing to improved reconciliation practices. No monetary compensation provided.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="scroll-fade-in" style={{ animationDelay: "0.6s" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Sign up for the pilot</CardTitle>
              <CardDescription className="text-base">
                Complete this form to express interest. We'll contact you to schedule your onboarding session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Full name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">Email address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">Phone number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <Label htmlFor="medications" className="text-base">
                    How many medications do you currently take? *
                  </Label>
                  <Textarea
                    id="medications"
                    required
                    rows={3}
                    placeholder="Please provide an approximate number and any relevant details"
                    value={formData.medications}
                    onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
                    className="mt-2 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 border rounded-lg bg-secondary/5">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="consent" className="text-base font-semibold cursor-pointer">
                      Consent to participate *
                    </Label>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      I understand what the pilot involves, how my data will be used, and that I can withdraw at any time. 
                      I consent to participate in the MedMap pilot study and agree to the data collection and usage as described above.
                    </p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default PilotSignup;
