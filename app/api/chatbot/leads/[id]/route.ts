import { type NextRequest, NextResponse } from "next/server"

interface ChatbotLead {
  id: string
  name: string
  email: string
  whatsapp: string
  businessType: string
  budget: string
  timeline: string
  additionalInfo: string
  timestamp: string
  status: "new" | "contacted" | "qualified" | "converted"
}

// In-memory storage (replace with database in production)
const leads: ChatbotLead[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newLead: ChatbotLead = {
      id: Date.now().toString(),
      name: body.name || "",
      email: body.email || "",
      whatsapp: body.whatsapp || "",
      businessType: body.businessType || "",
      budget: body.budget || "",
      timeline: body.timeline || "",
      additionalInfo: body.additionalInfo || "",
      timestamp: new Date().toISOString(),
      status: "new",
    }

    // Validate required fields
    if (!newLead.name || !newLead.email || !newLead.whatsapp) {
      return NextResponse.json({ error: "Name, email, and WhatsApp number are required" }, { status: 400 })
    }

    leads.push(newLead)

    try {
      await fetch(`${request.nextUrl.origin}/api/chatbot/notify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          leadId: newLead.id,
          name: newLead.name,
          email: newLead.email,
          whatsapp: newLead.whatsapp,
          businessType: newLead.businessType,
          budget: newLead.budget,
          timeline: newLead.timeline,
        }),
      })
    } catch (notificationError) {
      console.error("Failed to send notifications:", notificationError)
      // Don't fail the lead creation if notifications fail
    }

    return NextResponse.json({ message: "Lead saved successfully", leadId: newLead.id }, { status: 201 })
  } catch (error) {
    console.error("Error saving lead:", error)
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let filteredLeads = leads

    // Filter by status if provided
    if (status && status !== "all") {
      filteredLeads = leads.filter((lead) => lead.status === status)
    }

    // Sort by timestamp (newest first)
    filteredLeads.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    // Apply pagination
    const paginatedLeads = filteredLeads.slice(offset, offset + limit)

    return NextResponse.json({
      leads: paginatedLeads,
      total: filteredLeads.length,
      hasMore: offset + limit < filteredLeads.length,
    })
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
  }
}
