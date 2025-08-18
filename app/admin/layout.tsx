import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DynamicFavicon } from "@/components/dynamic-favicon"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kayi Digital",
  description:
    "Our AI-driven platform connects you with pre-vetted professionals in under 72 hours, significantly reducing your hiring cycle.",
  openGraph: {
    title: "Kayi Digital",
    description:
      "Our AI-driven platform connects you with pre-vetted professionals in under 72 hours, significantly reducing your hiring cycle.",
    images: ["/images/Kayi-Black.jpeg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DynamicFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
