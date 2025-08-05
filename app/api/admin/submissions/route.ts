import { type NextRequest, NextResponse } from "next/server"
import { connectMongo, Submission, type ISubmission } from "@/lib/mongoose" // Import Mongoose connection and model

export async function GET(request: NextRequest) {
  try {
    console.log("API/ADMIN/SUBMISSIONS: Admin API called.")
    await connectMongo() // Connect to MongoDB

    const url = new URL(request.url)
    const page = Number.parseInt(url.searchParams.get("page") || "1")
    const limit = Number.parseInt(url.searchParams.get("limit") || "10")

    // Fetch submissions from the database
    const allSubmissions: ISubmission[] = await Submission.find({})
      .sort({ timestamp: -1 }) // Sort by timestamp descending
      .lean() // Return plain JavaScript objects
    console.log(`API/ADMIN/SUBMISSIONS: Found ${allSubmissions.length} total submissions in DB.`)

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    const paginatedSubmissions = allSubmissions.slice(startIndex, endIndex)

    const response = {
      submissions: paginatedSubmissions,
      total: allSubmissions.length,
      page,
      totalPages: Math.ceil(allSubmissions.length / limit),
    }

    console.log("API/ADMIN/SUBMISSIONS: Returning response:", JSON.stringify(response, null, 2))
    console.log("API/ADMIN/SUBMISSIONS: End Admin API.")

    return NextResponse.json(response)
  } catch (error) {
    console.error("API/ADMIN/SUBMISSIONS: Error fetching submissions:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
