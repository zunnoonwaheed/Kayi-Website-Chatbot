import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import KayiChatbot from "@/components/kayi-chatbot" // ✅ Import new chatbot

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kayi Digital",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
        {children}

        {/* ✅ New Chatbot Widget */}
        <KayiChatbot />
      </body>
    </html>
  )
}
