import {
  ArrowRight,
  Building2,
  Code2,
  HeartHandshake,
  LineChart,
  PhoneCall,
  Users,
} from "lucide-react"

export const servicesData = [
  {
    num: "01",
    title: "Sales Outsourcing",
    icon: <LineChart className="h-5 w-5" />,
    desc: "End-to-end outbound and inbound sales programs that fill your pipeline and close revenue.",
    features: [
      "Outbound Sales Campaigns",
      "Inbound Sales Support",
      "Telecom Sales",
      "Customer Acquisition",
      "Cross-Selling & Upselling",
      "Lead Qualification",
    ],
    longDesc:
      "Our sales outsourcing solutions deploy trained, performance-driven sales teams that integrate seamlessly with your existing operations. We manage the sales lifecycle from outreach and qualification to pipeline support and revenue-focused execution.",
  },
  {
    num: "02",
    title: "Customer Service",
    icon: <HeartHandshake className="h-5 w-5" />,
    desc: "24/7 multi-channel support operations that retain customers and build loyalty.",
    features: [
      "Inbound Customer Support",
      "Email & Chat Support",
      "Technical Support",
      "Billing Support",
      "Retention Programs",
      "Loyalty Management",
    ],
    longDesc:
      "Our customer service teams operate as an extension of your brand, delivering consistent support across calls, email, chat, and customer engagement channels with trained agents and structured quality monitoring.",
  },
  {
    num: "03",
    title: "Lead Generation",
    icon: <Users className="h-5 w-5" />,
    desc: "Data-driven B2B and B2C lead generation programs built for consistent pipeline growth.",
    features: [
      "B2B & B2C Generation",
      "Appointment Setting",
      "Data Research & Validation",
      "Prospect Qualification",
      "Market Research",
      "Pipeline Building",
    ],
    longDesc:
      "We help businesses build predictable lead pipelines through targeted prospecting, verified data, qualification workflows, and structured outreach programs designed to generate meaningful business opportunities.",
  },
  {
    num: "04",
    title: "BPO Services",
    icon: <PhoneCall className="h-5 w-5" />,
    desc: "Full-scale call center and back-office operations designed for efficiency and scale.",
    features: [
      "Call Center Operations",
      "CRM Management",
      "Back Office Support",
      "Order Processing",
      "Administrative Support",
      "Reporting & Analytics",
    ],
    longDesc:
      "Our BPO services support daily operational execution, including call handling, CRM administration, process support, back-office work, reporting, and scalable business operations management.",
  },
  {
    num: "05",
    title: "Growth Consulting",
    icon: <Building2 className="h-5 w-5" />,
    desc: "Strategic advisory and execution support to build and scale business operations from the ground up.",
    features: [
      "Office Setup Planning",
      "Team Structure Design",
      "Recruitment & Training",
      "KPI Development",
      "Performance Systems",
      "Growth & Expansion Planning",
    ],
    longDesc:
      "Our consulting practice helps companies design stronger operating models, build teams, define KPIs, improve performance systems, and create sustainable business growth strategies.",
  },
  {
    num: "06",
    title: "Software Solutions",
    icon: <Code2 className="h-5 w-5" />,
    desc: "Custom digital tools, ERP systems, and automation that accelerate your operational efficiency.",
    features: [
      "Website Development",
      "Business Applications",
      "Custom ERP Solutions",
      "CRM Integration",
      "Automation Tools",
      "Process Optimization",
    ],
    longDesc:
      "We develop custom software and digital systems tailored to your business workflows, including websites, dashboards, ERP systems, CRM integrations, and automation tools that improve operational performance.",
  },
]

export const processSteps = [
  {
    n: "01",
    title: "Understand Requirements",
    desc: "We study your business model, goals, current challenges, and operational needs.",
  },
  {
    n: "02",
    title: "Design the Solution",
    desc: "We create a service model with clear workflows, team structure, KPIs, and reporting standards.",
  },
  {
    n: "03",
    title: "Build & Execute",
    desc: "We deploy trained teams, systems, and processes aligned with your business objectives.",
  },
  {
    n: "04",
    title: "Optimize & Scale",
    desc: "We monitor performance, improve outcomes, and support long-term operational growth.",
  },
]
