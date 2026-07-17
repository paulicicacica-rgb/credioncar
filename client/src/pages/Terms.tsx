import LegalContent, { LegalSection } from "@/components/LegalContent";
import PageLayout from "@/components/PageLayout";

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of the Credit On Cars website and services. By using our services, you agree to be bound by these Terms. If you do not agree, please do not use the services.",
    ],
  },
  {
    heading: "2. Eligibility",
    body: [
      "You must be at least 18 years old, own an eligible vehicle, and reside in a state where our services are available. Approval and credit limits are subject to our underwriting criteria and applicable law.",
    ],
  },
  {
    heading: "3. Your account",
    body: [
      "You are responsible for the accuracy of the information you provide and for maintaining the confidentiality of your account credentials. You agree to notify us promptly of any unauthorized use of your account.",
    ],
  },
  {
    heading: "4. Credit and repayment",
    body: [
      "If approved, you may receive a revolving line of credit secured by your vehicle. You agree to repay amounts you borrow, along with any applicable interest and fees, according to your account agreement.",
      "Specific rates, limits, and terms are disclosed to you before you accept your account and are governed by that account agreement.",
    ],
  },
  {
    heading: "5. Prohibited use",
    body: [
      "You agree not to misuse the services, including by providing false information, attempting to interfere with the platform, or using the services for any unlawful purpose.",
    ],
  },
  {
    heading: "6. Disclaimers and limitation of liability",
    body: [
      "The services are provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, Credit On Cars is not liable for indirect, incidental, or consequential damages arising from your use of the services.",
    ],
  },
  {
    heading: "7. Changes to these terms",
    body: [
      "We may update these Terms from time to time. Continued use of the services after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about these Terms can be sent to legal@creditoncar.com.",
    ],
  },
];

export default function Terms() {
  return (
    <PageLayout eyebrow="Legal" title="Terms of Service" showCta={false}>
      <LegalContent effectiveDate="July 1, 2026" sections={sections} />
    </PageLayout>
  );
}
