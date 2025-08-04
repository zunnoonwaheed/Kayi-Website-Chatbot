"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChatbotStats {
  totalSubmissions: number
  averageScore: number
  highQualityLeads: number
  conversionRate: number
}

export default function ChatbotDashboard() {
  const [stats, setStats] = useState<ChatbotStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, you'd fetch this from your database
    // For now, we'll use mock data
    setTimeout(() => {
      setStats({
        totalSubmissions: 45,
        averageScore: 67,
        highQualityLeads: 23,
        conversionRate: 51.1,
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <div className="p-4">Loading dashboard...</div>
  }

  if (!stats) {
    return <div className="p-4">No data available</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalSubmissions}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Average Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageScore}/100</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">High Quality Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.highQualityLeads}</div>
          <p className="text-xs text-muted-foreground">Score ≥ 70</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.conversionRate}%</div>
        </CardContent>
      </Card>
    </div>
  )
}
