import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const patientFAQs = [
  {
    question: "How do I enter my medicines?",
    answer: "You can add medications using barcode scan, photo OCR (take a picture of your pill bottle), upload a CSV file from your pharmacy, or enter them manually with guided fields.",
  },
  {
    question: "Can I share my list?",
    answer: "Yes, you can securely share your medication list as a PDF for appointments or as a FHIR export file that can be imported into compatible clinical systems.",
  },
  {
    question: "Who sees my data?",
    answer: "Only you decide what to share and with whom. Your medication data remains private unless you explicitly choose to export or share it with a healthcare provider.",
  },
  {
    question: "Is my information secure?",
    answer: "Yes. MedMap uses encryption in transit (TLS) and at rest, with access limited to authorized users. We follow HIPAA principles and FHIR privacy best practices.",
  },
  {
    question: "What if I make a mistake?",
    answer: "You can edit or delete any medication entry at any time. All changes are tracked in the version history, so you can see what changed and when.",
  },
];

const clinicianFAQs = [
  {
    question: "How accurate are lists?",
    answer: "All entries are verified by patients and flagged for potential issues such as drug interactions, allergies, or missing information that requires follow-up.",
  },
  {
    question: "What formats can I receive?",
    answer: "You can receive medication lists as a PDF for quick reference or as a FHIR R4 MedicationStatement/MedicationRequest file for integration with EHR systems.",
  },
  {
    question: "Does it replace EMR medication lists?",
    answer: "No, MedMap complements existing EMR systems. It helps patients maintain their own verified list and helps reconcile discrepancies between patient records and clinical documentation.",
  },
  {
    question: "How do I access shared lists?",
    answer: "Patients can generate a secure share link or export a file. The lightweight clinician view shows the medication list with clear flags for items requiring review.",
  },
];

const FAQ = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            FAQ — Patients & Clinicians
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              For Patients
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {patientFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`patient-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[1.05rem] leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              For Clinicians
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {clinicianFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`clinician-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[1.05rem] leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
