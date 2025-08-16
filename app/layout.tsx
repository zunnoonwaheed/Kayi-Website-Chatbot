import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kayi Digital",
  description:
    "Our AI-driven platform connects you with pre-vetted professionals in under 72 hours, significantly reducing your hiring cycle.",
  icons: {
    icon: [
      { url: "/images/favicon-img.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/favicon-img.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/images/favicon-img.jpeg",
    apple: "/images/favicon-img.jpeg",
  },
  openGraph: {
    title: "Kayi Digital",
    description:
      "Our AI-driven platform connects you with pre-vetted professionals in under 72 hours, significantly reducing your hiring cycle.",
    images: ["/images/favicon-img.jpeg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
