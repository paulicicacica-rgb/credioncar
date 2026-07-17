import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { ReactNode, useEffect } from "react";
import { Link } from "wouter";

interface PageLayoutProps {
  /** Small kicker label shown above the title. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Show the closing "Get Started" call-to-action band. Defaults to true. */
  showCta?: boolean;
}

/**
 * Standard layout for interior pages: shared header, a hero banner,
 * the page content, an optional CTA band, and the shared footer.
 */
export default function PageLayout({
  eyebrow,
  title,
  subtitle,
  children,
  showCta = true,
}: PageLayoutProps) {
  // Interior pages should always open at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero banner */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-secondary/5 border-b border-border">
        <div className="container max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Page content */}
      <main className="py-12 md:py-20">
        <div className="container">{children}</div>
      </main>

      {/* CTA band */}
      {showCta && (
        <section className="py-16 md:py-24 bg-secondary text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to get the cash you need?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Get approved in 3 minutes. No credit impact. Keep your car.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 md:px-10 py-6 rounded-lg transition-all hover:scale-105 active:scale-95"
              >
                See Your Approval Now
              </Button>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-transparent text-white hover:bg-white/10 font-bold px-8 md:px-10 py-6 rounded-lg"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
