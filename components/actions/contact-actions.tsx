"use server"

import { Resend } from "resend"
import { AdminEmailTemplate, UserEmailTemplate } from "@/lib/email-templates"
import { createElement } from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  topic: string
  budget: string
  description: string
}

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Debug log to see what we're receiving
    console.log("FormData received:", formData)
    console.log("FormData entries:", Array.from(formData.entries()))

    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      topic: formData.get("topic") as string,
      budget: formData.get("budget") as string,
      description: formData.get("description") as string,
    }

    console.log("Parsed data:", data)

    // Validate required fields
    if (!data.name || !data.email || !data.topic || !data.description) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        message: "Email service is not configured. Please contact support.",
      }
    }

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "Kayi Digital <onboarding@resend.dev>",
      to: ["s.saadali08@gmail.com"],
      subject: `New Project Inquiry from ${data.name}`,
      react: createElement(AdminEmailTemplate, {
        name: data.name,
        email: data.email,
        topic: data.topic,
        budget: data.budget,
        description: data.description,
      }),
    })

    console.log("Admin email result:", adminEmailResult)

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "Kayi Digital <onboarding@resend.dev>",
      to: [data.email],
      subject: "Thank you for your inquiry - Kayi Digital",
      react: createElement(UserEmailTemplate, {
        name: data.name,
      }),
    })

    console.log("User email result:", userEmailResult)

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. We'll get back to you shortly.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
