import { Link } from "wouter";

const footerSections: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclosures", href: "/disclosures" },
    ],
  },
];

/**
 * Shared site footer with navigation to all pages.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/manus-storage/logo-mark_355a1730.png"
                alt="Credit On Cars"
                className="w-8 h-8 invert"
              />
              <span className="font-bold">Credit On Cars</span>
            </Link>
            <p className="text-sm text-white/70">
              Get the cash you need without losing your car's value.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2026 Credit On Cars. All rights reserved. Powered by Yendo.</p>
        </div>
      </div>
    </footer>
  );
}
