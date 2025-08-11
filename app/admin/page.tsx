"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Search,
  Filter,
  Phone,
  Mail,
  Building,
  Calendar,
  RefreshCw,
} from "lucide-react"

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

export default function AdminDashboard() {
  const [leads, setLeads] = useState<ChatbotLead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<ChatbotLead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [businessTypeFilter, setBusinessTypeFilter] = useState("all")

  const fetchLeads = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/chatbot/leads")
      if (response.ok) {
        const data = await response.json()
        setLeads(data.leads)
        setFilteredLeads(data.leads)
      }
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  useEffect(() => {
    let filtered = leads

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.whatsapp.includes(searchTerm),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter)
    }

    // Business type filter
    if (businessTypeFilter !== "all") {
      filtered = filtered.filter((lead) => lead.businessType === businessTypeFilter)
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm, statusFilter, businessTypeFilter])

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/chatbot/leads/${leadId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus as any } : lead)))
      }
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
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
  }

  const businessTypes = [...new Set(leads.map((lead) => lead.businessType))].filter(Boolean)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kayi Chatbot Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage and track your chatbot leads</p>
            </div>
            <Button onClick={fetchLeads} disabled={loading} className="bg-[#cf21c3] hover:bg-[#b91c9e]">
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">All time leads</p>
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
              <CardTitle className="text-sm font-medium">Potential Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">${stats.totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total pipeline value</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
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

        {/* Leads Table */}
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
              <div className="text-center py-8 text-gray-500">No leads found matching your criteria.</div>
            ) : (
              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{lead.name}</h3>
                          <Badge className={getStatusColor(lead.status)}>
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </Badge>
                        </div>

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
                        </div>
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
