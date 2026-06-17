import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  Mail,
  Globe,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rotate-45 bg-primary" />
        <span className="w-10 h-px bg-gradient-to-r from-primary to-primary/15" />
      </span>
      <span className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-primary">
        {children}
      </span>
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

export default function Contact() {
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

  return (
    <div className="w-full overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[52vh] flex items-end pb-0 pt-32 overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid-light opacity-40" />
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-primary/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl space-y-7"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-primary">
                  Get In Touch
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground"
            >
              Let's <span className="text-gradient-brand">Connect</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground leading-8 max-w-2xl font-light"
            >
              Schedule a consultation and discover how Neal Foundation can help
              build stronger teams, improve operations, and grow revenue.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="relative overflow-hidden bg-background py-28 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-35" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionLabel>Contact Details</SectionLabel>
                <h2 className="mt-5 font-serif font-bold text-3xl sm:text-4xl text-foreground leading-[1.06]">
                  Reach Us <em className="not-italic text-primary">Anytime</em>
                </h2>
                <p className="mt-4 text-base text-muted-foreground font-light leading-relaxed">
                  Our team operates across three time zones to ensure you always
                  have a responsive partner — 24 hours a day, 7 days a week.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: <Globe className="w-5 h-5 text-primary" />,
                    label: "Website",
                    value: "www.nealfoundation.com",
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-primary" />,
                    label: "Email",
                    value: "info@nealfoundation.com",
                  },
                  {
                    icon: <PhoneCall className="w-5 h-5 text-primary" />,
                    label: "Phone",
                    value: "Available upon request",
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-primary" />,
                    label: "Operations",
                    value: "United States · Canada · Bharat",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:[&_svg]:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="premium-surface relative overflow-hidden border border-border/80 p-8 shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <p className="font-serif text-lg italic leading-relaxed text-foreground/80">
                  "Our success is directly connected to the success of our clients."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/40" />
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                    Neal Foundation
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="premium-surface relative overflow-hidden border border-border/80 bg-background/85 p-8 md:p-12 shadow-xl backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.06] blur-[90px]" />

                <div className="relative z-10">
                  <SectionLabel>Schedule Consultation</SectionLabel>
                  <h3 className="mt-5 mb-8 font-serif font-bold text-2xl sm:text-3xl text-foreground leading-tight">
                    Tell Us About <em className="not-italic text-primary">Your Business</em>
                  </h3>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  className="h-12 rounded border-border/80 bg-background/60 focus:border-primary focus:ring-primary/20 transition-colors"
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
                              <FormLabel className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                                Company Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your company"
                                  className="h-12 rounded border-border/80 bg-background/60 focus:border-primary focus:ring-primary/20 transition-colors"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                                Email Address *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="you@company.com"
                                  className="h-12 rounded border-border/80 bg-background/60 focus:border-primary focus:ring-primary/20 transition-colors"
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
                              <FormLabel className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                                Phone Number *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+1 (555) 000-0000"
                                  className="h-12 rounded border-border/80 bg-background/60 focus:border-primary focus:ring-primary/20 transition-colors"
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
                            <FormLabel className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                              Service Required *
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 rounded border-border/80 bg-background/60 focus:border-primary focus:ring-primary/20">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="sales-outsourcing">Sales Outsourcing</SelectItem>
                                <SelectItem value="customer-service">Customer Service</SelectItem>
                                <SelectItem value="lead-generation">Lead Generation</SelectItem>
                                <SelectItem value="bpo-services">BPO Services</SelectItem>
                                <SelectItem value="growth-consulting">Growth Consulting</SelectItem>
                                <SelectItem value="software-solutions">Software Solutions</SelectItem>
                                <SelectItem value="other">Other / Multiple Services</SelectItem>
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
                            <FormLabel className="text-[10px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                              Tell Us About Your Needs *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your business goals, current challenges, or what you'd like to achieve..."
                                className="min-h-[130px] rounded border-border/80 bg-background/60 focus:border-primary focus:ring-primary/20 resize-none transition-colors"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded h-13 text-[0.84rem] font-bold tracking-[0.1em] uppercase bg-primary hover:bg-primary/90 text-primary-foreground premium-glow transition-all duration-300"
                      >
                        Submit Consultation Request
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        A representative will contact you within 24 business hours.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="relative overflow-hidden bg-muted py-24 lg:py-28">
        <div className="absolute inset-0 dot-grid-light opacity-55" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <SectionLabel>Global Operations</SectionLabel>
            <h2 className="mt-5 font-serif font-bold text-3xl sm:text-4xl text-foreground leading-[1.06]">
              Where We <em className="not-italic text-primary">Operate</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                country: "United States",
                desc: "Primary market for enterprise and SMB sales programs, customer service, and growth consulting.",
                items: ["Enterprise Sales Programs", "SMB Consulting", "Growth Strategy"],
              },
              {
                country: "Canada",
                desc: "Regional hub for BPO delivery, customer support operations, and bilingual service programs.",
                items: ["BPO Operations", "Bilingual Support", "Customer Service"],
              },
              {
                country: "Bharat",
                desc: "Technology development, back-office support, and 24/7 operations powering round-the-clock delivery.",
                items: ["Software Development", "24/7 Support", "Back-Office Operations"],
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-2 h-2 w-2 rotate-45 bg-primary/60" />
                <h3 className="font-serif font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {loc.country}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
                  {loc.desc}
                </p>
                <ul className="space-y-2">
                  {loc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground font-light">
                      <span className="w-1.5 h-1.5 rotate-45 bg-primary/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
