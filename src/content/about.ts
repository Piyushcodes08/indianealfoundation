/**
 * content/about.ts
 * Static content data for the About page.
 * Moved from src/data/about.tsx → src/content/about.ts
 */

import {
  BarChart3,
  Building2,
  Globe,
  Gauge,
  Sparkles,
  Target,
  TrendingUp,
  Wifi,
  Search,
} from "lucide-react"

export const stats = [
  { value: "50+", label: "ISP Partners" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "100K+", label: "Users Served" },
  { value: "24/7", label: "Service Support" },
]

export const coreValues = [
  {
    title: "Transparency",
    desc: "Clear, honest provider comparisons with accurate pricing and real-time availability data.",
  },
  {
    title: "Convenience",
    desc: "Find the best internet plans in seconds with simple address or ZIP code search.",
  },
  {
    title: "Empowerment",
    desc: "Give users the knowledge and tools to make informed decisions about connectivity.",
  },
  {
    title: "Reliability",
    desc: "Real-time provider availability, speeds, pricing, and promotional offers.",
  },
  {
    title: "Innovation",
    desc: "Cutting-edge technology to compare fiber, cable, DSL, satellite, and wireless.",
  },
]

export const capabilities = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Enter address or ZIP code to instantly find all available providers.",
  },
  {
    icon: BarChart3,
    title: "Easy Comparison",
    desc: "Compare plans, speeds, pricing, and features side-by-side.",
  },
  {
    icon: Sparkles,
    title: "Real-Time Data",
    desc: "Access current availability and promotional offers from providers.",
  },
  {
    icon: Globe,
    title: "Location-Based",
    desc: "Accurate service availability for residential and business locations.",
  },
]

export const howItWorks = [
  {
    n: "01",
    title: "Enter Your Location",
    desc: "Input your address or ZIP code to search for available providers in your area.",
  },
  {
    n: "02",
    title: "View All Providers",
    desc: "See all internet service providers serving your location instantly.",
  },
  {
    n: "03",
    title: "Compare Plans & Pricing",
    desc: "Review speeds, plans, pricing, and special offers from multiple providers.",
  },
  {
    n: "04",
    title: "Select & Connect",
    desc: "Choose the best provider for your needs and connect directly.",
  },
]

export const internetServices = [
  {
    icon: Wifi,
    title: "Fiber Internet",
    desc: "Ultra-fast speeds with reliable fiber-optic technology.",
    features: ["Up to 1 Gbps", "Most Reliable", "Future-Proof"],
  },
  {
    icon: Gauge,
    title: "Cable Internet",
    desc: "High-speed connectivity through established cable networks.",
    features: ["Up to 500 Mbps", "Widely Available", "Great Value"],
  },
  {
    icon: TrendingUp,
    title: "DSL Internet",
    desc: "Affordable broadband option with reliable speeds.",
    features: ["Budget-Friendly", "Wide Coverage", "Stable Connection"],
  },
  {
    icon: Globe,
    title: "Fixed Wireless",
    desc: "Wireless internet for areas without fiber or cable access.",
    features: ["No Infrastructure", "Quick Install", "Growing Coverage"],
  },
  {
    icon: Sparkles,
    title: "Satellite Internet",
    desc: "Connectivity solution for remote and rural areas.",
    features: ["Remote Areas", "Always Available", "Improving Speeds"],
  },
  {
    icon: Building2,
    title: "Business Solutions",
    desc: "Tailored internet and VoIP packages for enterprises.",
    features: ["Dedicated Support", "SLA Guaranteed", "Scalable Options"],
  },
]

export const whyChoose = [
  "Compare multiple internet providers in one place",
  "Find the best prices and promotional offers",
  "Check real-time service availability by location",
  "Compare Fiber, Cable, DSL, Fixed Wireless, and Satellite options",
  "Save time with accurate provider comparisons",
  "Easy-to-use search and recommendation system",
  "Residential and Business Internet Solutions",
]
