import { Link } from "wouter";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Users2, ShieldCheck, Network, TrendingUp, Building2, Wifi, Globe, Mail, HeartHandshake, LineChart, Users, PhoneCall, Code2, HandHeart, Megaphone, Sprout, CalendarDays, MapPin, } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { fadeUp, stagger } from "@/lib/animations";
import { AnimatedCounter, SectionLabel } from "@/components/shared";
import {
  contactSchema,
  type ContactFormValues,
  businessAreas,
  contactCards,
} from "@/data/contact";
import {
  services as homeServices,
  parentCompanyPoints,
  nealDivisionPoints,
  homeValues,
  coPartnerHighlights,
  testimonials,
  marqueeItems,
} from "@/data/home";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      serviceRequired: "",
      message: "",
    },
  });

  const onSubmit = (_values: ContactFormValues) => {
    toast({
      title: "Consultation Request Received",
      description: "A representative will contact you within 24 hours.",
    });
    form.reset();
  };

  const services = homeServices;

  const events = [
  {
    id: 1,
    day: "16",
    month: "MAY",
    year: "2026",
    title: "Chhas Seva",
    category: "Community Service",
    description:
      "Serving refreshing chhas as a selfless service to support people during the summer season.",
    image: "/chhasimg.png",
    location: "Ahmedabad, Gujarat",
    href: "/events/chhas-seva",
  },
  {
    id: 2,
    day: "25",
    month: "APR",
    year: "2025",
    title: "Sharbat Seva",
    category: "Food & Refreshment",
    description:
      "Distributing refreshing drinks with compassion and care to people in the local community.",
    image: "/sarbatseva.jpg",
    location: "Ahmedabad, Gujarat",
    href: "/events/sharbat-seva",
  },
  {
    id: 3,
    day: "02",
    month: "APR",
    year: "2023",
    title: "Swachhata Abhiyan",
    category: "Community Initiative",
    description:
      "Bringing volunteers together to promote cleanliness, awareness, and healthier public spaces.",
    image: "/image7.webp",
    location: "Ahmedabad, Gujarat",
    href: "/events/swacchata-abhiyan",
  },
  {
    id: 4,
    day: "08",
    month: "mar",
    year: "2023",
    title: "Women_Empowerment",
    category: "Community Initiative",
    description:
      "Bringing volunteers together to promote cleanliness, awareness, and healthier public spaces.",
    image: "/WomenEmpowerment.jpg",
    location: "Ahmedabad, Gujarat",
    href: "/events/swacchata-abhiyan",
  },
];

  const swiperRef = useRef<SwiperType | null>(null);

  // Gallery state and component
  const Gallery = () => {
    const galleryImages = [
      "/gallery/bgimg1.jpg",
      "/gallery/healthcare%20(2).jpg",
      "/gallery/IMG-20250425-WA0113.jpg",
      "/gallery/IMG-20250425-WA0178.jpg",
      "/gallery/IMG-20250425-WA0182.jpg",
      "/gallery/womenEmpowerment%20(2).jpg",
    ];

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openAt = (idx: number) => {
      setActiveIndex(idx);
      setOpen(true);
    };

    const prev = () => setActiveIndex((v) => (v - 1 + galleryImages.length) % galleryImages.length);
    const next = () => setActiveIndex((v) => (v + 1) % galleryImages.length);

    return (
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryImages.map((src, i) => (
            <button key={src} onClick={() => openAt(i)} className="group overflow-hidden rounded-lg">
              <img src={src} alt={`Gallery ${i + 1}`} className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative max-w-4xl w-full px-4">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 z-50 rounded-full bg-white/10 px-3 py-1 text-white">✕</button>
              <img src={galleryImages[activeIndex]} alt="Active" className="mx-auto max-h-[70vh] w-auto object-contain rounded-md" />

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <button onClick={prev} className="rounded-full bg-white/10 p-2 text-white">◀</button>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <button onClick={next} className="rounded-full bg-white/10 p-2 text-white">▶</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* ─── HERO ─── */}
    <section
  id="home"
  className="relative flex min-h-dvh items-end overflow-hidden bg-background pb-0 pt-32"
  data-testid="section-hero"
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/hero.png"
      alt="Neal Foundation Hero Background"
      className="h-full w-full object-cover"
    />
  </div>
  {/* Texture + Glow */}
  <div className="absolute inset-0 dot-grid-light opacity-25" />
  <div className="absolute right-0 top-0 h-[660px] w-[660px] rounded-full bg-primary/15 blur-[155px]" />
  <div className="absolute bottom-0 left-0 h-[430px] w-[430px] rounded-full bg-primary/8 blur-[120px]" />

  {/* Premium Lines */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

  <div className="container relative z-10 mx-auto px-6 pb-20 md:pb-24 lg:px-8">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-6xl space-y-8"
    >
      {/* Premium Badge */}
      <motion.div variants={fadeUp}>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/45 px-4 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Neal Foundation
          </span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
      >
        <span className="block">Care Beyond Boundaries -</span>

        <span className="block text-gradient-brand lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-tight leading-16">
         Touching Lives Every Day
        </span>

      </motion.h1>

      {/* Paragraph */}
      <motion.p
        variants={fadeUp}
        className="max-w-2xl text-base font-medium leading-6 text-gray-900"
      >
        Neal Foundation supports community-led initiatives across India,
        fostering volunteer outreach, education, and compassionate care
        for families and neighborhoods in need.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Button
          size="lg"
          asChild
          className="h-[52px] rounded-md bg-primary px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
          data-testid="button-schedule-consultation"
        >
          <Link href="/contact">
            Join Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* ─── MARQUEE TICKER ─── */}
     <section
  className="relative overflow-hidden border-y border-red-500/10 bg-[#fff8f2] py-8"
  aria-label="Neal Foundation initiatives"
>
  {/* Subtle background pattern */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "radial-gradient(circle, #ef2525 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}
  />

  {/* Left fade */}
  <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#fff8f2] to-transparent sm:w-28" />

  {/* Right fade */}
  <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#fff8f2] to-transparent sm:w-28" />

  <div className="marquee-track flex w-max select-none items-stretch">
    {[...marqueeItems, ...marqueeItems].map((item, i) => {
      const Icon = item.icon;

      return (
        <article
          key={`${item.id}-${i}`}
          className="group relative mx-2 flex w-[290px] flex-shrink-0 items-start gap-4 overflow-hidden rounded-[22px] border border-[#ee2d2d]/15 bg-white/80 px-5 py-5 shadow-[0_14px_40px_rgba(89,33,20,0.07)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#ee2d2d]/35 hover:bg-white hover:shadow-[0_20px_55px_rgba(89,33,20,0.12)] sm:mx-3 sm:w-[330px] sm:px-6 sm:py-6"
        >
          {/* Hover accent */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[#ef2525] transition-transform duration-500 group-hover:scale-x-100" />

          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-red-500/15 blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/15 bg-[#fff1ec] text-[#ef2525] transition-all duration-500 group-hover:rotate-3 group-hover:bg-[#ef2525] group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-5 bg-[#ef2525]/50" />

              <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#ef2525]">
                Neal Foundation
              </span>
            </div>

            <h3 className="font-serif text-[19px] font-semibold leading-tight tracking-[-0.01em] text-[#17120f] transition-colors duration-300 group-hover:text-[#ef2525]">
              {item.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-[12px] leading-[1.75] text-[#685d57]">
              {item.description}
            </p>
          </div>
        </article>
      );
    })}
  </div>
</section>

      {/* ─── ABOUT ─── */}
     <section
  id="about"
  className="relative overflow-hidden py-28 lg:py-36 bg-background"
  data-testid="section-about"
>
  {/* Premium Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 dot-grid-light opacity-40" />
    <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-primary/5 blur-[120px] rounded-full" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
  </div>

  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      {/* Left Content */}
      <div className="relative">
        <motion.div variants={fadeUp} className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">
              Who We Are
            </span>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-serif font-bold text-foreground leading-[1.02] tracking-tight"
        >
          <span className="block text-2xl sm:text-3xl lg:text-5xl">
        Care That Empowers,
          </span>
          <span className="block mt-2 text-2xl sm:text-3xl lg:text-5xl">
            <em className="not-italic bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
             Support That Transforms
            </em>
          </span>
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
          <div className="w-14 h-px bg-primary" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-px bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>


        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed font-light"
        >
       At the Neal Foundation, we think that genuine progress is based on compassion. We are a community-based nonprofit organization committed to fostering hope and improving lives for women, children, the weak, and those without a voice.

Read More
        </motion.p>

        {/* Premium Feature Grid */}
        <motion.div
          variants={fadeUp}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            {
              title: "Building Hope Through Compassion",
              icon: HeartHandshake,
            },
            {
              title: "Empowering Lives, Strengthening Communities",
              icon: HandHeart,
            },
            {
              title: "A Voice for the Vulnerable",
              icon: Megaphone,
            },
            {
              title: "Create Sustainable Growth",
              icon: Sprout,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      {item.title}
                    </p>
                    <div className="mt-2 h-px w-10 bg-primary/40 transition-all duration-300 group-hover:w-16" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Mini CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-foreground group"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
            <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span>Together for Women, Children, and Communities</span>
        </motion.div>
      </div>

      {/* Right Visual */}
      <motion.div variants={fadeUp} className="relative lg:pl-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-muted">
            <img
              src="/about-r8.png"
              alt="Corporate team at Neal Foundation"
              className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
              data-testid="img-about"
            />

            {/* Logo Badge */}
            <div className="absolute top-6 right-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-background/85 p-2 shadow-xl backdrop-blur-md logo-halo">
              <img
                src="/NealFoundation Logo.webp"
                alt="Neal Foundation"
                className="w-full h-full object-contain"
              />
            </div>      
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* ─── STATS ─── */}
   <section
  className="relative overflow-hidden bg-[#F7F4EE] py-24 lg:py-28"
  data-testid="section-stats"
>
  {/* Premium Background */}
  <div className="absolute inset-0 dot-grid-light opacity-60" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.055),transparent_55%)]" />

  {/* Top / Bottom Luxury Lines */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      {[
        { value: 350000, label: "People Helpedsince 2024", suffix: "+" },
        { value: 120, label: "Unique Programs(4 focus areas)", suffix: "+" },
        { value: 5000, label: "Volunteers Engaged(rural & urban)", suffix: "+" },
      ].map((stat, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-[28px] border border-primary/10 bg-white/45 px-5 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/70 hover:shadow-[0_30px_90px_rgba(255,0,0,0.10)]"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-primary/5 opacity-80" />

          {/* Corner Accent */}
          <div className="absolute top-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Diamond Mark */}
          <div className="mx-auto mb-6 h-2 w-2 rotate-45 bg-primary/60 shadow-[0_0_18px_rgba(255,0,0,0.45)]" />

          <div className="relative z-10">
            {typeof stat.value === "string" ? (
              <div
                className="mb-4 font-serif text-5xl font-bold leading-none text-primary lg:text-6xl"
                data-testid="stat-support-operations"
              >
                {stat.value}
              </div>
            ) : (
              <div className="mb-4 [&_*:first-child]:font-serif [&_*:first-child]:text-5xl [&_*:first-child]:font-bold [&_*:first-child]:leading-none [&_*:first-child]:text-primary lg:[&_*:first-child]:text-6xl">
                <AnimatedCounter
                  value={stat.value}
                  label=""
                  suffix={stat.suffix}
                />
              </div>
            )}

            <div className="mx-auto mb-4 h-px w-10 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

            <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-foreground/70">
              {stat.label}
            </div>
          </div>

          {/* Bottom Shine */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ─── SERVICES ─── */}
<section
  id="services"
  className="py-28 lg:py-32 bg-background relative overflow-hidden"
  data-testid="section-services"
>
  {/* Premium Background Texture */}
  <div className="absolute inset-0 dot-grid-light opacity-35" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.05),transparent_35%)]" />

  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mb-16 lg:mb-18"
    >
      <motion.div variants={fadeUp} className="mb-6">
        <SectionLabel>Our works</SectionLabel>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <motion.h2
          variants={fadeUp}
          className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.06] max-w-3xl text-foreground"
        >
      Creating Change Where <br />
          <em className="not-italic text-primary">It Matters Most</em>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground max-w-md text-base font-light leading-relaxed lg:mb-2"
        >
       Neal Foundation empowers communities through education, healthcare, women’s support, and animal welfare.
        </motion.p>
      </div>
    </motion.div>

    {/* Premium Compact Grid */}
    <div className="relative">
      {/* Outer Border Glow */}
      <div className="absolute -inset-px " />

   <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <article
        key={service.id || index}
        tabIndex={0}
        className="group relative h-[380px] overflow-hidden rounded-[26px] bg-black/30 outline-none sm:h-[430px] lg:h-[460px]"
      >
        {/* Background image */}
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus:scale-105"
        />

        {/* Permanent image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/5" />

        {/* Darker overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100 rounded-[26px]" />

        {/* Number */}
        <span className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
          {service.num}
        </span>

        {/* Expanding content box */}
        <div className="absolute inset-x-3 bottom-3 z-20 overflow-hidden rounded-[20px]  transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] sm:inset-x-4 sm:bottom-4 sm:px-6">
          {/* Always visible title */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#073d2a] group-focus:bg-white group-focus:text-[#073d2a]">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </div>

            <h3 className="font-serif text-xl font-bold leading-tight text-white sm:text-2xl">
              {service.title}
            </h3>
          </div>

          {/* Hidden content */}
          <div className="max-h-0 translate-y-5 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-5 group-hover:max-h-52 group-hover:translate-y-0 group-hover:opacity-100 group-focus:mt-5 group-focus:max-h-52 group-focus:translate-y-0 group-focus:opacity-100">
            <div className="mb-4 h-px w-12 bg-white/35" />

            <p className="max-w-xl text-sm font-light leading-7 text-white/80">
              {service.desc}
            </p>

            <Link
              href={service.href || "/our-work"}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#073d2a]"
            >
              Explore Our Work

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Premium border */}
        <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-black/5 ring-1 ring-inset ring-white/15" />
      </article>
    );
  })}
</div>
    </div>
  </div>
</section>

    
    
  
  {/* ─── WHY CHOOSE US ─── */}
    <section
      className="relative overflow-hidden bg-muted py-12 lg:py-24"
      data-testid="section-events"
    >
      {/* Premium background */}
      <div className="absolute inset-0 dot-grid-light opacity-50" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.07),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.04),transparent_35%)]" />

      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-primary/10" />
      <div className="absolute -right-20 top-32 h-64 w-64 rounded-full border border-primary/10" />

      {/* Top and bottom lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <SectionLabel>Events & Initiatives</SectionLabel>

            <h2 className="mt-7 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-6xl">
              Moments of Compassion,
              <span className="block text-primary">
                Creating Lasting Change
              </span>
            </h2>

            <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary/70 to-transparent" />
          </motion.div>

          {/* Navigation controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3"
          >
            <button
              type="button"
              aria-label="Previous event"
              onClick={() => swiperRef.current?.slidePrev()}
              className="group flex h-12 w-12 items-center justify-center border border-primary/20 bg-background text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_14px_35px_rgba(220,38,38,0.22)]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              aria-label="Next event"
              onClick={() => swiperRef.current?.slideNext()}
              className="group flex h-12 w-12 items-center justify-center border border-primary/20 bg-background text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_14px_35px_rgba(220,38,38,0.22)]"
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.08}
            spaceBetween={18}
            speed={900}
            grabCursor
            rewind
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".events-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.45,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.35,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 2.75,
                spaceBetween: 30,
              },
            }}
            className="events-swiper !overflow-visible"
          >
            {events.map((event, index) => (
              <SwiperSlide key={event.id} className="!h-auto">
                <article className="group relative flex h-full min-h-[500px] flex-col overflow-hidden border border-border/80 bg-background shadow-[0_22px_65px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_32px_85px_rgba(0,0,0,0.15)]">
                  {/* Event image */}
                  <div className="relative h-[265px] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Date badge */}
                    <div className="absolute left-0 top-0 min-w-[92px] bg-primary px-2 py-1 text-center text-white shadow-[0_14px_30px_rgba(220,38,38,0.26)]">
                      <span className="block font-serif text-3xl font-bold leading-none ">
                        {event.day}
                      </span>

                      <span className="mt-1 block text-[10px] font-bold tracking-[0.18em]">
                        {event.month}
                      </span>

                      <span className="mt-0.5 block text-[10px] text-white/75">
                        {event.year}
                      </span>
                    </div>

                    {/* Event number */}
                    <span className="absolute right-5 top-5 border border-white/25 bg-black/20 px-3 py-1.5 text-[9px] font-semibold tracking-[0.2em] text-white backdrop-blur-md">
                      0{index + 1}
                    </span>

                  </div>

                  {/* Card content */}
                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    {/* Background number */}
                    <span className="pointer-events-none absolute right-5 top-3 font-serif text-[84px] font-bold leading-none text-primary/[0.04]">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <h3 className="font-serif text-2xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                        {event.title}
                      </h3>

                      <div className="mt-4 h-px w-10 bg-primary/45 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />

                      <p className="mt-4 text-sm font-light leading-7 text-muted-foreground">
                        {event.description}
                      </p>
                    </div>

                    {/* Event information */}
                    <div className="relative z-10 mt-6 space-y-3 border-t border-border/70 pt-5">
                     

                     
                    </div>

                    {/* CTA */}
                    <div className="relative z-10 mt-auto">
                      <Link
                        href={event.href}
                        className="group/link inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"
                      >
                        View Event

                        <span className="flex h-8 w-8 items-center justify-center border border-primary/25 transition-all duration-300 group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:text-white">
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="events-pagination mt-10 flex justify-center" />
        </motion.div>

        {/* Bottom link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/events"
            className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_15px_35px_rgba(220,38,38,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_22px_45px_rgba(220,38,38,0.28)]"
          >
            Explore All Events

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  {/* ─── GALLERY ─── */}
    <section id="gallery" className="relative overflow-hidden bg-background py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-10">
          <motion.div variants={fadeUp} className="mb-4">
            <SectionLabel>Gallery</SectionLabel>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl font-bold text-foreground">
            Moments From Our Work
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground max-w-xl">
            A visual look at recent events, outreach drives, and community programs organized by Neal Foundation.
          </motion.p>
        </motion.div>

        <Gallery />
      </div>
    </section>
  {/* ─── CO-PARTNER ─── */}
  <section
    id="co-partner"
    className="relative overflow-hidden bg-background py-28 lg:py-32"
    data-testid="section-co-partner"
  >
    <div className="absolute inset-0 dot-grid-light opacity-30" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.03),transparent_30%)]" />

    <div className="container relative z-10 mx-auto px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <SectionLabel>Co-Partner</SectionLabel>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
              Lakhya Foundation
              <span className="block text-primary">Driving Impact Together</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-muted-foreground sm:text-base">
              Our strategic co-partnership with Lakhya Foundation empowers community initiatives and expands our ability to deliver sustainable impact across India.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="overflow-hidden rounded-[28px] border border-border/70 bg-card p-4 shadow-[0_36px_90px_rgba(0,0,0,0.08)]">
              <img
                src="/Lakshya_logo.webp"
                alt="Lakhya Foundation Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                Co-Partner
              </p>
              <p className="text-2xl font-semibold text-foreground">
                Lakhya Foundation
              </p>
              <p className="max-w-xl text-sm font-light leading-7 text-muted-foreground">
                A trusted partner for social development and community service, aligned with Neal Foundation’s mission to uplift families and empower lives.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-4"
        >
          {coPartnerHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[26px] border border-border/70 bg-muted/80 p-6 transition duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="relative overflow-hidden bg-background py-28 lg:py-32"
        data-testid="section-contact"
      >
        <div className="absolute inset-0 dot-grid-light opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.055),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.04),transparent_36%)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Get in Touch</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
              >
                Start a Conversation <br />
                <em className="not-italic text-primary">With Our Team</em>
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
              className="max-w-md text-sm font-light leading-relaxed text-muted-foreground lg:justify-self-end"
            >
              Share your ideas and our team will connect with you to
              explore volunteering, donations, and community support opportunities.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-border to-primary/10" />

            <div className="relative grid grid-cols-1 gap-px bg-border/70 lg:grid-cols-12">
              {/* LEFT PANEL */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden bg-muted p-8 md:p-12 lg:col-span-5"
              >
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
                <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                <span className="absolute right-8 top-8 font-serif text-8xl font-bold leading-none text-primary/[0.045]">
                  01
                </span>

                <div className="relative z-10 flex h-full min-h-[620px] flex-col justify-between gap-12">
                  <div className="space-y-7">
                        <SectionLabel>Community Inquiry</SectionLabel>

                    <h3 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                      Let&apos;s Grow <br />
                      <em className="not-italic text-primary">Together</em>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {businessAreas.map((item) => (
                      <div
                        key={item}
                        className="group flex items-center gap-3 border-t border-border/70 pt-4 text-sm font-light text-foreground/75 first:border-t-0 first:pt-0 hover:text-primary"
                      >
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-primary/20 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border/70 pt-6">
                    <p className="font-serif text-lg italic leading-relaxed text-foreground/75">
                      “Our success is directly connected to the success of our
                      clients.”
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT FORM */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden bg-card p-8 md:p-12 lg:col-span-7"
              >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.055] blur-[80px]" />

                <div className="relative z-10 mb-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      Outreach Request
                    </p>

                    <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      Share Your Community Vision
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center border border-primary/25 bg-background text-primary md:flex">
                    <Mail className="h-4 w-4" />
                  </div>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="relative z-10 space-y-8"
                    data-testid="form-contact"
                  >
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                                placeholder="John Doe"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              Organization / Group Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                                placeholder="Community Group or NGO"
                                data-testid="input-company"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              Contact Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                                type="email"
                                placeholder="john@acme.com"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                                placeholder="+1 (555) 000-0000"
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="serviceRequired"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            How Can We Help?
                          </FormLabel>

                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                className="h-12 rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus:border-primary focus:ring-0"
                                data-testid="select-service"
                              >
                                <SelectValue placeholder="Select a focus area" />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectItem value="community">
                                Community Programs
                              </SelectItem>
                              <SelectItem value="volunteer">
                                Volunteer Partnerships
                              </SelectItem>
                              <SelectItem value="donations">
                                Donor & Sponsor Support
                              </SelectItem>
                              <SelectItem value="events">
                                Event Collaboration
                              </SelectItem>
                              <SelectItem value="impact">
                                Impact Monitoring & Reporting
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[115px] resize-none rounded-none border-b border-l-0 border-r-0 border-t-0 border-border bg-transparent px-4 text-sm transition-colors focus-visible:border-primary focus-visible:ring-0"
                              placeholder="Tell us about your goals..."
                              data-testid="textarea-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="group h-[52px] w-full rounded-md text-sm font-semibold uppercase tracking-[0.14em] premium-glow"
                        data-testid="button-submit-consultation"
                      >
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
