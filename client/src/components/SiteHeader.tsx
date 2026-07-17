import ApplyButton from "@/components/ApplyButton";
import { useEffect, useState } from "react";
import { Link } from "wouter";

/**
 * Shared site header with scroll-aware background.
 * Used across the landing page and all interior pages.
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/manus-storage/logo-mark_355a1730.png"
            alt="Credit On Cars"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="text-lg md:text-xl font-bold text-foreground hidden sm:inline">
            Credit On Cars
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <Link href="/how-it-works" className="hover:text-primary transition">
            How It Works
          </Link>
          <Link href="/pricing" className="hover:text-primary transition">
            Pricing
          </Link>
          <Link href="/faq" className="hover:text-primary transition">
            FAQ
          </Link>
        </nav>

        <ApplyButton
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 md:px-8"
          size="lg"
        >
          Get Started
        </ApplyButton>
      </div>
    </header>
  );
}
