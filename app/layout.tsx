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
    "Your business growth should feel predictable, not like a gamble. We partner with companies who want real results they can count on.",
  openGraph: {
    title: "Kayi Digital",
    description:
      "Your business growth should feel predictable, not like a gamble. We partner with companies who want real results they can count on.",
    images: ["/images/Kayi-Black.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
