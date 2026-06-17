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
    <footer className="bg-muted text-foreground relative">
      <div className="absolute top-0 left-0 right-0 h-px section-accent-line" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-primary" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 border-b border-border">

          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/NealFoundation Logo.png"
                alt="Neal Foundation logo"
                className="h-12 w-12 object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight text-foreground">Neal Foundation</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary/90 font-semibold">
                  Powered by 24X7NetConnect
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-light">
              Driven by Growth. Powered by Partnership.
            </p>

            <p className="text-xs text-muted-foreground font-serif italic tracking-wide">
              धर्मो रक्षति रक्षितः
            </p>

            <div className="space-y-2">
              {["United States", "Canada", "Bharat"].map((loc) => (
                <div key={loc} className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-[0.14em]">
                  <span className="w-5 h-px bg-primary/60" />
                  {loc}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-foreground/45">Services</h4>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    data-testid={`footer-link-${s.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-foreground/45">Navigation</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
                    data-testid={`footer-nav-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans font-semibold text-[10px] tracking-[0.2em] uppercase text-foreground/45">Legal</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-light">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>

            <div className="pt-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-3">Global Operations</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs text-primary font-semibold tracking-[0.1em] uppercase border-b border-primary/40 pb-0.5 hover:border-primary hover:text-foreground transition-colors duration-300"
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

        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground font-light tracking-wide">
            &copy; {currentYear} Neal Foundation &amp; 24X7NetConnect. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.16em]">
            Building Businesses &nbsp;&middot;&nbsp; Creating Opportunities &nbsp;&middot;&nbsp; Delivering Results
          </p>
        </div>
      </div>
    </footer>
  );
}
