import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/94 backdrop-blur-xl border-b border-border  shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
          : ""
      }`}
    >
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px section-accent-line" />
      )}

      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 group z-50" aria-label="Neal Foundation home">
          <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center sm:h-24 sm:w-24">
            <div className="absolute inset-1 rounded-full bg-primary/8 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <img
              src="/NealFoundation Logo.png"
              alt="Neal Foundation logo"
              className="relative object-contain drop-shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
            
            />
          </div>

        </a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link-hover text-[12px] font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-border pl-6">
            <Button
              asChild
              className="h-9 px-5 text-[11px] font-semibold tracking-[0.1em] uppercase rounded bg-primary hover:bg-primary/90 text-primary-foreground premium-glow transition-all duration-300"
            >
              <a href="#contact" data-testid="link-book-consultation">
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-muted-foreground hover:text-foreground rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 right-0 bg-background/96 backdrop-blur-xl border-b border-border p-8 flex flex-col gap-1 md:hidden shadow-xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground py-3.5 border-b border-border last:border-0 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </motion.a>
            ))}
            <Button
              asChild
              className="w-full mt-5 rounded-none text-[11px] font-semibold tracking-[0.1em] uppercase h-12 premium-glow"
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Book Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
