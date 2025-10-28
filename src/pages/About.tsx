import ScrollAnimations from "@/components/home/ScrollAnimations";
import { TeamMember } from "@/components/about/TeamMember";
import projectLeadImage from "@/assets/team-project-lead.jpg";

const teamMembers = [
  {
    name: "Michael Tesfu Teferi",
    role: "Project Lead & Health Informatics Researcher",
    bio: "Michael is a Master's student in Health Informatics with a passion for medication safety and patient empowerment. He leads the MedMap research pilot and collaborates with clinical partners to ensure the tool meets real-world needs.",
    image: projectLeadImage
  },
  {
    name: "Dr. Rohan Kumar",
    role: "Clinical Advisor & Pharmacist",
    bio: "Dr. Kumar is a community pharmacist with over 15 years of experience. He provides clinical guidance on medication reconciliation workflows and helps validate MedMap's safety checks against real-world pharmacy practice.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
  },
  {
    name: "Emily Thompson",
    role: "Software Engineering Lead",
    bio: "Emily brings expertise in healthcare interoperability and FHIR standards. She architects MedMap's technical infrastructure to ensure secure, standards-compliant data exchange with clinical systems.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    name: "James Park",
    role: "UX Designer & Patient Advocate",
    bio: "James focuses on making complex healthcare technology accessible and intuitive. His user-centered design approach ensures MedMap serves patients of all technical backgrounds and health literacy levels.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  }
];

const About = () => {
  return (
    <main>
      <ScrollAnimations />
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 scroll-fade-in animated-underline">
            About MedMap
          </h1>
          <div className="space-y-6 text-lg text-foreground/90 scroll-fade-in">
            <p>
              MedMap was created to tackle a common and dangerous problem: inconsistent medication
              records across patients, pharmacies, and clinics. When medication lists are fragmented or out of
              date, reconciliation during clinic visits and care transitions becomes slow and error-prone — and
              that leads to adverse drug events, avoidable hospital visits, and frustrated clinicians.
            </p>
            <p>
              Our mission is to empower patients and streamline reconciliation by providing a simple, standards-based
              tool that produces a single trusted medication list. MedMap combines fast capture methods
              (barcode scanning, photo/OCR, CSV upload, and manual entry) with evidence-informed safety
              checks. The result is a patient-verified medication list that patients can export as a PDF for
              appointments or as a FHIR MedicationStatement / MedicationRequest file for clinical systems.
            </p>
            <p>
              MedMap was developed as a research-driven pilot led by a Master's student in Health Informatics
              in partnership with campus health services and participating community pharmacists. The project
              emphasizes interoperability (FHIR), provenance (who changed what and when), and privacy-first
              design. Our aim is twofold: improve day-to-day medication safety for patients, and produce
              evidence about feasibility and impact that can inform wider clinical adoption.
            </p>
            <p>
              If you're a patient, clinician, or pharmacist interested in safer medication reconciliation, MedMap is
              designed to be practical, verifiable, and research-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to safer medication management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
