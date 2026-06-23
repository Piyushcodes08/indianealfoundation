import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone, X, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="pt-20 pb-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.85fr_0.85fr_1.1fr] border-b border-white/10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img
                src="/NealFoundation Logo.webp"
                alt="Neal Foundation logo"
                className="h-24 w-24 object-contain"
              />
              <div>
                <p className="font-serif text-2xl font-semibold tracking-tight text-white">
                  NEAL FOUNDATION
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70 font-light">
                  We are a non-profit organization dedicated to helping those in need.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              Site Map
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              Our Work
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/women-empowerment" className="hover:text-white transition">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link href="/child-education" className="hover:text-white transition">
                  Child Education
                </Link>
              </li>
              <li>
                <Link href="/health-nutrition" className="hover:text-white transition">
                  Health & Nutrition
                </Link>
              </li>
              <li>
                <Link href="/animal-welfare" className="hover:text-white transition">
                  Animal Welfare
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <p>
                  C 515, Dev Aurum Commercial Complex,
                  Prahlad Nagar, Ahmedabad Gujarat 380015
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:07949217538" className="hover:text-white transition">
                  079 4921 7538
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@nealfoundation.com" className="hover:text-white transition">
                  contact@nealfoundation.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-7 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] text-white/60 font-light">
            (c) {currentYear} Neal Foundation. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition">
              <X className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
