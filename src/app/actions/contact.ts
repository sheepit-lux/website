
"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

interface ActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(values: ContactFormValues): Promise<ActionResult> {
  const validationResult = ContactFormSchema.safeParse(values);

  if (!validationResult.success) {
    console.error("Contact form validation failed:", validationResult.error.flatten().fieldErrors);
    return { success: false, error: "Invalid form data. Please check your inputs." };
  }

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log the data.
  console.log("Contact form submitted:", values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error (e.g., 10% chance of failure)
  // if (Math.random() < 0.1) {
  //   return { success: false, error: "Simulated server error. Please try again." };
  // }

  return { success: true };
}
