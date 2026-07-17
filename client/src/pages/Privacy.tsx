import LegalContent, { LegalSection } from "@/components/LegalContent";
import PageLayout from "@/components/PageLayout";

const sections: LegalSection[] = [
  {
    heading: "1. Overview",
    body: [
      "Credit On Cars (\"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using our website and services, you agree to the practices described here.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "We collect information you provide directly, such as your name, contact details, and information about your vehicle when you check your rate or apply.",
      "We also collect information automatically as you use our site, including device and usage data, and information from third parties such as credit bureaus and identity verification providers.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use your information to evaluate applications, provide and service your account, verify your identity, prevent fraud, comply with legal obligations, and improve our products.",
      "Checking your rate uses a soft inquiry and does not affect your credit score.",
    ],
  },
  {
    heading: "4. How we share information",
    body: [
      "We may share information with service providers who help us operate, with credit bureaus and financial partners as needed to provide the service, and when required by law. We do not sell your personal information.",
    ],
  },
  {
    heading: "5. Your choices",
    body: [
      "You may access, correct, or request deletion of your personal information, subject to legal and operational limits. You can also opt out of certain marketing communications at any time.",
    ],
  },
  {
    heading: "6. Data security",
    body: [
      "We use administrative, technical, and physical safeguards designed to protect your information. No system is perfectly secure, but we work to keep your data safe.",
    ],
  },
  {
    heading: "7. Contact us",
    body: [
      "If you have questions about this Privacy Policy, contact us at privacy@creditoncar.com.",
    ],
  },
];

export default function Privacy() {
  return (
    <PageLayout eyebrow="Legal" title="Privacy Policy" showCta={false}>
      <LegalContent effectiveDate="July 1, 2026" sections={sections} />
    </PageLayout>
  );
}
