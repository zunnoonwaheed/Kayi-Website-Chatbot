
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChatbotStats {
  totalSubmissions: number
  averageScore: number
  highQualityLeads: number
  conversionRate: number
  recentSubmissions: Array<{
    name: string
    email: string
    score: number
    timestamp: string
    services: string
  }>
}

export default function Dashboard() {
  const [stats, setStats] = useState<ChatbotStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real implementation, you'd fetch this from your database
    // For now, we'll use mock data to show the structure
    setTimeout(() => {
      setStats({
        totalSubmissions: 12,
        averageScore: 73,
        highQualityLeads: 8,
        conversionRate: 66.7,
        recentSubmissions: [
          {
            name: "John Smith",
            email: "john@example.com",
            score: 85,
            timestamp: "2024-01-15 14:30",
            services: "Web Development",
          },
          {
            name: "Sarah Johnson",
            email: "sarah@company.com",
            score: 92,
            timestamp: "2024-01-15 11:20",
            services: "Digital Marketing",
          },
          {
            name: "Mike Wilson",
            email: "mike@startup.com",
            score: 67,
            timestamp: "2024-01-14 16:45",
            services: "Mobile App Development",
          },
        ],
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Chatbot Dashboard</h1>
          <div className="text-center py-12">Loading dashboard...</div>
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Chatbot Dashboard</h1>
          <div className="text-center py-12">No data available</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Chatbot Dashboard</h1>
          <div className="text-sm text-gray-600">Last updated: {new Date().toLocaleString()}</div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.totalSubmissions}</div>
              <p className="text-xs text-gray-500 mt-1">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.averageScore}/100</div>
              <p className="text-xs text-gray-500 mt-1">Quality metric</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">High Quality Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">{stats.highQualityLeads}</div>
              <p className="text-xs text-gray-500 mt-1">Score ≥ 70</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{stats.conversionRate}%</div>
              <p className="text-xs text-gray-500 mt-1">To qualified leads</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Submissions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Services</th>
                    <th className="text-left py-2">Score</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentSubmissions.map((submission, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3">{submission.name}</td>
                      <td className="py-3">{submission.email}</td>
                      <td className="py-3">{submission.services}</td>
                      <td className="py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            submission.score >= 80
                              ? "bg-green-100 text-green-800"
                              : submission.score >= 70
                                ? "bg-blue-100 text-blue-800"
                                : submission.score >= 50
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                          }`}
                        >
                          {submission.score}/100
                        </span>
                      </td>
                      <td className="py-3 text-sm text-gray-600">{submission.timestamp}</td>
                      <td className="py-3">
                        {submission.score >= 70 ? (
                          <span className="text-green-600 text-sm">✅ Qualified</span>
                        ) : (
                          <span className="text-gray-600 text-sm">📋 Review</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Chatbot Integration: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>OpenAI API: Connected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Email Notifications: Enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Calendly Integration: Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
