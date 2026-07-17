import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { CheckCircle2, CreditCard, FileCheck, Search, Wallet } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Check your rate",
    description:
      "Answer a few quick questions about you and your car. It takes about 3 minutes and there's no impact to your credit score.",
  },
  {
    icon: FileCheck,
    title: "2. Get pre-approved",
    description:
      "We use your car's value as collateral to determine your credit line — up to $10,000. See your approval instantly.",
  },
  {
    icon: CreditCard,
    title: "3. Get your card",
    description:
      "Start spending right away with a virtual card in Apple Pay, Google Pay, or Samsung Pay. Your physical card arrives in the mail.",
  },
  {
    icon: Wallet,
    title: "4. Spend and repay",
    description:
      "Only pay interest on what you actually use. Make payments over time and keep driving your car the whole way through.",
  },
];

const benefits = [
  "No impact to your credit score to check your rate",
  "Keep and drive your car with no repossession risk",
  "Virtual card available the moment you're approved",
  "Only pay for the credit you actually use",
];

export default function HowItWorks() {
  return (
    <PageLayout
      eyebrow="How It Works"
      title="Get credit in four simple steps."
      subtitle="Use your car's value to unlock a real line of credit — without selling it or handing over the keys."
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {steps.map((step) => (
          <Card
            key={step.title}
            className="p-6 md:p-8 border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          What makes it different
        </h2>
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-base md:text-lg text-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
