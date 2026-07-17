import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Fairness first",
    description:
      "We built an alternative to predatory title loans — transparent terms, no debt traps, and no losing your car.",
  },
  {
    icon: Users,
    title: "Built for real life",
    description:
      "Life happens. We help everyday people unlock the value they already own without setting them back years.",
  },
  {
    icon: Heart,
    title: "On your side",
    description:
      "You keep your car and only pay for what you use. Our success depends on yours, not on hidden fees.",
  },
];

const stats = [
  { value: "$10k", label: "Max credit line" },
  { value: "3 min", label: "To get approved" },
  { value: "$0", label: "To check your rate" },
];

export default function About() {
  return (
    <PageLayout
      eyebrow="About"
      title="Your car is worth more than a quick sale."
      subtitle="We started Credit On Cars because too many people were losing thousands selling their cars — or trapped in title loans — just to cover a short-term need."
    >
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
        <p>
          When you're short on cash, the options can feel bad and worse. Sell the
          car you rely on and lose thousands of dollars of value, or take a title
          loan with sky-high interest and the constant risk of repossession.
        </p>
        <p>
          We thought there should be a better way. Credit On Cars lets you use your
          car's value as collateral for a real, revolving line of credit — up to
          $10,000 — while you keep driving the car you already own. You only pay
          interest on what you use, and there's no impact to your credit score just
          to check your rate.
        </p>
        <p>
          Our mission is simple: help people get the cash they need without giving up
          what they've worked for.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto my-16">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {values.map((value) => (
          <Card key={value.title} className="p-6 md:p-8 border-border">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <value.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
