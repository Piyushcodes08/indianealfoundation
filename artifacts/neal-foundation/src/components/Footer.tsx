import { Globe } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight">Neal Foundation</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Powered by 24X7NetConnect
                </span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 font-medium">
              Driven by Growth. Powered by Partnership.
            </p>
            <div className="text-sm text-secondary-foreground/60 space-y-1">
              <p>United States</p>
              <p>Canada</p>
              <p>India</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Sales Outsourcing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Customer Support</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Business Consulting</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">BPO Services</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Software Solutions</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#industries" className="hover:text-primary transition-colors">Industries</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Neal Foundation & 24X7NetConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
