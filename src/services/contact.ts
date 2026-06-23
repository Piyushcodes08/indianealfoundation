/**
 * services/contact.ts
 * API service for the contact form.
 * Moved from src/api/contact.ts → src/services/contact.ts
 */

import type { ContactFormValues } from "@/content/contact"

export async function submitContactForm(data: ContactFormValues) {
  console.log("submitContactForm", data)
  return Promise.resolve({ success: true })
}
