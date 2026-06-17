export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Sales Outsourcing",
    "Customer Support",
    "Lead Generation",
    "Business Consulting",
    "BPO Services",
    "Software Solutions",
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/8">

          <div className="lg:col-span-4 space-y-7">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-primary flex items-center justify-center flex-shrink-0">
                <span className="font-serif font-bold text-sm text-primary leading-none">NF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base leading-tight">Neal Foundation</span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-primary/80 font-semibold">
                  Powered by 24X7NetConnect
                </span>
              </div>
            </div>

            <p className="text-sm text-secondary-foreground/60 leading-relaxed max-w-xs font-light">
              Driven by Growth. Powered by Partnership.
            </p>

            <div className="space-y-1.5">
              {["United States", "Canada", "India"].map((loc) => (
                <div key={loc} className="flex items-center gap-2 text-xs text-secondary-foreground/40 uppercase tracking-[0.12em]">
                  <span className="w-4 h-px bg-primary/50"></span>
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-secondary-foreground/40">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200 font-light"
                    data-testid={`footer-link-${s.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-secondary-foreground/40">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200 font-light"
                    data-testid={`footer-nav-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-sans font-semibold text-[11px] tracking-[0.18em] uppercase text-secondary-foreground/40">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200 font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors duration-200 font-light">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-secondary-foreground/30 mb-3">Global Operations</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs text-primary font-semibold tracking-[0.1em] uppercase border-b border-primary/30 pb-0.5 hover:border-primary transition-colors duration-200"
                data-testid="footer-link-contact"
              >
                Schedule Consultation
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-secondary-foreground/30 font-light tracking-wide">
            &copy; {currentYear} Neal Foundation &amp; 24X7NetConnect. All rights reserved.
          </p>
          <p className="text-[11px] text-secondary-foreground/20 uppercase tracking-[0.14em]">
            Building Businesses &nbsp;&middot;&nbsp; Creating Opportunities &nbsp;&middot;&nbsp; Delivering Results
          </p>
        </div>
      </div>
    </footer>
  );
}
