import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const highlights = [
  {
    title: "Credit line",
    value: "Up to $10,000",
    detail: "Based on your car's value and your profile.",
  },
  {
    title: "Interest",
    value: "Only on what you use",
    detail: "It's a revolving line of credit, not a lump-sum loan.",
  },
  {
    title: "To check your rate",
    value: "$0",
    detail: "No fee and no impact to your credit score.",
  },
];

const included = [
  "Virtual card at approval",
  "Physical card shipped free",
  "Apple Pay, Google Pay & Samsung Pay",
  "No prepayment penalties",
  "Keep and drive your car",
  "Manage everything in the app",
];

const comparison = [
  { label: "Credit limit", coc: "Up to $10,000", title: "Often capped low" },
  { label: "Typical APR", coc: "Competitive rates", title: "Can exceed 300%" },
  { label: "Keep your car", coc: true, title: false },
  { label: "Pay only what you use", coc: true, title: false },
  { label: "Builds toward credit", coc: true, title: false },
];

export default function Pricing() {
  return (
    <PageLayout
      eyebrow="Pricing"
      title="Simple, transparent pricing."
      subtitle="No application fees, no surprises. You only pay interest on the credit you actually use."
    >
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {highlights.map((item) => (
          <Card key={item.title} className="p-6 md:p-8 text-center border-border">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              {item.title}
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {item.value}
            </p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <Card className="p-8 border-2 border-primary">
          <h2 className="text-2xl font-bold mb-6">What's included</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              See Your Rate
            </Button>
          </div>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          How we compare to title loans
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-secondary/5 border-b border-border">
                <th className="p-4 font-semibold"></th>
                <th className="p-4 font-semibold text-primary">Credit On Cars</th>
                <th className="p-4 font-semibold text-muted-foreground">Title loan</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-foreground">{row.label}</td>
                  <td className="p-4">
                    {typeof row.coc === "boolean" ? (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    ) : (
                      <span className="text-foreground">{row.coc}</span>
                    )}
                  </td>
                  <td className="p-4">
                    {typeof row.title === "boolean" ? (
                      <XCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      <span className="text-muted-foreground">{row.title}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Actual rates and credit limits depend on your application, your vehicle,
          and state availability. See our Disclosures for details.
        </p>
      </div>
    </PageLayout>
  );
}
