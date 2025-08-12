import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kayi Admin Dashboard",
  description: "Manage chatbot leads and customer data",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}
