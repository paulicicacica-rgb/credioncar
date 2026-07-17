import PageLayout from "@/components/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from a title loan?",
    a: "A title loan is usually a short-term, high-interest lump sum with a real risk of losing your car. Credit On Cars gives you a revolving line of credit — up to $10,000 — that you draw from as needed and only pay interest on what you use. You keep and drive your car the entire time.",
  },
  {
    q: "Will checking my rate affect my credit score?",
    a: "No. Checking your rate uses a soft inquiry that has no impact on your credit score. You'll see your pre-approval in about three minutes.",
  },
  {
    q: "Do I get to keep my car?",
    a: "Yes. Your car stays with you — you drive it, park it, and use it exactly as you do today. We use its value as collateral, but there's no repossession risk as long as your account is in good standing.",
  },
  {
    q: "How much can I get?",
    a: "Approved credit lines go up to $10,000. Your specific limit depends on your car's value, your application, and availability in your state.",
  },
  {
    q: "How fast can I use my credit?",
    a: "As soon as you're approved, you get a virtual card you can add to Apple Pay, Google Pay, or Samsung Pay and start spending immediately. Your physical card arrives in the mail shortly after.",
  },
  {
    q: "What do I need to apply?",
    a: "You'll need basic personal information, details about your vehicle, and proof that you own it. The whole process takes just a few minutes on your phone.",
  },
  {
    q: "How does repayment work?",
    a: "Because it's a line of credit, you only pay interest on the balance you actually carry. You can pay it down over time with no prepayment penalties.",
  },
];

export default function FAQ() {
  return (
    <PageLayout
      eyebrow="FAQ"
      title="Frequently asked questions."
      subtitle="Everything you need to know about getting credit with your car. Still have a question? Reach out any time."
    >
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageLayout>
  );
}
