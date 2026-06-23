import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Sparkles,
  CalendarDays,
  MapPin,
  Search,
  X,
  Tag,
  Users,
  Clock,
  ChevronDown,
  Heart,
  BookOpen,
  Apple,
  PawPrint,
} from "lucide-react";
import { useState, useMemo } from "react";
import { fadeUp, stagger } from "@/lib/animations";
import { SectionLabel } from "@/components/shared";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────── types ── */
interface Event {
  id: number;
  day: string;
  month: string;
  year: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  location: string;
  volunteers?: number;
  duration?: string;
  impact?: string;
}

/* ───────────────────────────────────────── data ── */
const ALL_EVENTS: Event[] = [
  {
    id: 1,
    day: "16",
    month: "MAY",
    year: "2026",
    title: "Chhas Seva",
    category: "Community Service",
    shortDesc:
      "Serving refreshing chhas as a selfless service to support people during the summer season.",
    longDesc:
      "During the scorching summer months, Neal Foundation volunteers set up Chhas (buttermilk) distribution camps across busy public areas in Ahmedabad. This initiative not only provides cooling relief to pedestrians, laborers, and commuters, but also promotes hydration awareness and the spirit of selfless community giving.",
    image: "/chhasimg.png",
    location: "Ahmedabad, Gujarat",
    volunteers: 45,
    duration: "6 Hours",
    impact: "1,200+ people served",
  },
  {
    id: 2,
    day: "25",
    month: "APR",
    year: "2025",
    title: "Sharbat Seva",
    category: "Community Service",
    shortDesc:
      "Distributing refreshing drinks with compassion and care to people in the local community.",
    longDesc:
      "As temperatures soared, our volunteers distributed fresh sharbat (flavored drinks) across key localities in Ahmedabad. With a focus on underprivileged neighborhoods and construction sites, the Sharbat Seva served as a powerful gesture of solidarity and care from Neal Foundation to the community at large.",
    image: "/sarbatseva.jpg",
    location: "Ahmedabad, Gujarat",
    volunteers: 30,
    duration: "5 Hours",
    impact: "900+ glasses served",
  },
  {
    id: 3,
    day: "02",
    month: "APR",
    year: "2023",
    title: "Swachhata Abhiyan",
    category: "Community Service",
    shortDesc:
      "Bringing volunteers together to promote cleanliness, awareness, and healthier public spaces.",
    longDesc:
      "Swachhata Abhiyan brought together hundreds of enthusiastic volunteers to clean public parks, streets, and community spaces across Ahmedabad. Beyond physical cleanliness, the event educated locals on waste segregation, the dangers of open defecation, and the importance of hygiene for a healthy society.",
    image: "/image7.webp",
    location: "Ahmedabad, Gujarat",
    volunteers: 120,
    duration: "Full Day",
    impact: "15 localities cleaned",
  },
  {
    id: 4,
    day: "08",
    month: "MAR",
    year: "2023",
    title: "Women Empowerment Day",
    category: "Women Empowerment",
    shortDesc:
      "Celebrating and supporting women's education, skills, and economic opportunities.",
    longDesc:
      "On International Women's Day, Neal Foundation organized an empowerment program celebrating women achievers and equipping underprivileged women with the knowledge and tools needed for economic independence. Sessions on financial literacy, vocational training guidance, self-defense awareness, and legal rights were conducted by expert speakers.",
    image: "/WomenEmpowerment.jpg",
    location: "Ahmedabad, Gujarat",
    volunteers: 60,
    duration: "8 Hours",
    impact: "300+ women reached",
  },
  {
    id: 5,
    day: "14",
    month: "JAN",
    year: "2024",
    title: "Vocational Skills Workshop",
    category: "Women Empowerment",
    shortDesc:
      "Hands-on skills training in stitching, handicrafts, and beauty services for self-reliance.",
    longDesc:
      "This multi-day vocational workshop equipped women from low-income households with practical skills to earn a sustainable livelihood. Conducted by certified trainers, participants were trained in tailoring, handicraft production, henna design, and beauty treatments — all in high demand in local markets and enabling home-based entrepreneurship.",
    image: "/ladies.png",
    location: "Ahmedabad, Gujarat",
    volunteers: 25,
    duration: "3 Days",
    impact: "80 women trained",
  },
  {
    id: 6,
    day: "15",
    month: "AUG",
    year: "2024",
    title: "School Kit Distribution Drive",
    category: "Child Education",
    shortDesc:
      "Distributing school bags, books, and stationery to underprivileged children on Independence Day.",
    longDesc:
      "In celebration of India's Independence Day, Neal Foundation distributed complete school kits — including bags, notebooks, pencils, erasers, and water bottles — to over 500 children from underprivileged families. The drive aimed to remove financial barriers from education and motivate children to pursue their academic dreams.",
    image: "/ChildEduction.jpeg",
    location: "Ahmedabad, Gujarat",
    volunteers: 80,
    duration: "1 Day",
    impact: "500+ children supported",
  },
  {
    id: 7,
    day: "10",
    month: "OCT",
    year: "2024",
    title: "Digital Literacy Workshop",
    category: "Child Education",
    shortDesc:
      "Teaching kids computer basics, internet safety, and digital tools for modern education.",
    longDesc:
      "In today's digitally-driven world, tech literacy is a foundational skill. Our Digital Literacy Workshop introduced school-going children from government schools to computer basics, internet browsing for learning, typing, and essential apps. Special sessions on cybersafety ensured children navigated the online world confidently and responsibly.",
    image: "/study.png",
    location: "Ahmedabad, Gujarat",
    volunteers: 18,
    duration: "2 Days",
    impact: "200+ students trained",
  },
  {
    id: 8,
    day: "20",
    month: "FEB",
    year: "2024",
    title: "Nutritional Kit Distribution",
    category: "Health & Nutrition",
    shortDesc:
      "Providing nutritional supplements and food packets to malnourished families and children.",
    longDesc:
      "Malnutrition remains a serious challenge in many communities. Our volunteers distributed nutrition kits — containing pulses, fortified grain, cooking oil, and vitamin supplements — to identified malnourished families. A nutritionist guided families on balanced diet planning and the importance of micronutrient intake for child development.",
    image: "/health.png",
    location: "Ahmedabad, Gujarat",
    volunteers: 35,
    duration: "1 Day",
    impact: "250 families benefited",
  },
  {
    id: 9,
    day: "05",
    month: "NOV",
    year: "2024",
    title: "Stray Animal Care Camp",
    category: "Animal Welfare",
    shortDesc:
      "Free veterinary care, vaccination, and food distribution for stray animals across the city.",
    longDesc:
      "In collaboration with local veterinarians and animal welfare NGOs, Neal Foundation organized a comprehensive Stray Animal Care Camp. Hundreds of stray dogs and cats received vaccinations, wound treatment, and deworming. Volunteers also distributed food and water, and educated bystanders on responsible treatment of animals.",
    image: "/dog.jpg",
    location: "Ahmedabad, Gujarat",
    volunteers: 40,
    duration: "Full Day",
    impact: "300+ animals cared for",
  },
];

const CATEGORIES = [
  { label: "All Events", value: "all", icon: Sparkles },
  { label: "Community Service", value: "Community Service", icon: Heart },
  { label: "Women Empowerment", value: "Women Empowerment", icon: Heart },
  { label: "Child Education", value: "Child Education", icon: BookOpen },
  { label: "Health & Nutrition", value: "Health & Nutrition", icon: Apple },
  { label: "Animal Welfare", value: "Animal Welfare", icon: PawPrint },
];

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "A – Z", value: "az" },
];

/* ───────────────────────────────── helper ── */
function monthOrder(m: string) {
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  return months.indexOf(m.toUpperCase());
}
function dateValue(e: Event) {
  return parseInt(e.year) * 10000 + monthOrder(e.month) * 100 + parseInt(e.day);
}

/* ─────────────────────────────── card animation ── */
const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
};

/* ─────────────────────────── category badge color ── */
function categoryColor(cat: string) {
  const map: Record<string, string> = {
    "Community Service": "bg-amber-50 text-amber-700 border-amber-200",
    "Women Empowerment": "bg-rose-50 text-rose-700 border-rose-200",
    "Child Education": "bg-blue-50 text-blue-700 border-blue-200",
    "Health & Nutrition": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Animal Welfare": "bg-orange-50 text-orange-700 border-orange-200",
  };
  return map[cat] ?? "bg-primary/10 text-primary border-primary/20";
}

/* ══════════════════════════════════════════════════════ */
export default function Events() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState<Event | null>(null);

  /* filtered + sorted events */
  const displayed = useMemo(() => {
    let list = ALL_EVENTS.filter((e) => {
      const matchCat = activeCategory === "all" || e.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.shortDesc.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (sortOrder === "newest") list = [...list].sort((a, b) => dateValue(b) - dateValue(a));
    else if (sortOrder === "oldest") list = [...list].sort((a, b) => dateValue(a) - dateValue(b));
    else if (sortOrder === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [search, activeCategory, sortOrder]);

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortOrder)?.label ?? "Newest First";

  return (
    <div className="w-full overflow-x-hidden bg-background">

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-background pb-20 pt-36">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/event.png"
            alt="Neal Foundation Events Hero Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </div>

        {/* Texture + Glow */}
        <div className="absolute inset-0 dot-grid-light opacity-20" />
        <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[120px]" />

        {/* Lines */}
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
                  Events & Initiatives
                </span>
              </div>
            </motion.div>

             <motion.h1
                    variants={fadeUp}
                    className="font-serif font-bold display-hero text-foreground w-full max-w-3xl lg:w-2/3"
                  >
                    <span className="block">Hands That Help,</span>
            
                    <span className="block text-gradient-brand lg:text-4xl sm:text-3xl text-2xl font-semibold tracking-tight leading-16">
                    Hearts That Heal
                    </span>
            
                  </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base font-medium leading-8 text-white/85"
            >
              Explore our community-driven events, outreach initiatives, and volunteer
              opportunities. Each event represents our commitment to building stronger,
              more compassionate communities across India.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                asChild
                className="h-12 rounded-md px-8 text-xs font-bold uppercase tracking-[0.14em] premium-glow"
              >
                <Link href="/contact">
                  Participate <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-12 rounded-md border-white/30 bg-white/10 px-8 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md hover:bg-white/20"
              >
                <a href="#events-gallery">Browse Events</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ STATS STRIP ══════════════════════════ */}
      <section className="relative bg-primary py-10">
        <div className="absolute inset-0 dot-grid-light opacity-10" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { number: "9+", label: "Events Organized" },
              { number: "400+", label: "Volunteers Engaged" },
              { number: "3000+", label: "Lives Impacted" },
              { number: "5", label: "Focus Areas" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-serif text-3xl font-bold text-white sm:text-4xl">{stat.number}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ EVENTS GRID ══════════════════════════ */}
      <section id="events-gallery" className="relative overflow-hidden bg-muted py-24 lg:py-32">
        <div className="absolute inset-0 dot-grid-light opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.06),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.04),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">

          {/* ── Section Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-2xl"
          >
            <SectionLabel>Our Events</SectionLabel>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.06] text-foreground sm:text-4xl lg:text-5xl">
              Community-Driven{" "}
              <span className="text-primary">Initiatives & Programs</span>
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary/70 to-transparent" />
            <p className="mt-5 text-base font-light leading-7 text-muted-foreground">
              From summer refreshment drives to education workshops — every event
              reflects our deep commitment to the communities we serve.
            </p>
          </motion.div>

          {/* ── Search + Sort Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Search */}
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="events-search"
                type="text"
                placeholder="Search events…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-none border border-border/80 bg-background py-3 pl-10 pr-10 text-sm text-foreground placeholder-muted-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                id="events-sort-btn"
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 border border-border/80 bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                <span>{activeSortLabel}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full z-20 mt-1 w-44 border border-border/80 bg-background shadow-lg"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortOrder(opt.value); setSortOpen(false); }}
                        className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-muted ${sortOrder === opt.value ? "font-semibold text-primary" : "text-foreground"}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ── Category Filter Tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  id={`filter-${cat.value.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`inline-flex items-center gap-1.5 border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                    active
                      ? "border-primary bg-primary text-white shadow-[0_8px_25px_rgba(220,38,38,0.25)]"
                      : "border-border/80 bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>

          {/* ── Results Count ── */}
          <motion.p
            key={displayed.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-sm text-muted-foreground"
          >
            Showing <span className="font-semibold text-foreground">{displayed.length}</span> event{displayed.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <span> in <span className="font-semibold text-primary">{activeCategory}</span></span>
            )}
            {search && (
              <span> matching "<span className="font-semibold text-foreground">{search}</span>"</span>
            )}
          </motion.p>

          {/* ── Events Grid ── */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {displayed.length > 0 ? (
                displayed.map((event, index) => (
                  <motion.article
                    key={event.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="group relative flex flex-col overflow-hidden border border-border/80 bg-background shadow-[0_16px_50px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_28px_70px_rgba(0,0,0,0.13)]"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Date badge */}
                      <div className="absolute left-0 top-0 min-w-[80px] bg-primary px-3 py-2 text-center text-white shadow-[0_8px_20px_rgba(220,38,38,0.3)]">
                        <span className="block font-serif text-2xl font-bold leading-none">{event.day}</span>
                        <span className="mt-0.5 block text-[10px] font-bold tracking-[0.18em]">{event.month}</span>
                        <span className="mt-0.5 block text-[9px] text-white/75">{event.year}</span>
                      </div>

                      {/* Category badge */}
                      <div className="absolute bottom-3 right-3">
                        <span className={`inline-flex items-center gap-1 border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm ${categoryColor(event.category)}`}>
                          <Tag className="h-2.5 w-2.5" />
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col p-6">
                      {/* Watermark number */}
                      <span className="pointer-events-none absolute right-4 top-2 font-serif text-[72px] font-bold leading-none text-primary/[0.035]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="relative z-10 flex flex-1 flex-col">
                        <h3 className="font-serif text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                          {event.title}
                        </h3>

                        <div className="mt-3 h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

                        <p className="mt-4 text-sm font-light leading-7 text-muted-foreground">
                          {event.shortDesc}
                        </p>

                        {/* Meta info */}
                        <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                            <CalendarDays className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                            <span>{event.day} {event.month} {event.year}</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          {event.volunteers && (
                            <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                              <Users className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                              <span>{event.volunteers} Volunteers</span>
                            </div>
                          )}
                          {event.impact && (
                            <div className="flex items-center gap-2.5 text-xs font-semibold text-primary">
                              <Sparkles className="h-3.5 w-3.5 flex-shrink-0" />
                              <span>{event.impact}</span>
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-5">
                          <button
                            id={`event-details-${event.id}`}
                            onClick={() => setModalEvent(event)}
                            className="group/link inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary transition-all duration-200 hover:gap-4"
                          >
                            View Details
                            <span className="flex h-7 w-7 items-center justify-center border border-primary/25 transition-all duration-300 group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:text-white">
                              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Bottom hover line */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/60 bg-muted/50">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-foreground">No events found</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria.</p>
                  <button
                    onClick={() => { setSearch(""); setActiveCategory("all"); }}
                    className="mt-5 border border-primary/30 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary transition hover:bg-primary hover:text-white"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground mb-6 text-base">
              Want to be part of our next initiative?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_15px_35px_rgba(220,38,38,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_22px_45px_rgba(220,38,38,0.28)]"
            >
              Volunteer With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ EVENT DETAIL MODAL ══════════════════════════ */}
      <AnimatePresence>
        {modalEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setModalEvent(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Panel */}
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.94, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 40 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[50%] z-50 mx-auto max-h-[90vh] max-w-3xl -translate-y-1/2 overflow-y-auto border border-border/80 bg-background shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:inset-x-auto sm:left-1/2 sm:w-full sm:-translate-x-1/2"
            >
              {/* Modal Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={modalEvent.image}
                  alt={modalEvent.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Date badge */}
                <div className="absolute left-0 top-0 min-w-[90px] bg-primary px-3 py-3 text-center text-white">
                  <span className="block font-serif text-3xl font-bold leading-none">{modalEvent.day}</span>
                  <span className="mt-1 block text-[10px] font-bold tracking-[0.18em]">{modalEvent.month}</span>
                  <span className="mt-0.5 block text-[9px] text-white/75">{modalEvent.year}</span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] ${categoryColor(modalEvent.category)}`}>
                    <Tag className="h-3 w-3" />
                    {modalEvent.category}
                  </span>
                </div>

                {/* Close */}
                <button
                  id="modal-close"
                  onClick={() => setModalEvent(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/60"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-7 sm:p-9">
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  {modalEvent.title}
                </h2>
                <div className="mt-3 h-px w-14 bg-primary/50" />

                <p className="mt-5 text-sm font-light leading-8 text-muted-foreground">
                  {modalEvent.longDesc}
                </p>

                {/* Detail grid */}
                <div className="mt-7 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Date</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{modalEvent.day} {modalEvent.month} {modalEvent.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Location</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{modalEvent.location}</p>
                    </div>
                  </div>
                  {modalEvent.volunteers && (
                    <div className="flex items-start gap-3">
                      <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Volunteers</p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground">{modalEvent.volunteers} people</p>
                      </div>
                    </div>
                  )}
                  {modalEvent.duration && (
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Duration</p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground">{modalEvent.duration}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Impact callout */}
                {modalEvent.impact && (
                  <div className="mt-6 flex items-center gap-3 border border-primary/20 bg-primary/5 px-5 py-4">
                    <Sparkles className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">Impact Achieved</p>
                      <p className="mt-0.5 text-sm font-semibold text-foreground">{modalEvent.impact}</p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-primary px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(220,38,38,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(220,38,38,0.30)]"
                  >
                    Volunteer for This
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => setModalEvent(null)}
                    className="inline-flex items-center gap-2 border border-border/80 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
