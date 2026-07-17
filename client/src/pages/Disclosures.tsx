import LegalContent, { LegalSection } from "@/components/LegalContent";
import PageLayout from "@/components/PageLayout";

const sections: LegalSection[] = [
  {
    heading: "Rates and terms",
    body: [
      "Actual interest rates, credit limits, and terms are based on your application, your vehicle's value, your creditworthiness, and applicable law. Advertised figures such as \"up to $10,000\" represent maximums and are not guaranteed. Not all applicants will qualify.",
    ],
  },
  {
    heading: "Checking your rate",
    body: [
      "Checking your rate uses a soft credit inquiry that does not affect your credit score. If you proceed with an application, a hard inquiry may be performed, which can affect your score.",
    ],
  },
  {
    heading: "Secured credit",
    body: [
      "Your line of credit is secured by your vehicle. As long as your account remains in good standing, you keep and drive your car. Failure to meet the terms of your account agreement could result in collection activity or, ultimately, repossession as permitted by law.",
    ],
  },
  {
    heading: "State availability",
    body: [
      "Products and services are only available in states where Credit On Cars is licensed or otherwise authorized to operate. Availability and specific terms may vary by state.",
    ],
  },
  {
    heading: "Not financial advice",
    body: [
      "Information on this website is provided for general informational purposes only and does not constitute financial, legal, or tax advice. You should consider your own circumstances and consult a professional where appropriate.",
    ],
  },
  {
    heading: "Partners",
    body: [
      "Credit products may be offered through or in partnership with third-party financial institutions. Specific partner and licensing disclosures are provided during the application process.",
    ],
  },
];

export default function Disclosures() {
  return (
    <PageLayout eyebrow="Legal" title="Disclosures" showCta={false}>
      <LegalContent effectiveDate="July 1, 2026" sections={sections} />
    </PageLayout>
  );
}
