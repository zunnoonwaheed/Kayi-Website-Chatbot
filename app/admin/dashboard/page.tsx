"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, TrendingUp, Clock, DollarSign, Search, Filter, Phone, Mail, Building, Calendar, RefreshCw, Download, Lock, Eye, EyeOff, Star, Award, BarChart3, ChevronDown } from 'lucide-react'

interface ChatbotLead {
  id: string
  name: string
  email: string
  whatsapp: string
  businessType: string
  budget: string
  timeline: string
  contactPreference?: string
  additionalInfo: string
  timestamp: string
  status: "new" | "contacted" | "qualified" | "converted"
  source: string
  qualificationScore?: number
  responses?: {
    question: string
    answer: string
    score: number
    quality: "excellent" | "good" | "fair" | "poor"
  }[]
  overallQuality?: "excellent" | "good" | "fair" | "poor"
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")

  const [leads, setLeads] = useState<ChatbotLead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<ChatbotLead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [businessTypeFilter, setBusinessTypeFilter] = useState("all")
  const [expandedLead, setExpandedLead] = useState<string | null>(null)

  const handleLogin = () => {
    if (password === "KayiDigital@1") {
      setIsAuthenticated(true)
      setAuthError("")
      sessionStorage.setItem("kayi-admin-auth", "true")
    } else {
      setAuthError("Invalid password. Please try again.")
    }
  }

  useEffect(() => {
    const authState = sessionStorage.getItem("kayi-admin-auth")
    if (authState === "true") {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const fetchLeads = () => {
    try {
      setLoading(true)
      const storedLeads = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")

      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

      const recentLeads = storedLeads.filter((lead: ChatbotLead) => {
        const leadDate = new Date(lead.timestamp)
        return leadDate > thirtyDaysAgo
      })

      setLeads(recentLeads)
      setFilteredLeads(recentLeads)
    } catch (error) {
      console.error("Error fetching leads from localStorage:", error)
      setLeads([])
      setFilteredLeads([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads()
    }
  }, [isAuthenticated])

  useEffect(() => {
    let filtered = leads

    if (searchTerm) {
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.whatsapp.includes(searchTerm),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter)
    }

    if (businessTypeFilter !== "all") {
      filtered = filtered.filter((lead) => lead.businessType === businessTypeFilter)
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm, statusFilter, businessTypeFilter])

  const updateLeadStatus = (leadId: string, newStatus: string) => {
    try {
      const storedLeads = JSON.parse(localStorage.getItem("kayi-chatbot-leads") || "[]")
      const updatedLeads = storedLeads.map((lead: ChatbotLead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead,
      )
      localStorage.setItem("kayi-chatbot-leads", JSON.stringify(updatedLeads))

      setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus as any } : lead)))
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
  }

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "WhatsApp",
      "Business Type",
      "Budget",
      "Timeline",
      "Contact Preference",
      "Status",
      "Date",
      "Source",
      "Qualification Score",
      "Overall Quality",
    ]

    const csvData = filteredLeads.map((lead) => [
      lead.name,
      lead.email,
      lead.whatsapp,
      lead.businessType,
      lead.budget,
      lead.timeline,
      lead.contactPreference || "",
      lead.status,
      new Date(lead.timestamp).toLocaleDateString(),
      lead.source || "chatbot",
      lead.qualificationScore || "N/A",
      lead.overallQuality || "N/A",
    ])

    const csvContent = [headers, ...csvData].map((row) => row.map((field) => `"${field}"`).join(",")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `kayi-leads-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "qualified":
        return "bg-purple-100 text-purple-800"
      case "converted":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "excellent":
        return "bg-green-100 text-green-800"
      case "good":
        return "bg-blue-100 text-blue-800"
      case "fair":
        return "bg-yellow-100 text-yellow-800"
      case "poor":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreStars = (score: number) => {
    const stars = Math.round(score / 20)
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  const getBudgetValue = (budget: string) => {
    switch (budget) {
      case "$1,000 - $5,000":
        return 3000
      case "$5,000 - $15,000":
        return 10000
      case "$15,000 - $50,000":
        return 32500
      case "$50,000+":
        return 75000
      default:
        return 0
    }
  }

  const stats = {
    total: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    converted: leads.filter((l) => l.status === "converted").length,
    totalValue: leads.reduce((sum, lead) => sum + getBudgetValue(lead.budget), 0),
    avgValue: leads.length > 0 ? leads.reduce((sum, lead) => sum + getBudgetValue(lead.budget), 0) / leads.length : 0,
    avgScore:
      leads.length > 0 ? leads.reduce((sum, lead) => sum + (lead.qualificationScore || 0), 0) / leads.length : 0,
    highQuality: leads.filter((l) => (l.qualificationScore || 0) >= 80).length,
  }

  const businessTypes = [...new Set(leads.map((lead) => lead.businessType))].filter(Boolean)

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-[#cf21c3] rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Dashboard</CardTitle>
            <p className="text-gray-600">Enter password to access Kayi Digital admin panel</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {authError && <p className="text-red-600 text-sm">{authError}</p>}
            <Button onClick={handleLogin} className="w-full bg-[#cf21c3] hover:bg-[#b91c9e]">
              Access Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kayi Chatbot Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Manage and track your chatbot leads with quality scoring (Last 30 days)
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={exportToCSV}
                variant="outline"
                disabled={filteredLeads.length === 0}
                className="hover:bg-[#cf21c3] hover:text-white bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <Button onClick={fetchLeads} disabled={loading} className="bg-[#cf21c3] hover:bg-[#b91c9e]">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button
                onClick={() => {
                  setIsAuthenticated(false)
                  sessionStorage.removeItem("kayi-admin-auth")
                }}
                variant="outline"
                className="hover:bg-red-50 hover:border-red-300"
              >
                <Lock className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Leads</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
              <p className="text-xs text-muted-foreground">Awaiting contact</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.total > 0 ? Math.round((stats.converted / stats.total) * 100) : 0}%
              </div>
              <p className="text-xs text-muted-foreground">Leads to customers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Quality Score</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{Math.round(stats.avgScore)}/100</div>
              <p className="text-xs text-muted-foreground">Response quality</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Potential Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${stats.totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total pipeline value</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                </SelectContent>
              </Select>
              <Select value={businessTypeFilter} onValueChange={setBusinessTypeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by business" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Business Types</SelectItem>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leads ({filteredLeads.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
                <span className="ml-2 text-gray-600">Loading leads...</span>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                {leads.length === 0
                  ? "No leads found. Start the chatbot to collect leads!"
                  : "No leads found matching your criteria."}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{lead.name}</h3>
                          {/* Added null check for lead.status to prevent undefined error */}
                          <Badge className={getStatusColor(lead.status || 'new')}>
                            {(lead.status || 'new').charAt(0).toUpperCase() + (lead.status || 'new').slice(1)}
                          </Badge>
                          {lead.overallQuality && (
                            <Badge className={getQualityColor(lead.overallQuality)}>
                              {lead.overallQuality.charAt(0).toUpperCase() + lead.overallQuality.slice(1)} Quality
                            </Badge>
                          )}
                        </div>

                        {lead.qualificationScore !== undefined && (
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-3 border border-blue-100">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-700">Total Quality Score:</span>
                                <div className="flex items-center gap-1">
                                  {getScoreStars(lead.qualificationScore)}
                                  <span className="text-sm font-bold text-[#cf21c3] ml-1">
                                    ({lead.qualificationScore}/100)
                                  </span>
                                </div>
                              </div>
                              {lead.responses && (
                                <span className="text-xs text-gray-500">
                                  {lead.responses.length} questions answered
                                </span>
                              )}
                            </div>

                            {lead.responses && lead.responses.length > 0 && expandedLead !== lead.id && (
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <span>Question Scores:</span>
                                {lead.responses.slice(0, 4).map((response, index) => (
                                  <span key={index} className="bg-white px-2 py-1 rounded border">
                                    Q{index + 1}: {response.score}
                                  </span>
                                ))}
                                {lead.responses.length > 4 && (
                                  <span className="text-gray-400">+{lead.responses.length - 4} more</span>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href={`mailto:${lead.email}`} className="hover:text-[#cf21c3]">
                              {lead.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <a
                              href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#cf21c3]"
                            >
                              {lead.whatsapp}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span>{lead.businessType}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(lead.timestamp).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="mt-2 text-sm">
                          <span className="font-medium">Budget:</span> {lead.budget} |
                          <span className="font-medium ml-2">Timeline:</span> {lead.timeline}
                          {lead.contactPreference && (
                            <>
                              <br />
                              <span className="font-medium">Contact Preference:</span> {lead.contactPreference}
                            </>
                          )}
                        </div>

                        {lead.responses && lead.responses.length > 0 && (
                          <div className="mt-3">
                            <Button
                              variant={expandedLead === lead.id ? "default" : "outline"}
                              size="sm"
                              onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                              className={`${
                                expandedLead === lead.id
                                  ? "bg-[#cf21c3] hover:bg-[#b91c9e] text-white"
                                  : "text-[#cf21c3] hover:text-[#b91c9e] border-[#cf21c3] hover:border-[#b91c9e]"
                              } transition-all duration-200`}
                            >
                              <BarChart3 className="w-4 h-4 mr-2" />
                              {expandedLead === lead.id ? "Hide" : "View"} All Question Scores
                              <ChevronDown
                                className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                                  expandedLead === lead.id ? "rotate-180" : ""
                                }`}
                              />
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Select value={lead.status} onValueChange={(value) => updateLeadStatus(lead.id, value)}>
                          <SelectTrigger className="w-full sm:w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="qualified">Qualified</SelectItem>
                            <SelectItem value="converted">Converted</SelectItem>
                          </SelectContent>
                        </Select>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`, "_blank")}
                          className="hover:bg-green-50 hover:border-green-300"
                        >
                          WhatsApp
                        </Button>
                      </div>
                    </div>

                    {expandedLead === lead.id && lead.responses && (
                      <div className="mt-6 pt-6 border-t-2 border-gray-200">
                        <div className="bg-gradient-to-r from-[#cf21c3]/10 to-purple-100/50 rounded-xl p-4 mb-6 border border-[#cf21c3]/20">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                              <BarChart3 className="w-5 h-5 text-[#cf21c3]" />
                              Complete Response Analysis
                            </h4>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-gray-700">
                                Overall Score:{" "}
                                <span className="text-[#cf21c3] text-lg">{lead.qualificationScore}/100</span>
                              </div>
                              <div className="text-xs text-gray-500">
                                Average:{" "}
                                {Math.round(
                                  lead.responses.reduce((sum, r) => sum + r.score, 0) / lead.responses.length,
                                )}
                                /100
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                            <div className="bg-white rounded-lg p-2 border border-gray-200">
                              <div className="text-xs text-gray-500">Excellent</div>
                              <div className="font-bold text-green-600">
                                {lead.responses.filter((r) => r.score >= 80).length}
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 border border-gray-200">
                              <div className="text-xs text-gray-500">Good</div>
                              <div className="font-bold text-blue-600">
                                {lead.responses.filter((r) => r.score >= 60 && r.score < 80).length}
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 border border-gray-200">
                              <div className="text-xs text-gray-500">Fair</div>
                              <div className="font-bold text-yellow-600">
                                {lead.responses.filter((r) => r.score >= 40 && r.score < 60).length}
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-2 border border-gray-200">
                              <div className="text-xs text-gray-500">Poor</div>
                              <div className="font-bold text-red-600">
                                {lead.responses.filter((r) => r.score < 40).length}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {lead.responses.map((response, index) => (
                            <div
                              key={index}
                              className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-[#cf21c3]/30 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                              <div className="flex items-start justify-between gap-3 mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <span className="bg-gradient-to-r from-[#cf21c3] to-purple-600 text-white text-sm px-3 py-1 rounded-full font-bold">
                                      Question {index + 1}
                                    </span>
                                    <Badge className={`${getQualityColor(response.quality)} font-semibold`}>
                                      {response.quality.charAt(0).toUpperCase() + response.quality.slice(1)}
                                    </Badge>
                                  </div>
                                  <p className="font-semibold text-gray-800 text-base leading-relaxed">
                                    {response.question}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">{getScoreStars(response.score)}</div>
                                    <span className="text-lg font-bold text-[#cf21c3] bg-[#cf21c3]/10 px-3 py-1 rounded-lg">
                                      {response.score}/100
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-3">
                                <div className="flex items-start gap-3">
                                  <span className="text-sm font-bold text-[#cf21c3] mt-1">Answer:</span>
                                  <p className="text-gray-800 flex-1 leading-relaxed">{response.answer}</p>
                                </div>
                              </div>

                              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                                <div className="flex items-start gap-2">
                                  <span className="text-xs font-bold text-blue-700 mt-1">Score Analysis:</span>
                                  <p className="text-xs text-blue-700 flex-1">
                                    {response.score >= 80 &&
                                      "🎯 Excellent response with clear business value and strong qualification indicators. High potential for conversion."}
                                    {response.score >= 60 &&
                                      response.score < 80 &&
                                      "✅ Good response showing potential but may need follow-up to clarify requirements."}
                                    {response.score >= 40 &&
                                      response.score < 60 &&
                                      "⚠️ Fair response with some concerns about fit or readiness. Requires nurturing."}
                                    {response.score < 40 &&
                                      "❌ Poor response indicating low qualification or unclear requirements. May not be ready."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
