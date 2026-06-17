import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Users2,
  ShieldCheck,
  TrendingUp,
  Building2,
  Globe,
  Sparkles,
  Target,
  Eye,
  HeartHandshake,
  Award,
  CheckCircle2,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
        <span className="h-px w-10 bg-gradient-to-r from-primary to-primary/15" />
      </span>

      <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
        {children}
      </span>
    </div>
  );
}

const stats = [
  { value: "100+", label: "Business Projects" },
  { value: "50+", label: "Team Members" },
  { value: "3", label: "Countries Served" },
  { value: "24/7", label: "Support Operations" },
];

const values = [
  {
    title: "Integrity",
    desc: "We operate with honesty, transparency, and accountability in every partnership.",
  },
  {
    title: "Excellence",
    desc: "We focus on quality execution, continuous improvement, and reliable delivery.",
  },
  {
    title: "Innovation",
    desc: "We build practical solutions that help businesses adapt, scale, and compete.",
  },
  {
    title: "Partnership",
    desc: "We work as an extension of our clients’ organizations, not just as a service provider.",
  },
  {
    title: "Commitment",
    desc: "We support long-term growth with dependable systems, teams, and processes.",
  },
];

const capabilities = [
  {
    icon: Users2,
    title: "People",
    desc: "Recruiting, training, managing, and developing performance-driven teams.",
  },
  {
    icon: Layers3,
    title: "Process",
    desc: "Creating structured workflows that improve speed, consistency, and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Helping businesses increase revenue opportunities and strengthen customer outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Supporting day-to-day operations with disciplined execution and quality control.",
  },
];

const timeline = [
  {
    n: "01",
    title: "Understand the Business",
    desc: "We begin by understanding your goals, current challenges, team structure, and operational needs.",
  },
  {
    n: "02",
    title: "Design the System",
    desc: "We create a scalable operating model with clear processes, roles, reporting, and performance standards.",
  },
  {
    n: "03",
    title: "Build the Team",
    desc: "We support recruitment, training, onboarding, and team development based on your business requirements.",
  },
  {
    n: "04",
    title: "Optimize for Growth",
    desc: "We continuously improve performance, strengthen operations, and align delivery with long-term success.",
  },
];

export default function About() {
  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO */}
     {/* HERO WITH BACKGROUND IMAGE */}
<section className="relative flex min-h-[78vh] items-end overflow-hidden bg-background pb-20 pt-36">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/about-hero-bg.png"
      alt="Neal Foundation About Hero Background"
      className="h-full w-full object-cover"
    />



  </div>

  {/* Texture + Glow */}
  <div className="absolute inset-0 dot-grid-light opacity-25" />
  <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-primary/15 blur-[150px]" />
  <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

  {/* Luxury Lines */}
  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

  <div className="container relative z-10 mx-auto px-6 lg:px-8">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-5xl space-y-7"
    >
      <motion.div variants={fadeUp}>
        <div className="inline-flex items-center gap-2 border border-primary/25 bg-background/45 px-4 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            About Neal Foundation
          </span>
        </div>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
      >
        Building Scalable <br />
        <em className="not-italic text-primary">Business Operations</em>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="max-w-2xl text-base font-light leading-8 text-muted-foreground"
      >
        Neal Foundation is a customer-focused business development and
        outsourcing organization helping companies build scalable operations,
        increase revenue, improve customer experiences, and streamline
        business processes.
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
        <Button
          size="lg"
          asChild
          className="h-12 rounded-none px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
        >
          <Link href="/contact">
            Work With Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button
          size="lg"
          variant="outline"
          asChild
          className="h-12 rounded-none border-primary/30 bg-background/35 px-8 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:bg-background/70"
        >
          <Link href="/#services">Explore Services</Link>
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <div>
              <motion.div variants={fadeUp} className="mb-6">
                <SectionLabel>Who We Are</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mb-8 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
              >
                Architects of{" "}
                <em className="not-italic text-primary">
                  Sustainable Growth
                </em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-base font-light leading-relaxed text-muted-foreground"
              >
                Neal Foundation provides end-to-end sales, customer support, lead
                generation, consulting, software, and operational solutions. Beyond
                staffing, we design scalable systems, strengthen business
                processes, develop high-performing teams, and build sustainable
                operations for long-term success.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-10 text-base font-light leading-relaxed text-muted-foreground"
              >
                Our approach is built around partnership, structure, execution,
                and measurable outcomes. We help businesses establish stronger
                operations while keeping growth, quality, and long-term stability
                at the center of every engagement.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden border border-border/70 bg-card/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04]"
                    >
                      <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                      <div className="mb-5 flex h-10 w-10 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <h3 className="mb-2 font-serif text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                        {item.title}
                      </h3>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -inset-px bg-gradient-to-br from-primary/25 via-border to-primary/10" />

              <div className="relative overflow-hidden bg-card p-3 shadow-[0_32px_90px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src="/about-right.png"
                    alt="Neal Foundation business operations"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 border border-primary/20 bg-background/85 p-5 backdrop-blur-md">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center border border-primary/25 bg-primary/10 text-primary">
                        <Globe className="h-4 w-4" />
                      </div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                        Global Presence
                      </p>
                    </div>

                    <p className="font-serif text-xl font-bold text-foreground">
                      United States · Canada · Bharat
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#F7F4EE] py-20 lg:py-24">
        <div className="absolute inset-0 dot-grid-light opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden border border-primary/10 bg-white/45 px-5 py-9 text-center shadow-[0_20px_60px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/70"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-primary/5 opacity-80" />

                <div className="relative z-10">
                  <div className="mx-auto mb-5 h-2 w-2 rotate-45 bg-primary/60 shadow-[0_0_18px_rgba(220,38,38,0.45)]" />

                  <div className="mb-4 font-serif text-5xl font-bold leading-none text-primary lg:text-6xl">
                    {stat.value}
                  </div>

                  <div className="mx-auto mb-4 h-px w-10 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

                  <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-border/70 lg:grid-cols-2">
            {[
              {
                icon: Target,
                label: "Our Mission",
                title: "To Build Stronger Business Systems",
                desc: "Our mission is to help businesses create scalable operations, improve customer experiences, strengthen internal processes, and unlock long-term growth through dependable outsourcing and consulting solutions.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                title: "To Become a Trusted Growth Partner",
                desc: "Our vision is to be recognized as a reliable business development and operational partner for companies seeking sustainable expansion across global markets.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative min-h-[360px] overflow-hidden bg-card p-8 transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)] lg:p-10"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="font-serif text-xs tracking-[0.24em] text-muted-foreground/50 group-hover:text-primary">
                        0{i + 1}
                      </span>
                    </div>

                    <SectionLabel>{item.label}</SectionLabel>

                    <h3 className="mb-5 mt-6 font-serif text-2xl font-bold leading-tight text-foreground transition-colors duration-500 group-hover:text-primary lg:text-3xl">
                      {item.title}
                    </h3>

                    <p className="text-base font-light leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES + PROCESS */}
      <section className="relative overflow-hidden bg-muted py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Values */}
            <div className="space-y-12">
              <div className="space-y-6">
                <SectionLabel>What Drives Us</SectionLabel>

                <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                  Our Core Values
                </h2>

                <div className="h-px w-20 bg-gradient-to-r from-primary/60 to-transparent" />
              </div>

              <div className="border-y border-border/70">
                {values.map((val, i) => (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex gap-5 overflow-hidden border-b border-border/60 px-1 py-6 transition-all duration-500 last:border-b-0 hover:bg-background/45 sm:px-4"
                  >
                    <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                    <span className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary/20 bg-muted text-[11px] font-serif font-bold italic text-primary/45 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      0{i + 1}
                    </span>

                    <div className="relative z-10">
                      <h4 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                        {val.title}
                      </h4>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="space-y-12">
              <div className="space-y-6">
                <SectionLabel>How We Work</SectionLabel>

                <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                  Our Growth Framework
                </h2>

                <div className="h-px w-20 bg-gradient-to-r from-primary/60 to-transparent" />
              </div>

              <div className="relative space-y-6">
                <div className="absolute left-[17px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:block" />

                {timeline.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: i * 0.09,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex gap-5 sm:gap-7"
                  >
                    <div className="relative z-10 mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center border border-primary/25 bg-muted text-[11px] font-serif font-bold italic text-primary/55 transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      {step.n}
                    </div>

                    <div className="flex-1 border-t border-border/80 pt-5 transition-all duration-500 group-hover:border-primary/45">
                      <h4 className="mb-2 font-serif text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                        {step.title}
                      </h4>

                      <p className="text-sm font-light leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_45%)]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-5xl overflow-hidden border border-border/80 bg-card p-8 text-center shadow-[0_32px_90px_rgba(0,0,0,0.12)] md:p-14"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.08] blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/[0.045] blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-3xl space-y-7">
              <div className="flex justify-center">
                <SectionLabel>Partner With Us</SectionLabel>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                Ready to Build Stronger <br />
                <em className="not-italic text-primary">Business Operations?</em>
              </h2>

              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                Let’s discuss how Neal Foundation can support your sales, support,
                consulting, software, and operational growth requirements.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-none px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
                >
                  <Link href="/contact">
                    Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 rounded-none border-primary/25 px-8 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}