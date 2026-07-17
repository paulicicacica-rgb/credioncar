import PageLayout from "@/components/PageLayout";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Guides",
    title: "Selling your car for quick cash? Read this first.",
    excerpt:
      "The math behind a fast sale rarely works in your favor. Here's what you actually give up — and a better alternative.",
    date: "July 10, 2026",
    readTime: "5 min read",
  },
  {
    category: "Comparisons",
    title: "Title loans vs. a line of credit on your car",
    excerpt:
      "Both use your vehicle, but the similarities end there. We break down cost, risk, and flexibility side by side.",
    date: "June 28, 2026",
    readTime: "6 min read",
  },
  {
    category: "Money tips",
    title: "How to handle a surprise expense without wrecking your budget",
    excerpt:
      "A blown transmission or a medical bill doesn't have to become long-term debt. Five practical moves to stay ahead.",
    date: "June 14, 2026",
    readTime: "4 min read",
  },
  {
    category: "Product",
    title: "What you can do with a virtual card the moment you're approved",
    excerpt:
      "From Apple Pay to online checkout, here's how to start spending before your physical card even arrives.",
    date: "May 30, 2026",
    readTime: "3 min read",
  },
  {
    category: "Credit",
    title: "Understanding revolving credit vs. installment loans",
    excerpt:
      "Why paying interest only on what you use can save you real money compared to a fixed lump-sum loan.",
    date: "May 16, 2026",
    readTime: "5 min read",
  },
  {
    category: "Stories",
    title: "How drivers are keeping their cars and their cash",
    excerpt:
      "Real scenarios where using a car's value beat selling it — and what that meant a year later.",
    date: "May 2, 2026",
    readTime: "4 min read",
  },
];

export default function Blog() {
  return (
    <PageLayout
      eyebrow="Blog"
      title="Ideas, guides & money tips."
      subtitle="Practical advice on making the most of what you own — without the debt traps."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <Card
            key={post.title}
            className="p-6 border-border hover:shadow-lg transition-shadow flex flex-col cursor-pointer group"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
              {post.category}
            </p>
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">
                {post.date} · {post.readTime}
              </span>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
