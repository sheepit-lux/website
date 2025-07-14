
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

  const webhookUrl = "https://hook.eu2.make.com/l7vsyltb6gd3qtx2cpu6i7gtsjrgou3c";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      // The webhook might return a non-2xx status code on error.
      const errorBody = await response.text();
      console.error("Webhook submission failed:", response.status, errorBody);
      return { success: false, error: "Failed to submit your message. Please try again later." };
    }

    console.log("Contact form successfully submitted to webhook:", values);
    return { success: true };

  } catch (error) {
    console.error("An unexpected error occurred during webhook submission:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
