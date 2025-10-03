const PilotProtocol = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Pilot Protocol (Summary)
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              The MedMap pilot evaluates how well a unified medication list improves safety and reduces reconciliation errors.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Design
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Participants:</strong> patients on 3+ medications, pharmacists, and care coordinators.</li>
                <li>• <strong>Methods:</strong> patients use MedMap to create and share lists during visits.</li>
                <li>• <strong>Measures:</strong> time to complete, System Usability Score (SUS), number of discrepancies resolved.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Timeline
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Phase 1:</strong> Participant recruitment and onboarding (2–3 weeks)</li>
                <li>• <strong>Phase 2:</strong> Active pilot period with medication list creation and updates (4–6 weeks)</li>
                <li>• <strong>Phase 3:</strong> Data analysis and reporting (3–4 weeks)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                For collaborators
              </h2>
              <p className="text-muted-foreground">
                Contact us for the full IRB-approved protocol at{" "}
                <a href="mailto:research@medmap.study" className="text-primary hover:underline">
                  research@medmap.study
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PilotProtocol;
