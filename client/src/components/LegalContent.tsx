export interface LegalSection {
  heading: string;
  body: string[];
}

/**
 * Renders a list of legal/policy sections in a readable prose column.
 */
export default function LegalContent({
  effectiveDate,
  sections,
}: {
  effectiveDate: string;
  sections: LegalSection[];
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: {effectiveDate}
      </p>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-12 border-t border-border pt-6">
        This page is provided for general informational purposes and is not legal
        or financial advice. Please review the full terms provided during your
        application.
      </p>
    </div>
  );
}
