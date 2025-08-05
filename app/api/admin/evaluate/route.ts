import { type NextRequest, NextResponse } from "next/server"
import { connectMongo, Submission } from "@/lib/mongoose" // Import Mongoose connection and model

interface EvaluationData {
  user_name: string
  representing: string
  services: string
  description: string
  goal: string
  stage: string
  budget: string
  timeline: string
  decision_maker: string
  email: string
  extra?: string
}

function calculateScore(data: EvaluationData): { score: number; feedback: string; showCalendly: boolean } {
  let score = 0
  let feedback = ""

  // Budget scoring (30 points)
  const budget = data.budget?.toLowerCase() || ""
  if (budget.includes("10000") || budget.includes("10k") || budget.includes("more")) {
    score += 30
  } else if (budget.includes("5000") || budget.includes("5k")) {
    score += 20
  } else if (budget.includes("2500")) {
    score += 10
  }

  // Timeline scoring (20 points)
  const timeline = data.timeline?.toLowerCase() || ""
  if (timeline.includes("asap") || timeline.includes("immediately") || timeline.includes("1 month")) {
    score += 20
  } else if (timeline.includes("2-3 months")) {
    score += 15
  } else if (timeline.includes("3-6 months")) {
    score += 10
  }

  // Decision maker scoring (25 points)
  const decisionMaker = data.decision_maker?.toLowerCase() || ""
  if (decisionMaker.includes("yes") || decisionMaker.includes("i am")) {
    score += 25
  } else if (decisionMaker.includes("influence")) {
    score += 15
  }

  // Services scoring (15 points)
  const services = data.services?.toLowerCase() || ""
  if (services.includes("web development") || services.includes("digital marketing")) {
    score += 15
  } else if (services.includes("consulting")) {
    score += 10
  }

  // Stage scoring (10 points)
  const stage = data.stage?.toLowerCase() || ""
  if (stage.includes("ready") || stage.includes("planning")) {
    score += 10
  } else if (stage.includes("researching")) {
    score += 5
  }

  // Generate feedback based on score
  if (score >= 80) {
    feedback =
      "Excellent fit! You have a clear vision, adequate budget, and decision-making authority. Let's discuss how we can help you achieve your goals."
  } else if (score >= 60) {
    feedback = "Good potential! You have most elements in place. We'd love to explore how we can work together."
  } else if (score >= 40) {
    feedback = "Moderate fit. There are some areas to align, but we see potential for collaboration."
  } else {
    feedback =
      "Thank you for your interest. While this might not be the perfect timing, we'd be happy to stay in touch for future opportunities."
  }

  return {
    score,
    feedback,
    showCalendly: score > 70,
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("API/EVALUATE: Webhook received.")
    await connectMongo() // Connect to MongoDB

    const data: EvaluationData = await request.json()
    console.log("API/EVALUATE: Received data:", JSON.stringify(data, null, 2))

    // Validate required fields
    if (!data.user_name || !data.email) {
      console.log("API/EVALUATE: Missing required fields.")
      return NextResponse.json({ error: "Missing required fields: user_name and email" }, { status: 400 })
    }

    // Calculate score and feedback
    const evaluation = calculateScore(data)
    console.log("API/EVALUATE: Calculated evaluation:", evaluation)

    // Create and save submission to MongoDB
    const newSubmission = new Submission({
      user_name: data.user_name,
      representing: data.representing,
      services: data.services,
      description: data.description,
      goal: data.goal,
      stage: data.stage,
      budget: data.budget,
      timeline: data.timeline,
      decision_maker: data.decision_maker,
      email: data.email,
      extra: data.extra,
      score: evaluation.score,
      feedback: evaluation.feedback,
      showCalendly: evaluation.showCalendly,
      timestamp: new Date(),
    })
    await newSubmission.save()
    console.log("API/EVALUATE: Submission saved to MongoDB.")

    // Return the response that Landbot expects
    const response = {
      score: evaluation.score,
      feedback: evaluation.feedback,
      showCalendly: evaluation.showCalendly,
      full_name: data.user_name,
    }

    console.log("API/EVALUATE: Sending response:", JSON.stringify(response, null, 2))
    console.log("API/EVALUATE: End webhook.")

    return NextResponse.json(response)
  } catch (error) {
    console.error("API/EVALUATE: Error processing evaluation:", error)
    // Return a generic 500 error to the client, but log details on the server
    return NextResponse.json(
      {
        error: "Internal server error",
        score: 0, // Provide default values for Landbot to avoid "No JSON response"
        feedback: "Error processing request",
        showCalendly: false,
        full_name: "Unknown",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    await connectMongo() // Connect to MongoDB
    const totalSubmissions = await Submission.countDocuments()
    return NextResponse.json({
      message: "Evaluation API is running",
      totalSubmissions,
    })
  } catch (error) {
    console.error("API/EVALUATE: Error fetching total submissions:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
