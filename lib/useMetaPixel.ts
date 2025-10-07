"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// ✅ Hook to fire PageView on route change
export function useMetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView")
      console.log("[MetaPixel] PageView tracked:", pathname)
    }
  }, [pathname])
}
