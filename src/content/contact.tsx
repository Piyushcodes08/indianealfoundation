/**
 * content/contact.tsx
 * Static content data and schema for the Contact page.
 * Moved from src/data/contact.tsx → src/content/contact.tsx
 * Kept as .tsx because it contains JSX (icon elements).
 */

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
  companyName: z.string().min(2, "Please enter your organization or group name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter your phone number"),
  serviceRequired: z.string().min(1, "Please select a focus area"),
  message: z.string().min(10, "Please enter your message"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const contactHighlights = [
  {
    icon: <Globe className="h-4 w-4" />,
    label: "India Presence",
    value: "India",
  },
  {
    icon: <Clock className="h-4 w-4" />,
    label: "Response Time",
    value: "Within 24 Business Hours",
  },
  {
    icon: <HeartHandshake className="h-4 w-4" />,
    label: "Partnership First",
    value: "Built for Long-Term Impact",
  },
]

export const businessAreas = [
  "Community Programs",
  "Volunteer Partnerships",
  "Donor & Sponsor Support",
  "Event Collaboration",
  "Impact Monitoring & Reporting",
]

export const contactCards = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Support",
    value: "Community inquiries welcome",
    desc: "Share your message and our team will respond with the next helpful step.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Consultation",
    value: "Schedule a discussion",
    desc: "Connect with us about volunteering, partnerships, events, and program support.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "India Operations",
    value: "India",
    desc: "We support community programs and outreach initiatives across India.",
  },
]
