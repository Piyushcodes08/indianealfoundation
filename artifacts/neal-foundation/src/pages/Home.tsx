import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  PhoneCall,
  Code2,
  LineChart,
  Users,
  HeartHandshake,
  Globe,
  CheckCircle2,
  MapPin,
  Mail,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-6 h-px bg-primary" />
      <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary">
        {children}
      </span>
    </div>
  );
}

function AnimatedCounter({
  value,
  label,
  suffix = "",
  prefix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center" data-testid={`stat-${label.toLowerCase().replace(/ /g, "-")}`}>
      <div className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-3 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/50">
        {label}
      </div>
    </div>
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone is required"),
  serviceRequired: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
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

  const onSubmit = (_values: z.infer<typeof contactSchema>) => {
    toast({
      title: "Consultation Request Received",
      description: "A representative will contact you within 24 hours.",
    });
    form.reset();
  };

  const services = [
    {
      num: "01",
      title: "Sales Outsourcing",
      icon: <LineChart className="w-5 h-5" />,
      desc: "End-to-end outbound and inbound sales programs that fill your pipeline and close revenue.",
      features: [
        "Outbound Sales Campaigns",
        "Inbound Sales Support",
        "Telecom Sales",
        "Customer Acquisition",
        "Cross-Selling & Upselling",
        "Lead Qualification",
      ],
    },
    {
      num: "02",
      title: "Customer Service",
      icon: <HeartHandshake className="w-5 h-5" />,
      desc: "24/7 multi-channel support operations that retain customers and build loyalty.",
      features: [
        "Inbound Customer Support",
        "Email & Chat Support",
        "Technical Support",
        "Billing Support",
        "Retention Programs",
        "Loyalty Management",
      ],
    },
    {
      num: "03",
      title: "Lead Generation",
      icon: <Users className="w-5 h-5" />,
      desc: "Data-driven B2B and B2C lead generation programs built for consistent pipeline growth.",
      features: [
        "B2B & B2C Generation",
        "Appointment Setting",
        "Data Research & Validation",
        "Prospect Qualification",
        "Market Research",
        "Pipeline Building",
      ],
    },
    {
      num: "04",
      title: "BPO Services",
      icon: <PhoneCall className="w-5 h-5" />,
      desc: "Full-scale call center and back-office operations designed for efficiency and scale.",
      features: [
        "Call Center Operations",
        "CRM Management",
        "Back Office Support",
        "Order Processing",
        "Administrative Support",
        "Reporting & Analytics",
      ],
    },
    {
      num: "05",
      title: "Growth Consulting",
      icon: <Building2 className="w-5 h-5" />,
      desc: "Strategic advisory and execution support to build and scale business operations from the ground up.",
      features: [
        "Office Setup Planning",
        "Team Structure Design",
        "Recruitment & Training",
        "KPI Development",
        "Performance Systems",
        "Growth & Expansion Planning",
      ],
    },
    {
      num: "06",
      title: "Software Solutions",
      icon: <Code2 className="w-5 h-5" />,
      desc: "Custom digital tools, ERP systems, and automation that accelerate your operational efficiency.",
      features: [
        "Website Development",
        "Business Applications",
        "Custom ERP Solutions",
        "CRM Integration",
        "Automation Tools",
        "Process Optimization",
      ],
    },
  ];

  const values = [
    { title: "Integrity", desc: "Honesty, transparency, and accountability in every interaction." },
    { title: "Excellence", desc: "Delivering quality services and relentlessly improving operations." },
    { title: "Innovation", desc: "Practical solutions that help businesses adapt and grow." },
    { title: "Partnership", desc: "Working alongside clients as an extension of their organization." },
    { title: "Commitment", desc: "Supporting partners through every stage of growth." },
  ];

  const testimonials = [
    {
      quote:
        "Partnering with Neal Foundation transformed our customer acquisition strategy. Their team integrated seamlessly with our operations and scaled our outbound campaigns — resulting in a 40% increase in qualified leads within the first quarter.",
      author: "Sarah Jenkins",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      initials: "SJ",
    },
    {
      quote:
        "The operational excellence 24X7NetConnect brings is unmatched. They didn't just fill seats — they audited our processes, rebuilt our training protocols, and established a 24/7 support center that elevated our customer satisfaction scores significantly.",
      author: "Michael Chang",
      role: "Chief Operating Officer",
      company: "Global Telecom Connect",
      initials: "MC",
    },
    {
      quote:
        "As a rapidly expanding software firm, we needed a scalable growth model. Neal Foundation provided the strategic consulting and talent we needed. They truly act as an extension of our own organization — every step of the way.",
      author: "David Alvarez",
      role: "Founder",
      company: "Enterprise SaaS Group",
      initials: "DA",
    },
  ];

  const marqueeItems = [
    "Sales Outsourcing",
    "Customer Support",
    "Lead Generation",
    "Business Consulting",
    "BPO Services",
    "Software Solutions",
    "Growth Partnerships",
    "Operational Excellence",
  ];

  return (
    <div className="w-full overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative min-h-screen flex items-end pb-0 pt-28 overflow-hidden bg-secondary"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 dot-grid opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/96 to-[hsl(214,70%,14%)]" />
        <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-primary/8 blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-0">
          <div className="max-w-5xl pb-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-9"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel>Neal Foundation &nbsp;·&nbsp; 24X7NetConnect</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-serif font-bold leading-[1.04] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
              >
                <span className="text-secondary-foreground block">Your Trusted</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80 block">
                  Growth Partner
                </span>
                <span className="text-secondary-foreground/80 block font-light italic" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}>
                  in Sales, Technology &amp; Outsourcing
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg text-secondary-foreground/60 leading-relaxed max-w-2xl font-light"
              >
                Neal Foundation, through its operational division 24X7NetConnect, delivers enterprise-grade sales outsourcing, customer support, lead generation, and BPO services across the United States, Canada, and India.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="rounded-none h-13 px-9 text-sm font-semibold tracking-[0.08em] uppercase bg-primary hover:bg-primary/90 shadow-[0_0_48px_rgba(29,111,219,0.28)] hover:shadow-[0_0_64px_rgba(29,111,219,0.44)] transition-all duration-300"
                  data-testid="button-schedule-consultation"
                >
                  <a href="#contact">
                    Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-none h-13 px-9 text-sm font-semibold tracking-[0.08em] uppercase border-secondary-foreground/20 text-secondary-foreground/80 hover:bg-secondary-foreground/8 hover:border-secondary-foreground/40 transition-all duration-300 bg-transparent"
                  data-testid="button-contact-us"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="pt-8 flex items-center gap-8 border-t border-white/8"
              >
                {[
                  { val: "100+", label: "Projects" },
                  { val: "3", label: "Countries" },
                  { val: "24/7", label: "Operations" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-serif font-bold text-primary">{s.val}</div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-secondary-foreground/40 mt-0.5">{s.label}</div>
                  </div>
                ))}
                <div className="flex-1 hidden sm:block" />
                <div className="hidden sm:flex items-center gap-2 text-xs text-secondary-foreground/30 font-light">
                  <MapPin className="w-3 h-3 text-primary/50" />
                  United States &nbsp;·&nbsp; Canada &nbsp;·&nbsp; India
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* ─── MARQUEE TICKER ─── */}
      <div className="bg-primary overflow-hidden py-3.5" aria-hidden="true">
        <div className="marquee-track select-none">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-5 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/90 px-7">
              {item}
              <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-32 bg-background relative" data-testid="section-about">
        <div className="absolute inset-0 dot-grid-light opacity-60" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div className="space-y-9">
              <motion.div variants={fadeUp}>
                <SectionLabel>Who We Are</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-serif font-bold text-foreground leading-[1.08]"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)" }}
              >
                Architects of <br />
                <em className="not-italic text-primary">Scalable Operations</em>
              </motion.h2>
              <motion.div variants={fadeUp} className="w-10 h-px bg-primary" />
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed font-light">
                Neal Foundation is a customer-focused business development and outsourcing organization helping companies build scalable operations, increase revenue, improve customer experiences, and streamline business processes.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-muted-foreground leading-relaxed font-light">
                Through our subsidiary 24X7NetConnect, we provide comprehensive sales, customer support, lead generation, consulting, software, and operational solutions. We do more than provide manpower — we build systems, create processes, develop teams, and establish sustainable business operations.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 pt-2">
                {[
                  "Build Strong Teams",
                  "Improve Operational Performance",
                  "Increase Revenue Opportunities",
                  "Create Sustainable Growth",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -inset-4 bg-primary/6 -z-10" />
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000&auto=format&fit=crop"
                  alt="Corporate team at Neal Foundation"
                  className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-700"
                  data-testid="img-about"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-serif font-bold text-2xl text-white mb-1">24X7NetConnect</p>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    The operational engine delivering global sales, support, and BPO excellence.
                  </p>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 border border-primary/40 flex items-center justify-center">
                  <span className="font-serif font-bold text-sm text-primary/80 leading-none">NF</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-secondary py-20 relative overflow-hidden" data-testid="section-stats">
        <div className="absolute inset-0 line-grid" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { value: 100, label: "Business Projects", suffix: "+" },
              { value: 50, label: "Team Members", suffix: "+" },
              { value: 3, label: "Countries Served", suffix: "" },
              { value: 0, label: "Support Operations", suffix: "" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`py-10 px-6 text-center relative ${i < 3 ? "md:border-r border-white/8" : ""} ${i < 2 ? "border-r border-white/8 md:border-r-0" : ""}`}
              >
                {stat.value === 0 ? (
                  <div data-testid="stat-support-operations">
                    <div className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-3">24/7</div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/50">
                      Support Operations
                    </div>
                  </div>
                ) : (
                  <AnimatedCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-32 bg-background relative" data-testid="section-services">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <SectionLabel>Our Expertise</SectionLabel>
            </motion.div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <motion.h2
                variants={fadeUp}
                className="font-serif font-bold text-foreground leading-[1.08] max-w-xl"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)" }}
              >
                Comprehensive Solutions <br />
                <em className="not-italic text-primary">Built for Scale</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-sm text-base font-light leading-relaxed lg:mb-1">
                End-to-end outsourcing and consulting services that integrate seamlessly with your operations.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background group relative overflow-hidden hover:bg-secondary transition-colors duration-500 cursor-default"
                data-testid={`card-service-${i}`}
              >
                <div className="p-9 space-y-6 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary transition-colors duration-400">
                      {service.icon}
                    </div>
                    <span className="service-card-num group-hover:text-primary/20">{service.num}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-secondary-foreground transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground/60 leading-relaxed font-light transition-colors">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex-1">
                    <ul className="space-y-2.5">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-secondary-foreground/65 transition-colors font-light">
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 group-hover:bg-primary/70" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-primary border-b border-primary/40 pb-0.5 hover:border-primary">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-32 bg-secondary relative overflow-hidden" data-testid="section-why">
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[140px] translate-x-1/3 -translate-y-1/4" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            <div className="space-y-14">
              <div className="space-y-7">
                <SectionLabel>Why Choose Us</SectionLabel>
                <h2
                  className="font-serif font-bold text-secondary-foreground leading-[1.08]"
                  style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)" }}
                >
                  The Foundation of <br />
                  <em className="not-italic text-primary">Operational Excellence</em>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  {
                    n: "01",
                    title: "Industry Experience",
                    desc: "Practical solutions built from real-world experience scaling sales and support operations across industries.",
                  },
                  {
                    n: "02",
                    title: "End-to-End Support",
                    desc: "From recruitment and training to implementation and performance management — we assist at every stage.",
                  },
                  {
                    n: "03",
                    title: "Cost-Effective Operations",
                    desc: "Reduce operational costs while maintaining the exceptional service quality your clients expect.",
                  },
                  {
                    n: "04",
                    title: "Scalable Growth Model",
                    desc: "Systems that support sustainable growth — from a five-person team to a five-hundred-person operation.",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-6 group"
                    data-testid={`pillar-${i}`}
                  >
                    <div className="text-[11px] font-serif italic font-bold text-primary/40 mt-1 w-6 flex-shrink-0 group-hover:text-primary/70 transition-colors">
                      {p.n}
                    </div>
                    <div className="border-t border-white/8 pt-5 flex-1">
                      <h4 className="font-serif font-bold text-lg text-secondary-foreground mb-2">{p.title}</h4>
                      <p className="text-sm text-secondary-foreground/55 font-light leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-card text-card-foreground relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                <div className="p-10 md:p-14 space-y-8">
                  <SectionLabel>Our Business Model</SectionLabel>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight">
                    Partnerships Built <br />on Growth
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-base">
                    Rather than simply providing resources, Neal Foundation and 24X7NetConnect work closely with clients to build strong teams, improve operational performance, increase revenue opportunities, develop long-term business strategies, and create sustainable growth.
                  </p>
                  <div className="space-y-3 pt-2">
                    {[
                      "Build Strong Teams",
                      "Improve Operational Performance",
                      "Increase Revenue Opportunities",
                      "Develop Long-Term Business Strategies",
                      "Create Sustainable Growth",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                        <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="font-serif italic text-lg text-foreground/70 leading-relaxed">
                      "Our success is directly connected to the success of our clients."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── VALUES & INDUSTRIES ─── */}
      <section id="industries" className="py-32 bg-background" data-testid="section-industries">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">

            <div className="space-y-14">
              <div className="space-y-6">
                <SectionLabel>What Drives Us</SectionLabel>
                <h2
                  className="font-serif font-bold text-foreground leading-[1.08]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  Our Core Values
                </h2>
              </div>
              <div className="space-y-0 divide-y divide-border/60">
                {values.map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-6 py-7 group hover:bg-muted/30 -mx-4 px-4 transition-colors duration-200"
                    data-testid={`value-${val.title.toLowerCase()}`}
                  >
                    <div className="w-7 flex-shrink-0 pt-0.5">
                      <span className="text-[11px] font-serif italic font-bold text-primary/40 group-hover:text-primary/70 transition-colors">
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors mb-1.5">
                        {val.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-14">
              <div className="space-y-6">
                <SectionLabel>Where We Operate</SectionLabel>
                <h2
                  className="font-serif font-bold text-foreground leading-[1.08]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  Industries We Serve
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-0 divide-y divide-border/60">
                {[
                  "Telecommunications",
                  "Technology Services",
                  "Software Solutions",
                  "Professional Services",
                  "Customer Support Operations",
                  "Small & Medium Businesses",
                  "Startups & Entrepreneurs",
                ].map((ind, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center justify-between py-5 group hover:bg-muted/30 -mx-4 px-4 transition-colors duration-200 cursor-pointer"
                    data-testid={`industry-${i}`}
                  >
                    <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">{ind}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-32 bg-secondary relative overflow-hidden" data-testid="section-testimonials">
        <div className="absolute inset-0 dot-grid opacity-70" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16 space-y-5"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Client Success</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif font-bold text-secondary-foreground leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Delivering Real Results
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-secondary/80 p-10 flex flex-col gap-8 group hover:bg-card transition-colors duration-400"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="font-serif text-7xl leading-none text-primary/15 group-hover:text-primary/25 transition-colors font-bold -mb-4 select-none">
                  "
                </div>
                <p className="text-secondary-foreground/70 group-hover:text-muted-foreground leading-relaxed text-base font-light italic flex-1 transition-colors">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-secondary-foreground group-hover:text-foreground text-sm transition-colors">{t.author}</p>
                    <p className="text-xs text-primary/80 font-medium">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-32 bg-background relative" data-testid="section-contact">
        <div className="absolute inset-0 dot-grid-light opacity-50" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-border shadow-2xl overflow-hidden">

              <div className="lg:col-span-2 bg-secondary text-secondary-foreground p-10 md:p-14 space-y-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                <div className="relative z-10 space-y-7">
                  <SectionLabel>Get in Touch</SectionLabel>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-foreground leading-tight">
                    Let's Grow Together
                  </h2>
                  <div className="w-8 h-px bg-primary" />
                  <p className="text-secondary-foreground/65 leading-relaxed text-sm font-light">
                    Whether you're looking to expand your sales operations, improve customer service, build an outsourcing team, or launch a new business operation, Neal Foundation and 24X7NetConnect are ready to support your growth.
                  </p>
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-secondary-foreground/35 mb-0.5">Global Presence</p>
                      <p className="text-sm text-secondary-foreground/70 font-light">United States &nbsp;·&nbsp; Canada &nbsp;·&nbsp; India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-secondary-foreground/35 mb-0.5">Response Time</p>
                      <p className="text-sm text-secondary-foreground/70 font-light">Within 24 business hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-secondary-foreground/35 mb-0.5">Partnership First</p>
                      <p className="text-sm text-secondary-foreground/70 font-light">Dedicated to your long-term success</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 bg-card p-10 md:p-14">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                    data-testid="form-contact"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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
                                className="h-11 rounded-none border-b border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-sm"
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
                              Company Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-none border-b border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-sm"
                                placeholder="Acme Corp"
                                data-testid="input-company"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              Work Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="h-11 rounded-none border-b border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-sm"
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
                                className="h-11 rounded-none border-b border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent text-sm"
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
                            Service Required
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger
                                className="h-11 rounded-none border-b border-t-0 border-l-0 border-r-0 border-border focus:ring-0 focus:border-primary px-0 bg-transparent text-sm"
                                data-testid="select-service"
                              >
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sales">Sales Outsourcing</SelectItem>
                              <SelectItem value="support">Customer Service Solutions</SelectItem>
                              <SelectItem value="leads">Lead Generation Services</SelectItem>
                              <SelectItem value="bpo">Business Process Outsourcing</SelectItem>
                              <SelectItem value="consulting">Business Setup & Growth Consulting</SelectItem>
                              <SelectItem value="software">Software & Digital Solutions</SelectItem>
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
                              className="min-h-[90px] rounded-none border-b border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent resize-none text-sm"
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
                        className="w-full text-sm font-semibold tracking-[0.1em] uppercase h-12 rounded-none"
                        data-testid="button-submit-consultation"
                      >
                        Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
