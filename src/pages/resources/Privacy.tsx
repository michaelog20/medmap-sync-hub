const Privacy = () => {
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy & Security
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              MedMap is built with your safety and privacy in mind. We collect only the minimum data required for reconciliation and the pilot study, and we take steps to protect it.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                What we collect & why
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Personal identifiers (name, email):</strong> scheduling & follow-up.</li>
                <li>• <strong>Medication list data:</strong> for reconciliation audits and exports.</li>
                <li>• <strong>Usage logs (timestamps, actions):</strong> usability and pilot metrics.</li>
                <li>• <strong>Optional adherence metadata:</strong> only if you opt in.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                How we protect your data
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Encryption:</strong> TLS in transit; encrypted storage at rest.</li>
                <li>• <strong>Access controls:</strong> limited to authorized research staff; identifiers stored separately from de-identified analytics.</li>
                <li>• <strong>Audit & provenance:</strong> version metadata included in exports to support clinical workflows.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Consent, retention & deletion
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Explicit consent required</strong> for pilot participants.</li>
                <li>• <strong>Retention:</strong> data retained only as necessary for pilot analysis (typical pilot retention: 12 months) unless otherwise specified.</li>
                <li>• <strong>Deletion & export:</strong> participants may request data export or deletion by emailing research@medmap.study.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Sharing & third parties
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>No advertising use</strong> — we never sell or share your data for advertising.</li>
                <li>• Third-party services used in the demo (form handlers or analytics) will be listed; production integrations must have data processing agreements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Compliance & oversight
              </h2>
              <p className="text-muted-foreground">
                The pilot is designed to follow HIPAA principles and FHIR privacy best practices. The protocol will be submitted to the institutional REB prior to recruitment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Contact for privacy requests
              </h2>
              <p className="text-muted-foreground">
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

export default Privacy;
