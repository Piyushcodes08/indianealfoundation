import {
  Clock,
  Globe,
  HeartHandshake,
  Mail,
  Phone,
} from "lucide-react"
import * as z from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  companyName: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter your phone number"),
  serviceRequired: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please enter your message"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const contactHighlights = [
  {
    icon: <Globe className="h-4 w-4" />,
    label: "Global Presence",
    value: "United States · Canada · Bharat",
  },
  {
    icon: <Clock className="h-4 w-4" />,
    label: "Response Time",
    value: "Within 24 Business Hours",
  },
  {
    icon: <HeartHandshake className="h-4 w-4" />,
    label: "Partnership First",
    value: "Built for Long-Term Growth",
  },
]

export const businessAreas = [
  "Sales Outsourcing",
  "Customer Support Operations",
  "Lead Generation Services",
  "BPO & Back Office Support",
  "Consulting & Software Solutions",
]

export const contactCards = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Support",
    value: "Business inquiries welcome",
    desc: "Share your requirements and our team will review your business needs.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Consultation",
    value: "Schedule a discussion",
    desc: "Connect with our team to discuss sales, support, BPO, and technology solutions.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Global Operations",
    value: "USA · Canada · Bharat",
    desc: "We support businesses with scalable delivery across multiple markets.",
  },
]
