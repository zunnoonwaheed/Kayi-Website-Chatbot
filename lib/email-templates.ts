// lib/email-templates.ts

// A simple HTML email sent to the admin
export const AdminEmailTemplate = ({
    name,
    email,
    message,
  }: {
    name: string
    email: string
    message: string
  }) => `
    <div style="font-family:Arial,sans-serif;line-height:1.5">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `
  
  // A thank-you email sent to the user
  export const UserEmailTemplate = ({
    name,
  }: {
    name: string
  }) => `
    <div style="font-family:Arial,sans-serif;line-height:1.5">
      <h2>Hi ${name},</h2>
      <p>Thanks for contacting <strong>Kayi Digital</strong>!</p>
      <p>We’ve received your message and will get back to you soon.</p>
      <p>– The Kayi Digital Team</p>
    </div>
  `
  