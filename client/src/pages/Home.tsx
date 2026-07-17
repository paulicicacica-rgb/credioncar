import ApplyButton from "@/components/ApplyButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CheckCircle2, TrendingUp, Zap, Lock, CreditCard } from "lucide-react";

/**
 * Credit On Cars Landing Page
 * 
 * Design Philosophy: Modern Financial Confidence
 * - Asymmetric layouts, bold typography, orange accents
 * - Problem-first narrative: Why selling your car is a bad idea
 * - Solution: Get credit using your car's value instead
 * - Clear CTA throughout
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-0 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your car is worth more than a quick sale.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                  Don't lose $3-4k just because you need $800 right now. Get up to $10k in credit using your car's value.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3 animate-fade-in-up animate-stagger-1">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-foreground">Pre-approval in 3 minutes, no impact on credit</span>
                </div>
                <div className="flex items-start gap-3 animate-fade-in-up animate-stagger-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-foreground">Keep your car. Keep your options.</span>
                </div>
                <div className="flex items-start gap-3 animate-fade-in-up animate-stagger-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm md:text-base text-foreground">Virtual card & cash advances available instantly</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <ApplyButton
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-lg transition-all hover:scale-105 active:scale-95"
                >
                  See Your Approval Now
                </ApplyButton>
                <p className="text-xs md:text-sm text-muted-foreground mt-3">
                  Takes less than 3 minutes. No credit impact.
                </p>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="order-1 md:order-2 relative h-64 md:h-96 flex items-center justify-center">
              <img
                src="/manus-storage/hero-car-visual_fad31fe5.png"
                alt="Premium car"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 md:h-32 -mb-1 overflow-hidden">
        <svg
          viewBox="0 0 1920 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q480,0 960,40 T1920,40 L1920,120 L0,120 Z"
            fill="oklch(0.98 0.002 80)"
          />
        </svg>
      </div>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Why selling your car is a bad idea.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Comparison Visual */}
            <div className="order-2 md:order-1">
              <img
                src="/manus-storage/comparison-visual_ef2f983a.png"
                alt="Comparison: Sell Car vs Credit Card"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Right: Details */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  The Math Doesn't Add Up
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  You need $800 today. So you sell your car for $5,000. Sounds reasonable, right?
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <div className="bg-white rounded-lg p-4 md:p-6 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">What you get:</span> $5,000 from the sale
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    <span className="font-semibold text-foreground">What you lose:</span> A car worth $8,000-9,000 in a year
                  </p>
                  <p className="text-lg md:text-xl font-bold text-red-600 mt-3">
                    Net loss: $3,000-4,000
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 border-l-4 border-primary shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">With Credit On Cars:</span> Get $10k in credit
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    <span className="font-semibold text-foreground">You keep:</span> Your car (still worth $8,000-9,000)
                  </p>
                  <p className="text-lg md:text-xl font-bold text-primary mt-3">
                    Net gain: $8,000-9,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 md:h-32 -mb-1 overflow-hidden">
        <svg
          viewBox="0 0 1920 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q480,0 960,40 T1920,40 L1920,120 L0,120 Z"
            fill="oklch(0.98 0.002 80)"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            A better way to get cash.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Card Mockup */}
            <div className="order-2 md:order-1">
              <img
                src="/manus-storage/yendo-card-mockup_f0c77199.png"
                alt="Yendo Credit Card"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>

            {/* Right: Features */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Get up to $10k in credit.
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  Using your car's value as collateral, not selling it.
                </p>
              </div>

              {/* Features Grid */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pre-approval in 3 minutes</h4>
                    <p className="text-sm text-muted-foreground">
                      No impact on your credit score. Know your approval instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Virtual card immediately</h4>
                    <p className="text-sm text-muted-foreground">
                      Use your credit online or with Apple Pay, Google Pay, Samsung Pay before your physical card arrives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Only pay what you spend</h4>
                    <p className="text-sm text-muted-foreground">
                      Get a real credit card. Only pay interest on what you actually use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="flex-shrink-0">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Keep your car</h4>
                    <p className="text-sm text-muted-foreground">
                      Your car stays with you. Use it, drive it, keep it. No repossession risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <ApplyButton
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-8 md:px-10 py-6 md:py-7 rounded-lg transition-all hover:scale-105 active:scale-95"
                >
                  Get Your Credit Now
                </ApplyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 md:h-32 -mb-1 overflow-hidden">
        <svg
          viewBox="0 0 1920 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q480,0 960,40 T1920,40 L1920,120 L0,120 Z"
            fill="oklch(0.98 0.002 80)"
          />
        </svg>
      </div>

      {/* Social Proof Section */}
      <section className="py-16 md:py-20 bg-secondary/5">
        <div className="container">
          <h3 className="text-center text-sm md:text-base font-semibold text-muted-foreground mb-8 md:mb-12 uppercase tracking-wide">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="text-foreground font-bold text-lg md:text-xl">AXIOS</div>
            <div className="text-foreground font-bold text-lg md:text-xl">Yahoo!</div>
            <div className="text-foreground font-bold text-lg md:text-xl">FORTUNE</div>
            <div className="text-foreground font-bold text-lg md:text-xl">WSJ</div>
            <div className="text-foreground font-bold text-lg md:text-xl">TechCrunch</div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 md:h-32 -mb-1 overflow-hidden">
        <svg
          viewBox="0 0 1920 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q480,0 960,40 T1920,40 L1920,120 L0,120 Z"
            fill="oklch(0.98 0.002 80)"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Comparison Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            We're much more affordable than title loans.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Credit On Cars Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-primary">
              <div className="mb-6">
                <img
                  src="/manus-storage/logo-mark_355a1730.png"
                  alt="Credit On Cars"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Credit On Cars</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">Up to $10k credit limit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">Competitive interest rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">Keep your car</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">Only pay what you use</span>
                </li>
              </ul>
            </div>

            {/* Title Loan Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <div className="mb-6 w-12 h-12 md:w-16 md:h-16 bg-yellow-300 rounded-lg" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Title Loan</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-muted-foreground">Limited credit amount</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-muted-foreground">High interest rates (300%+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-muted-foreground">Risk of losing your car</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-muted-foreground">Debt trap cycle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 md:h-32 -mb-1 overflow-hidden">
        <svg
          viewBox="0 0 1920 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q480,0 960,40 T1920,40 L1920,120 L0,120 Z"
            fill="oklch(0.98 0.002 80)"
          />
        </svg>
      </div>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-secondary text-white">
        <div className="container text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Stop losing money. Start building credit.
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Get approved in 3 minutes. No credit impact. Keep your car. Get up to $10k in credit today.
          </p>
          <div className="pt-4">
            <ApplyButton
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-8 rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              Get Your Credit Now
            </ApplyButton>
          </div>
          <p className="text-sm md:text-base text-white/80 pt-4">
            Takes less than 3 minutes. No credit impact.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
