import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, BookOpen, Apple, PawPrint, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";

export default function OurWork() {
  const workAreas = [
    {
      id: 1,
      anchor: "women-empowerment",
      icon: Heart,
      title: "Women Empowerment",
      desc: "Supporting women through education, skill development, economic opportunities, and healthcare.",
      color: "from-rose-500/20 to-pink-500/10",
      href: "/women-empowerment",
    },
    {
      id: 2,
      anchor: "child-education",
      icon: BookOpen,
      title: "Child Education",
      desc: "Quality education, mentorship, scholarships, and skill development for children.",
      color: "from-blue-500/20 to-cyan-500/10",
      href: "/child-education",
    },
    {
      id: 3,
      anchor: "health-nutrition",
      icon: Apple,
      title: "Health & Nutrition",
      desc: "Healthcare camps, nutritional support, and health awareness initiatives.",
      color: "from-green-500/20 to-emerald-500/10",
      href: "/health-nutrition",
    },
    {
      id: 4,
      anchor: "animal-welfare",
      icon: PawPrint,
      title: "Animal Welfare",
      desc: "Rescue, rehabilitation, veterinary care, and community awareness for animal welfare.",
      color: "from-amber-500/20 to-orange-500/10",
      href: "/animal-welfare",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-20 pt-36">
        <div className="absolute inset-0">
          <img
            src="/our.png"
            alt="Our Work"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 dot-grid-light opacity-25" />
        <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

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
                  Our Work
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
            >
              Programs That Create <span className="text-gradient-brand">Lasting Impact</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-medium leading-8 text-gray-900"
            >
              Neal Foundation works across four focus areas to transform communities and empower individuals. Explore our initiatives and discover how you can make a difference.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="h-12 rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
              >
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-md border-primary/30 bg-background/35 px-8 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:bg-background/70"
              >
                <a href="#work-areas">Explore Our Work</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WORK AREAS */}
      <section id="work-areas" className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />
        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>Four Pillars of Change</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
            >
              Our <em className="not-italic text-primary">Focus Areas</em>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workAreas.map((area, i) => {
              const Icon = area.icon;

              return (
                <motion.div
                  id={area.anchor}
                  key={area.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[26px] border border-border/70 bg-gradient-to-br via-card/70 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-3 font-serif text-2xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                      {area.title}
                    </h3>

                    <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground">
                      {area.desc}
                    </p>

                    <Link
                      href={area.href}
                      className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:gap-3"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-muted py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

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
              <SectionLabel>Be Part of the Change</SectionLabel>

              <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                Together We <br />
                <em className="not-italic text-primary">Create Impact</em>
              </h2>

              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                Every contribution, volunteer hour, and act of compassion strengthens our mission. Join Neal Foundation in transforming communities and empowering lives.
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
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
