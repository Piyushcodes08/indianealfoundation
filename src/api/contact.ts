import type { ContactFormValues } from "@/data/contact"

export async function submitContactForm(data: ContactFormValues) {
  console.log("submitContactForm", data)
  return Promise.resolve({ success: true })
}
