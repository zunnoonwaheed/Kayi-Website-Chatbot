"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestAPI() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const testAPI = async () => {
    setLoading(true)
    try {
      const testData = {
        user_name: "Test User",
        representing: "Test Company",
        services: "Web Development",
        description: "We need a modern website for our business",
        goal: "Increase online presence and generate more leads",
        stage: "Planning phase",
        budget: "$5,000 - $10,000",
        timeline: "2-3 months",
        decision_maker: "Yes, I am the decision maker",
        email: "test@example.com",
        extra: "Looking for ongoing support as well",
      }

      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">API Test Page</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Test Chatbot API</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Click the button below to test your chatbot evaluation API with sample data.</p>
            <Button onClick={testAPI} disabled={loading}>
              {loading ? "Testing..." : "Test API"}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle>API Response</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">{JSON.stringify(result, null, 2)}</pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
