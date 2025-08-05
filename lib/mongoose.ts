import mongoose, { Schema, type Document } from "mongoose"

// Define the interface for a Submission document
export interface ISubmission extends Document {
  user_name: string
  representing?: string
  services?: string
  description?: string
  goal?: string
  stage?: string
  budget?: string
  timeline?: string
  decision_maker?: string
  email: string
  extra?: string
  score: number
  feedback: string
  showCalendly: boolean
  timestamp: Date
}

// Define the Mongoose schema for submissions
const SubmissionSchema: Schema = new Schema({
  user_name: { type: String, required: true },
  representing: { type: String },
  services: { type: String },
  description: { type: String },
  goal: { type: String },
  stage: { type: String },
  budget: { type: String },
  timeline: { type: String },
  decision_maker: { type: String },
  email: { type: String, required: true },
  extra: { type: String },
  score: { type: Number, required: true },
  feedback: { type: String, required: true },
  showCalendly: { type: Boolean, required: true },
  timestamp: { type: Date, default: Date.now },
})

// Get the Submission model, or create it if it doesn't exist
const Submission =
  (mongoose.models.Submission as mongoose.Model<ISubmission>) ||
  mongoose.model<ISubmission>("Submission", SubmissionSchema)

// Connection function
const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB: Already connected.")
    return
  }

  if (!process.env.MONGODB_URI) {
    console.error("MongoDB: MONGODB_URI environment variable is not defined.")
    throw new Error("MONGODB_URI environment variable is not defined.")
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB: Successfully connected.")
  } catch (error) {
    console.error("MongoDB: Connection error:", error)
    throw new Error("Failed to connect to MongoDB.")
  }
}

export { connectMongo, Submission }
