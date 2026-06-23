import {
  ArrowUpRight,
  Building2,
  Cable,
  CheckCircle2,
  Code2,
  Globe,
  HeartHandshake,
  LineChart,
  Network,
  PhoneCall,
  RadioTower,
  Satellite,
  Search,
  Sparkles,
  Users,
  Users2,
  Wifi,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sparkles as SparklesIcon,
   UsersRound,
  HandCoins,
  GraduationCap,
  Stethoscope,
  Utensils,
  Home,
  HandHeart,
  Leaf,
  Baby,
   Venus,
  HeartPulse,
  PawPrint,
} from "lucide-react"

export const services = [
  {
    id: 1,
    num: "01",
    title: "Women Empowerment",
    desc: "Equipping women with skills, confidence, resources, and opportunities to become independent leaders in their communities.",
    image: "/womenempowerment1.png",
    icon: Venus,
    href: "/women-empowerment",
  },
  {
    id: 2,
    num: "02",
    title: "Child Education",
    desc: "Creating educational opportunities that help children turn their dreams into reality through knowledge and confidence.",
    image: "/ChildEduction.jpeg",
    icon: GraduationCap,
    href: "/child-education",
  },
  {
    id: 3,
    num: "03",
    title: "Health & Nutrition",
    desc: "Delivering nutritious meals, healthcare support, and essential resources to underserved communities.",
    image: "/health.png",
    icon: HeartPulse,
    href: "/health-nutrition",
  },
  {
    id: 4,
    num: "04",
    title: "Animal Welfare",
    desc: "Protecting animals through rescue, medical care, safe shelter, awareness, and compassionate community support.",
    image: "/dog.jpg",
    icon: PawPrint,
    href: "/animal-welfare",
  },
];

export const parentCompanyPoints = [
  "Community-led nonprofit programs",
  "Women, children, health, and animal welfare initiatives",
  "Volunteer-driven outreach across India",
  "Transparent impact and long-term support",
]

export const nealDivisionPoints = [
  "Women Empowerment",
  "Child Education",
  "Health & Nutrition",
  "Animal Welfare",
  "Volunteer Partnerships",
  "Donor & Sponsor Support",
]

export const homeValues = [
  {
    title: "Transparent impact",
    desc: "Share progress clearly so supporters can see how their help reaches communities.",
  },
  {
    title: "Community-first action",
    desc: "Build programs around local needs, dignity, and sustained care.",
  },
  {
    title: "Volunteer-led support",
    desc: "Create meaningful ways for people to give time, skill, and compassion.",
  },
  {
    title: "Sustainable change",
    desc: "Focus on practical initiatives that keep serving people after each event ends.",
  },
]

export const coPartnerHighlights = [
  { label: "Community Reach", value: "Grassroots programs with local volunteers" },
  { label: "Care Continuity", value: "Support designed for lasting wellbeing" },
  { label: "Shared Action", value: "Partnerships with donors and communities" },
]

export const testimonials = [
  {
    quote:
      "Neal Foundation creates real opportunities for people who need support most.",
    name: "Community Partner",
    role: "Ahmedabad",
  },
  {
    quote:
      "The team brings care, discipline, and warmth to every outreach initiative.",
    name: "Volunteer Lead",
    role: "Neal Foundation",
  },
  {
    quote:
      "Their programs make giving back feel organized, useful, and deeply human.",
    name: "Donor Partner",
    role: "India",
  },
]

export const marqueeItems = [
   {
    id: 1,
    title: "Become a Volunteer",
    description:
      "Give your time, skills, and compassion to create meaningful change in communities.",
    icon: UsersRound,
  },
  {
    id: 2,
    title: "Helping Each Other",
    description:
      "Together, we can support people in need and build stronger, caring communities.",
    icon: HeartHandshake,
  },
  {
    id: 3,
    title: "Start Donating",
    description:
      "Your contribution helps us provide essential support and create lasting impact.",
    icon: HandCoins,
  },
  {
    id: 4,
    title: "Support Education",
    description:
      "Help children access quality education, learning resources, and better opportunities.",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Improve Healthcare",
    description:
      "Support healthcare initiatives that provide treatment, awareness, and medical assistance.",
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Provide Healthy Meals",
    description:
      "Help us provide nutritious meals to families and individuals facing food insecurity.",
    icon: Utensils,
  },
  {
    id: 7,
    title: "Shelter the Homeless",
    description:
      "Support safe shelter, essential resources, and rehabilitation for homeless individuals.",
    icon: Home,
  },
  {
    id: 8,
    title: "Care for Communities",
    description:
      "Join community programs focused on dignity, inclusion, care, and sustainable development.",
    icon: HandHeart,
  },
  {
    id: 9,
    title: "Protect Our Environment",
    description:
      "Participate in environmental initiatives that promote cleaner and greener communities.",
    icon: Leaf,
  },
  {
    id: 10,
    title: "Empower Every Child",
    description:
      "Support programs that protect children and help them grow with confidence and opportunity.",
    icon: Baby,
  },
]



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
    image: "/images/events/chhas-seva.jpg",
    location: "Ahmedabad, Gujarat",
    href: "/events",
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
    image: "/images/events/sharbat-seva.jpg",
    location: "Ahmedabad, Gujarat",
    href: "/events",
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
    image: "/images/events/swachhata-abhiyan.jpg",
    location: "Ahmedabad, Gujarat",
    href: "/events",
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
    image: "/images/events/swachhata-abhiyan.jpg",
    location: "Ahmedabad, Gujarat",
    href: "/events",
  },
];


