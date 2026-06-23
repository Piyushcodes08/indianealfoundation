import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  HeartHandshake,
  HandHeart,
  Megaphone,
  Sprout,
  Users2,
  Heart,
  Zap,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel, AnimatedCounter } from "@/components/shared";

export default function About() {
  const stats = [
    { value: 350000, label: "People Helped since 2024", suffix: "+" },
    { value: 120, label: "Unique Programs (4 focus areas)", suffix: "+" },
    { value: 5000, label: "Volunteers Engaged (rural & urban)", suffix: "+" },
  ];

  const coreValues = [
    {
      title: "Compassion",
      desc: "We believe genuine progress is built on compassion for all communities.",
    },
    {
      title: "Empowerment",
      desc: "We equip women, children, and vulnerable groups with tools and knowledge.",
    },
    {
      title: "Community",
      desc: "We foster strong communities through collaborative volunteer initiatives.",
    },
    {
      title: "Sustainability",
      desc: "We create lasting change through sustainable, long-term programs.",
    },
  ];

  const focusAreas = [
    {
      icon: Heart,
      title: "Women Empowerment",
      desc: "Supporting women through education, skill development, and economic opportunities.",
    },
    {
      icon: Users2,
      title: "Child Education",
      desc: "Providing quality education and mentorship to disadvantaged children.",
    },
    {
      icon: Zap,
      title: "Health & Nutrition",
      desc: "Ensuring access to healthcare and nutritional support for vulnerable populations.",
    },
    {
      icon: Sprout,
      title: "Animal Welfare",
      desc: "Promoting compassionate care and support for animals in communities.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-20 pt-36">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/about.png"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/45 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  About Neal Foundation
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
            >
              Hope That Uplifts,{" "}
              <span className="text-gradient-brand"> Support That Lasts</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-medium leading-8 text-gray-900"
            >
              At the Neal Foundation, we believe that genuine progress is based on compassion. We are a community-based nonprofit organization committed to fostering hope and improving lives for women, children, the weak, and those without a voice.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="h-12 rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
              >
                <Link href="/contact">
                  Join Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-md border-primary/30 bg-background/35 px-8 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:bg-background/70"
              >
                <a href="#focus-areas">Learn More</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT DETAILS */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

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
                <SectionLabel>Our Foundation</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mb-8 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
              >
                Building <em className="not-italic text-primary">Hope Through Compassion</em>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-base font-light leading-relaxed text-muted-foreground"
              >
                The Neal Foundation is a community-based nonprofit organization dedicated to creating positive social change across India. We believe that with dedicated volunteers, strategic programs, and compassionate leadership, we can transform lives and strengthen communities.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-10 text-base font-light leading-relaxed text-muted-foreground"
              >
                Our work spans four critical focus areas: women empowerment, child education, health and nutrition, and animal welfare. By engaging volunteers and supporting grassroots initiatives, we create sustainable impact in every community we serve.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {coreValues.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden border border-border/70 bg-card/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04]"
                  >
                    <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                    <h3 className="mb-2 font-serif text-lg font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-muted">
                  <img
                    src="/about-r8.png"
                    alt="Neal Foundation Team"
                    className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
                  />

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

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#F7F4EE] py-24 lg:py-28">
        <div className="absolute inset-0 dot-grid-light opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.055),transparent_55%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[28px] border border-primary/10 bg-white/45 px-5 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/70 hover:shadow-[0_30px_90px_rgba(255,0,0,0.10)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-primary/5 opacity-80" />

                <div className="absolute top-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mx-auto mb-6 h-2 w-2 rotate-45 bg-primary/60 shadow-[0_0_18px_rgba(255,0,0,0.45)]" />

                <div className="relative z-10">
                  <div className="mb-4 [&_*:first-child]:font-serif [&_*:first-child]:text-5xl [&_*:first-child]:font-bold [&_*:first-child]:leading-none [&_*:first-child]:text-primary lg:[&_*:first-child]:text-6xl">
                    <AnimatedCounter
                      value={stat.value}
                      label=""
                      suffix={stat.suffix}
                    />
                  </div>

                  <div className="mx-auto mb-4 h-px w-10 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

                  <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-foreground/70">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section id="focus-areas" className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute left-0 bottom-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mb-16 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel>Our Impact Areas</SectionLabel>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
            >
              Four Pillars of <em className="not-italic text-primary">Change</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border/70 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden bg-muted p-8 transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                    {area.title}
                  </h3>

                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative overflow-hidden bg-muted py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-border/70 lg:grid-cols-2">
            {[
              {
                icon: Target,
                label: "Our Mission",
                title: "Hope & Empowerment",
                desc: "To foster hope and improve lives for women, children, vulnerable populations, and those without a voice. We empower communities through education, healthcare, economic opportunities, and compassionate care.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                title: "Strong Communities",
                desc: "A world where every individual in vulnerable communities has access to education, healthcare, economic opportunity, and dignity. Where compassionate volunteers work together to create lasting positive change.",
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

      {/* MEET OUR FOUNDER */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />
        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24"
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-muted">
                  <img
                    src="/founder.png"
                    alt="Vahlay Patel, Founder of Neal Foundation"
                    className="object-cover w-full h-full scale-105 transition-transform duration-700 hover:scale-100"
                  />

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

            <div>
              <motion.div variants={fadeUp} className="mb-6">
                <SectionLabel>Our Founder</SectionLabel>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mb-6 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
              >
                Vahlay Patel
              </motion.h2>

              <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
                <div className="w-14 h-px bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-24 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-6 text-base font-light leading-relaxed text-muted-foreground"
              >
                Vahlay Patel is the visionary founder of Neal Foundation, driven by a deep commitment to creating meaningful social change in communities across India. With a passion for compassion and a dedication to empowering the vulnerable, Vahlay has built Neal Foundation on the principles of hope, dignity, and sustainable development.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-8 text-base font-light leading-relaxed text-muted-foreground"
              >
                Under Vahlay's leadership, Neal Foundation has grown to touch the lives of over 350,000 people through four strategic focus areas: women empowerment, child education, health and nutrition, and animal welfare. His vision is to create a world where every vulnerable individual has access to education, opportunity, and dignity.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                    <HeartHandshake className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Compassionate Leadership</p>
                    <p className="text-sm text-muted-foreground">Leading with empathy and genuine care for communities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                    <Sprout className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sustainable Impact</p>
                    <p className="text-sm text-muted-foreground">Building long-term programs that create lasting change</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                    <Users2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Community Driven</p>
                    <p className="text-sm text-muted-foreground">Empowering volunteers and local initiatives</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
              <SectionLabel>Join Our Mission</SectionLabel>

              <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                Together We <br />
                <em className="not-italic text-primary">Create Change</em>
              </h2>

              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                Every volunteer, every contribution, and every act of compassion brings us closer to our vision of stronger, more empowered communities. Join us today and be part of the change.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
                >
                  <Link href="/contact">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 rounded-md border-primary/30 bg-background/35 px-8 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:bg-background/70"
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
