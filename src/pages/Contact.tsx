import { motion } from "framer-motion";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Mail,
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
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";
import {
  contactSchema,
  type ContactFormValues,
  contactHighlights,
  businessAreas,
  contactCards,
} from "@/data/contact";
import { submitContactForm } from "@/api/contact";

export default function Contact() {
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

  async function onSubmit(values: ContactFormValues) {
    await submitContactForm(values);
    form.reset();
  }

  return (
    <div className="w-full overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-0 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[position:center_right]"
          style={{
            backgroundImage: "url('/contact.png')",
          }}
        />

   

        <div className="absolute inset-0 dot-grid-light opacity-25" />
        <div className="absolute right-0 top-0 h-[660px] w-[660px] rounded-full bg-primary/15 blur-[155px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 pb-20 lg:px-8">
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
                  Contact Neal Foundation
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
            >
              Let&apos;s Connect With {" "}
              <span className="text-gradient-brand">Purpose</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-medium leading-8 text-gray-900"
            >
              Reach out to volunteer, partner, support an event, or learn more
              about Neal Foundation&apos;s community programs across India.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-4 pt-2 sm:flex-row"
            >
              <Button
                size="lg"
                asChild
                className="h-[52px] rounded-md bg-primary px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 premium-glow"
              >
                <a href="#contact-form">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-[52px] rounded-md border-primary/30 bg-background/35 px-9 text-[0.84rem] font-bold uppercase tracking-[0.08em] backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-background/70"
              >
                <Link href="/our-work">
                  Explore Our Work
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FLOATING CONTACT HIGHLIGHTS */}
      <section className="relative  px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-border to-primary/10" />

            <div className="relative grid grid-cols-1 gap-px bg-border/70 md:grid-cols-3">
              {contactHighlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  className="group relative overflow-hidden bg-card/95 p-6 backdrop-blur-xl transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      {item.icon}
                    </div>

                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground/80">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
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
              Share how you would like to get involved and our team will
              connect with you about the right next step.
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
                      Let&apos;s Serve <br />
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
                      "Real change grows when people choose to care together."
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
                      Contact Request
                    </p>

                    <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      Tell Us How You Want to Help
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
                                placeholder="name@example.com"
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

      {/* CONTACT CARDS */}
      <section className="relative overflow-hidden bg-muted py-8 lg:py-12">
        <div className="absolute inset-0 dot-grid-light opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-border/70 md:grid-cols-3">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden bg-muted p-8 transition-all duration-500 hover:z-10 hover:bg-background hover:shadow-[0_24px_65px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-primary/25 bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  {card.icon}
                </div>

                <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors duration-500 group-hover:text-primary">
                  {card.title}
                </h3>

                <p className="mb-3 text-sm font-semibold text-primary">
                  {card.value}
                </p>

                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-28">
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
              <SectionLabel>Ready to Help?</SectionLabel>
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
                Let&apos;s Build More <br />
                <em className="not-italic text-primary">Community Impact</em>
              </h2>

              <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                Our team is ready to understand how you want to contribute and
                guide you toward a meaningful way to get involved.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  asChild
                  className="h-[52px] rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
                >
                  <a href="#contact-form">
                    Fill the Form
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-[52px] rounded-md border-primary/25 px-8 text-xs font-bold uppercase tracking-[0.14em]"
                >
                  <Link href="/">
                    Back to Home
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
