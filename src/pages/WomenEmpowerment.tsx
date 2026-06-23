import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Heart, BookOpen, Users2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";

export default function WomenEmpowerment() {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Skill Development",
      desc: "Comprehensive training programs in digital literacy, vocational skills, and professional development.",
    },
    {
      icon: TrendingUp,
      title: "Economic Opportunities",
      desc: "Support for entrepreneurship, microfinance, and sustainable income-generating activities.",
    },
    {
      icon: Users2,
      title: "Community Building",
      desc: "Peer support networks and collective empowerment initiatives for women's growth.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      desc: "Healthcare access, nutrition programs, and mental health support for women.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-20 pt-36">
        <div className="absolute inset-0">
          <img
            src="/ladies.png"
            alt="Women Empowerment"
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
               Empowerment - <span className="text-gradient-brand">Building Stronger </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-medium leading-8 text-gray-900"
            >
              Neal Foundation is dedicated to empowering women through education, skill development, economic opportunities, and health support. We believe that when women thrive, communities flourish.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
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
                <Link href="/our-work">Back to Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-30" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/6 blur-[130px]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>Key Initiatives</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mb-12 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl"
            >
              Programs That <em className="not-italic text-primary">Transform Lives</em>
            </motion.h2>

            <div className="grid grid-cols-1 gap-px bg-border/70 md:grid-cols-2 lg:grid-cols-4">
              {initiatives.map((initiative, i) => {
                const Icon = initiative.icon;

                return (
                  <motion.div
                    key={initiative.title}
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
                      {initiative.title}
                    </h3>

                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {initiative.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT CTA */}
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
              <SectionLabel>Make a Difference</SectionLabel>

              <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                Support Women's <br />
                <em className="not-italic text-primary">Empowerment Today</em>
              </h2>

              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                Your support directly impacts women's lives through education, employment, and community building. Join us in creating opportunities for a brighter future.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
                >
                  <Link href="/contact">
                    Contribute <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-12 rounded-md border-primary/30 bg-background/35 px-8 text-xs font-bold uppercase tracking-[0.14em] backdrop-blur-md hover:bg-background/70"
                >
                  <Link href="/our-work">Explore Other Programs</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
