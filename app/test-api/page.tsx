"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TestAPI() {
  const [formData, setFormData] = useState({
    user_name: "John Doe",
    representing: "Acme Corp",
    services: "Web Development",
    description: "We need a new website for our business",
    goal: "Increase online presence",
    stage: "Ready to start",
    budget: "$10,000+",
    timeline: "ASAP",
    decision_maker: "Yes, I am the decision maker",
    email: "john@acme.com",
    extra: "Looking forward to working together",
  })

  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log("Form Data:", formData)
    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      setResponse(data)
    } catch (error) {
      console.error("Error:", error)
      setResponse({ error: "Failed to submit" })
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Test API Endpoint</CardTitle>
            <CardDescription>Test the evaluation API with sample data</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="user_name">Name</Label>
                  <Input
                    id="user_name"
                    value={formData.user_name}
                    onChange={(e) => handleInputChange("user_name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="representing">Company</Label>
                <Input
                  id="representing"
                  value={formData.representing}
                  onChange={(e) => handleInputChange("representing", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="services">Services</Label>
                <Select value={formData.services} onValueChange={(value) => handleInputChange("services", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                    <SelectItem value="Consulting">Consulting</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Budget</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Under $2,500">Under $2,500</SelectItem>
                    <SelectItem value="$2,500 - $5,000">$2,500 - $5,000</SelectItem>
                    <SelectItem value="$5,000 - $10,000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="$10,000+">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ASAP">ASAP</SelectItem>
                    <SelectItem value="1 month">1 month</SelectItem>
                    <SelectItem value="2-3 months">2-3 months</SelectItem>
                    <SelectItem value="3-6 months">3-6 months</SelectItem>
                    <SelectItem value="6+ months">6+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="decision_maker">Decision Maker</Label>
                <Select
                  value={formData.decision_maker}
                  onValueChange={(value) => handleInputChange("decision_maker", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes, I am the decision maker">Yes, I am the decision maker</SelectItem>
                    <SelectItem value="I have influence">I have influence</SelectItem>
                    <SelectItem value="No, someone else decides">No, someone else decides</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Testing..." : "Test API"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Response</CardTitle>
            <CardDescription>The response from your webhook</CardDescription>
          </CardHeader>
          <CardContent>
            {response ? (
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <pre className="text-sm overflow-auto">{JSON.stringify(response, null, 2)}</pre>
                </div>

                {response.score && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Score:</span>
                      <span className="text-lg font-bold">{response.score}/100</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-medium">Feedback:</span>
                      <p className="text-sm text-muted-foreground">{response.feedback}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Show Calendly:</span>
                      <span className={response.showCalendly ? "text-green-600" : "text-red-600"}>
                        {response.showCalendly ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">Submit the form to see the API response</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
