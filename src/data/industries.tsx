import {
  Briefcase,
  Building,
  Code2,
  PhoneCall,
  Rocket,
  Store,
  Users,
} from "lucide-react"

export const industriesData = [
  {
    num: "01",
    title: "Telecommunications",
    icon: <PhoneCall className="h-5 w-5" />,
    desc: "We power telecom sales campaigns, customer retention programs, and technical support centers that deliver consistent subscriber growth.",
    solutions: [
      "Outbound Sales Campaigns",
      "Customer Retention",
      "Technical Support",
      "Billing Support",
      "Plan Upgrade Programs",
    ],
  },
  {
    num: "02",
    title: "Technology Services",
    icon: <Code2 className="h-5 w-5" />,
    desc: "Enabling tech companies to scale operations with dedicated sales teams, SaaS support desks, and lead generation programs built for rapid growth.",
    solutions: [
      "SaaS Sales Programs",
      "Technical Helpdesk",
      "Onboarding Support",
      "B2B Lead Generation",
      "Account Management",
    ],
  },
  {
    num: "03",
    title: "Professional Services",
    icon: <Briefcase className="h-5 w-5" />,
    desc: "Helping consultancies, legal, financial, and advisory firms generate qualified leads and deliver exceptional client service at scale.",
    solutions: [
      "Appointment Setting",
      "Client Intake Support",
      "Lead Qualification",
      "Follow-Up Programs",
      "CRM Management",
    ],
  },
  {
    num: "04",
    title: "Customer Support Operations",
    icon: <Users className="h-5 w-5" />,
    desc: "Building and managing 24/7 omnichannel support centers that handle high call volumes while maintaining quality benchmarks.",
    solutions: [
      "Inbound Call Centers",
      "Email & Chat Support",
      "Quality Assurance",
      "Performance Reporting",
      "Escalation Management",
    ],
  },
  {
    num: "05",
    title: "Small & Medium Businesses",
    icon: <Store className="h-5 w-5" />,
    desc: "Providing SMBs with enterprise-grade sales and support capabilities — without the enterprise price tag.",
    solutions: [
      "Affordable Sales Programs",
      "Part-Time Support Teams",
      "Growth Consulting",
      "Process Design",
      "CRM Integration",
    ],
  },
  {
    num: "06",
    title: "Startups & Entrepreneurs",
    icon: <Rocket className="h-5 w-5" />,
    desc: "Helping early-stage ventures build sales engines, secure their first clients, and establish operational foundations for scale.",
    solutions: [
      "Go-to-Market Strategy",
      "First Sales Programs",
      "Operational Blueprints",
      "Team Recruitment",
      "KPI Development",
    ],
  },
  {
    num: "07",
    title: "Software Solutions",
    icon: <Building className="h-5 w-5" />,
    desc: "Custom software, ERP systems, and automation platforms designed specifically for operational and sales workflows.",
    solutions: [
      "Custom Development",
      "ERP Implementation",
      "CRM Integration",
      "Workflow Automation",
      "Process Optimization",
    ],
  },
]

export const approachSteps = [
  {
    n: "01",
    title: "Industry Audit",
    desc: "We assess your current operations, competitive position, and growth opportunities.",
  },
  {
    n: "02",
    title: "Custom Blueprint",
    desc: "A tailored program is designed specifically for your sector and business goals.",
  },
  {
    n: "03",
    title: "Seamless Integration",
    desc: "Our teams deploy and integrate with your existing workflows without disruption.",
  },
]

export const countries = [
  "United States — Enterprise & SMB Markets",
  "Canada — BPO & Support Programs",
  "Bharat — Technology & 24/7 Operations",
]
