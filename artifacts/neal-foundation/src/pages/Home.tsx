import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Building2, PhoneCall, Code2, LineChart, Globe, Zap, HeartHandshake, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function AnimatedCounter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const incrementTime = (duration / end) * 2;

      const timer = setInterval(() => {
        start += 1;
        setCount(Math.min(start, end));
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
        {value === 0 && typeof count !== 'number' ? value : count}{suffix}
      </div>
      <div className="text-sm font-medium text-secondary-foreground/70 uppercase tracking-widest">{label}</div>
    </div>
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone is required"),
  serviceRequired: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters")
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
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    toast({
      title: "Consultation Request Received",
      description: "A representative will contact you within 24 hours.",
    });
    form.reset();
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-foreground backdrop-blur-sm text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Building Businesses. Creating Opportunities. Delivering Results.
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] tracking-tight">
              Your Trusted <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Growth Partner</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-2xl text-secondary-foreground/80 leading-relaxed max-w-3xl font-light">
              Neal Foundation, through its operational division 24X7NetConnect, provides enterprise-grade sales outsourcing, customer support, lead generation, and BPO services across the US, Canada, and India.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 pt-8">
              <Button size="lg" className="rounded-none text-lg h-16 px-10 shadow-[0_0_40px_rgba(29,111,219,0.3)] hover:shadow-[0_0_60px_rgba(29,111,219,0.5)] transition-all" asChild>
                <a href="#contact">Schedule Consultation <ArrowRight className="ml-3 w-5 h-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none text-lg h-16 px-10 border-secondary-foreground/30 hover:bg-secondary-foreground/10 text-secondary-foreground transition-all" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div className="space-y-8">
              <motion.h2 variants={fadeIn} className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Who We Are</motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Architects of <br/>Scalable Operations
              </motion.h3>
              <motion.div variants={fadeIn} className="w-16 h-1 bg-primary"></motion.div>
              <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed font-light">
                Neal Foundation is a customer-focused business development and outsourcing organization helping companies build scalable operations, increase revenue, improve customer experiences, and streamline business processes.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                Through our subsidiary 24X7NetConnect, we provide comprehensive sales, customer support, lead generation, consulting, software, and operational solutions. We do more than provide manpower — we build systems, create processes, develop teams, and establish sustainable business operations.
              </motion.p>
            </div>
            <motion.div variants={fadeIn} className="relative group">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-muted">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000&auto=format&fit=crop" alt="Corporate Team" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-serif font-bold text-3xl text-white mb-2">24X7NetConnect</p>
                  <p className="text-white/80 font-medium">The operational subsidiary powering global execution and service delivery.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 divide-x divide-border/0 md:divide-border/50">
            <AnimatedCounter value={100} label="Business Projects Supported" suffix="+" />
            <AnimatedCounter value={50} label="Team Members" suffix="+" />
            <AnimatedCounter value={3} label="Countries Served" />
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-medium text-secondary-foreground/70 uppercase tracking-widest">Support Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Expertise</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight max-w-2xl">
                Comprehensive <br/>Solutions for Scale
              </h3>
              <p className="text-lg text-muted-foreground max-w-md">
                End-to-end outsourcing and consulting services designed to integrate seamlessly with your existing operations.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sales Outsourcing",
                icon: <LineChart className="w-10 h-10" />,
                features: ["Outbound Sales Campaigns", "Inbound Sales Support", "Telecom Sales", "Customer Acquisition", "Cross-Selling & Upselling", "Lead Qualification"]
              },
              {
                title: "Customer Service",
                icon: <HeartHandshake className="w-10 h-10" />,
                features: ["Inbound Customer Support", "Email & Chat Support", "Technical Support", "Billing Support", "Retention Programs", "Loyalty Management"]
              },
              {
                title: "Lead Generation",
                icon: <Users className="w-10 h-10" />,
                features: ["B2B & B2C Generation", "Appointment Setting", "Data Research", "Prospect Qualification", "Market Research", "Pipeline Building"]
              },
              {
                title: "BPO Services",
                icon: <PhoneCall className="w-10 h-10" />,
                features: ["Call Center Operations", "CRM Management", "Back Office Support", "Order Processing", "Administrative Support", "Reporting & Analytics"]
              },
              {
                title: "Growth Consulting",
                icon: <Building2 className="w-10 h-10" />,
                features: ["Office Setup Planning", "Team Structure Design", "Recruitment & Training", "KPI Development", "Performance Systems", "Process Creation"]
              },
              {
                title: "Software Solutions",
                icon: <Code2 className="w-10 h-10" />,
                features: ["Website Development", "Business Applications", "Custom ERP Solutions", "CRM Integration", "Automation Tools", "Process Optimization"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="h-full bg-card hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500 border-border group rounded-none">
                  <CardContent className="p-10 space-y-8">
                    <div className="text-primary group-hover:text-primary transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-serif">{service.title}</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start text-muted-foreground group-hover:text-secondary-foreground/70 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 mr-3 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL / WHY CHOOSE US */}
      <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 bg-card text-card-foreground p-12 md:p-16 rounded-none shadow-2xl relative">
              <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">Our Business Model</h3>
              <h4 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">Partnerships Built on Growth</h4>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8 font-light">
                Rather than simply providing resources, Neal Foundation and 24X7NetConnect work closely with clients to build strong teams, improve operational performance, increase revenue opportunities, develop long-term business strategies, and create sustainable growth.
              </p>
              <div className="p-6 bg-secondary/5 border-l-4 border-primary">
                <p className="font-serif italic text-xl">"Our success is directly connected to the success of our clients."</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">Why Choose Us</h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  The Foundation of <br/>Operational Excellence
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Industry Experience", desc: "Practical solutions based on real-world experience." },
                  { title: "End-to-End Support", desc: "From recruitment to implementation and performance management." },
                  { title: "Cost-Effective Operations", desc: "Reduce costs while maintaining exceptional service quality." },
                  { title: "Scalable Growth Model", desc: "Systems that support sustainable growth from small teams to hundreds." }
                ].map((pillar, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-1 bg-primary mb-4"></div>
                    <h4 className="font-bold text-xl">{pillar.title}</h4>
                    <p className="text-secondary-foreground/60 font-light leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES & INDUSTRIES */}
      <section id="industries" className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Core Values */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">What Drives Us</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold">Our Core Values</h3>
              </div>
              
              <div className="space-y-8">
                {[
                  { title: "Integrity", desc: "Honesty, transparency, accountability in every interaction" },
                  { title: "Excellence", desc: "Quality services and relentless continuous improvement" },
                  { title: "Innovation", desc: "Practical solutions for adaptation and rapid growth" },
                  { title: "Partnership", desc: "Working alongside clients as an extension of their organization" },
                  { title: "Commitment", desc: "Supporting partners steadfastly through every stage of growth" }
                ].map((val, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-serif text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      0{i + 1}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-2xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">{val.title}</h4>
                      <p className="text-muted-foreground text-lg font-light">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="space-y-12">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">Where We Operate</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold">Industries We Serve</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Telecommunications", "Technology Services", "Software Solutions",
                  "Professional Services", "Customer Support Operations", "Small & Medium Businesses", "Startups & Entrepreneurs"
                ].map((ind, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="p-6 border border-border/50 bg-muted/20 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 flex items-center justify-between group cursor-pointer rounded-sm"
                  >
                    <span className="text-lg font-medium">{ind}</span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Client Success</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Delivering Real Results</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Partnering with Neal Foundation transformed our customer acquisition strategy. Their team seamlessly integrated with our operations and scaled our outbound campaigns, resulting in a 40% increase in qualified leads within the first quarter.",
                author: "Sarah Jenkins",
                role: "VP of Sales, TechFlow Solutions"
              },
              {
                quote: "The level of operational excellence 24X7NetConnect brings to the table is unmatched. They didn't just fill seats; they audited our processes, rebuilt our training protocols, and established a 24/7 support center that elevated our customer satisfaction scores.",
                author: "Michael Chang",
                role: "COO, Global Telecom Connect"
              },
              {
                quote: "As a rapidly expanding software firm, we needed a scalable growth model. Neal Foundation provided the strategic consulting and exact talent pool we needed. They truly act as an extension of our own organization.",
                author: "David Alverez",
                role: "Founder, Enterprise SaaS Group"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-card border-none shadow-lg rounded-none relative">
                <CardContent className="p-10 pt-14">
                  <MessageSquareQuote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
                  <div className="space-y-8 relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-lg font-light italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-foreground font-serif">{testimonial.author}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto shadow-2xl overflow-hidden flex flex-col lg:flex-row rounded-sm border border-border">
            
            {/* Contact Info Side */}
            <div className="lg:w-2/5 bg-secondary text-secondary-foreground p-12 md:p-16 space-y-12 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Grow Together</h2>
                <div className="w-12 h-1 bg-primary mb-8"></div>
                <p className="text-secondary-foreground/80 leading-relaxed text-lg font-light">
                  Whether you're looking to expand your sales operations, improve customer service, build an outsourcing team, or launch a new business operation, Neal Foundation and 24X7NetConnect are ready to support your growth.
                </p>
              </div>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold mb-1">Global Presence</h5>
                    <p className="text-secondary-foreground/70 font-light">United States • Canada • India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <HeartHandshake className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold mb-1">Partnership First</h5>
                    <p className="text-secondary-foreground/70 font-light">Dedicated to long-term sustainable growth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form Side */}
            <div className="lg:w-3/5 p-12 md:p-16 bg-card">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" placeholder="John Doe" {...field} />
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
                          <FormLabel className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Company Name</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" placeholder="Acme Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Work Email</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" type="email" placeholder="john@example.com" {...field} />
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
                          <FormLabel className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input className="h-12 rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" placeholder="+1 (555) 000-0000" {...field} />
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
                        <FormLabel className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-border focus:ring-0 focus:border-primary px-0 bg-transparent">
                              <SelectValue placeholder="Select a primary service" />
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
                        <FormLabel className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[100px] rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-border focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent resize-none" placeholder="Tell us about your goals..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-none">
                      Book a Consultation
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
