import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, FlaskConical, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partnering with MedMap
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            We welcome collaboration with clinics, pharmacies, campus health services, researchers, and educators.
          </p>

          <Card className="p-8 bg-gradient-hero text-white">
            <h2 className="text-2xl font-semibold mb-6">Partner Benefits</h2>
            <ul className="space-y-3 mb-6">
              <li>• Access to pilot data and research outcomes</li>
              <li>• Co-branding opportunities for early adopters</li>
              <li>• Early product updates and feature requests</li>
            </ul>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Discuss Partnership <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Partners;
