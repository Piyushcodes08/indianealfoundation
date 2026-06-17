import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-secondary/98 backdrop-blur-md border-b border-white/8 py-3 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      )}

      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3.5 group z-50">
          <div className="w-9 h-9 border border-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-primary">
            <span className="font-serif font-bold text-sm text-primary group-hover:text-white transition-colors duration-300 leading-none">NF</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-[15px] leading-tight tracking-wide text-secondary-foreground">Neal Foundation</span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-primary/80 font-semibold leading-tight">
              24X7NetConnect
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link-hover text-[13px] font-medium tracking-[0.08em] uppercase text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-white/8"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              asChild
              className="h-9 px-5 text-[12px] font-semibold tracking-[0.08em] uppercase rounded-none bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              <a href="#contact" data-testid="link-book-consultation">Book Consultation</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-secondary-foreground/60 hover:text-secondary-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle-mobile"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-secondary-foreground/60 hover:text-secondary-foreground"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-secondary/98 backdrop-blur-md border-b border-white/8 p-6 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-[0.08em] uppercase text-secondary-foreground/70 hover:text-secondary-foreground py-3 border-b border-white/5 last:border-0 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full mt-4 rounded-none text-[12px] font-semibold tracking-[0.08em] uppercase h-11"
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Book Consultation
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
