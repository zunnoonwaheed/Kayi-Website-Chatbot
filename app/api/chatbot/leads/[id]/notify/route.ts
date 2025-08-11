import { type NextRequest, NextResponse } from "next/server"

interface NotificationData {
  leadId: string
  name: string
  email: string
  whatsapp: string
  businessType: string
  budget: string
  timeline: string
}

export async function POST(request: NextRequest) {
  try {
    const body: NotificationData = await request.json()

    // Send WhatsApp notification (placeholder for WhatsApp Business API integration)
    const whatsappMessage = `🎉 New Lead Alert!
    
Name: ${body.name}
Email: ${body.email}
WhatsApp: ${body.whatsapp}
Business: ${body.businessType}
Budget: ${body.budget}
Timeline: ${body.timeline}

Lead ID: ${body.leadId}
Time: ${new Date().toLocaleString()}

Please follow up within 24 hours for best conversion rates.`

    // Log WhatsApp message (replace with actual WhatsApp API call)
    console.log("WhatsApp Notification:", whatsappMessage)

    // Send email notification (placeholder for email service integration)
    const emailContent = {
      to: "admin@kayidigital.com", // Replace with your admin email
      subject: `New Chatbot Lead: ${body.name} - ${body.businessType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #cf21c3, #b91c9e); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Lead from Kayi Chatbot</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; margin-bottom: 20px;">Lead Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">
                    <a href="mailto:${body.email}" style="color: #cf21c3;">${body.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">WhatsApp:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">
                    <a href="https://wa.me/${body.whatsapp.replace(/\D/g, "")}" style="color: #25D366;">${body.whatsapp}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Business Type:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.businessType}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.budget}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold;">Timeline:</td>
                  <td style="padding: 10px;">${body.timeline}</td>
                </tr>
              </table>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/${body.whatsapp.replace(/\D/g, "")}" 
                 style="background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-right: 10px;">
                Contact via WhatsApp
              </a>
              <a href="mailto:${body.email}" 
                 style="background: #cf21c3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                Send Email
              </a>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; color: #666; font-size: 12px;">
            <p>Lead ID: ${body.leadId} | Generated: ${new Date().toLocaleString()}</p>
            <p>Kayi Digital - Automated Lead Notification System</p>
          </div>
        </div>
      `,
    }

    // Log email content (replace with actual email service like SendGrid, Resend, etc.)
    console.log("Email Notification:", emailContent)

    return NextResponse.json({
      message: "Notifications sent successfully",
      whatsappSent: true,
      emailSent: true,
    })
  } catch (error) {
    console.error("Error sending notifications:", error)
    return NextResponse.json({ error: "Failed to send notifications" }, { status: 500 })
  }
}
