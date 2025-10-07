"use client"

import { ReactNode } from "react"
import MetaPixelTracker from "@/components/MetaPixelTracker"
import { ThemeProvider } from "@/components/theme-provider"
import { DynamicFavicon } from "@/components/dynamic-favicon"

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DynamicFavicon />
      <MetaPixelTracker />
      {children}
    </ThemeProvider>
  )
}
