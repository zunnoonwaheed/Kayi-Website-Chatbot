"use client"

import { useEffect } from "react"

export function DynamicFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      // Check if dark mode is enabled
      const isDarkMode =
        window.matchMedia("(prefers-color-scheme: dark)").matches || document.documentElement.classList.contains("dark")

      const faviconPath = isDarkMode ? "/images/Kayi-White.jpeg" : "/images/Kayi-Black.jpeg"

      // Update all favicon links
      const links = document.querySelectorAll("link[rel*='icon']")
      links.forEach((link) => {
        link.remove()
      })

      // Create new favicon links
      const sizes = ["16x16", "32x32"]
      sizes.forEach((size) => {
        const link = document.createElement("link")
        link.rel = "icon"
        link.type = "image/jpeg"
        link.sizes = size
        link.href = faviconPath
        document.head.appendChild(link)
      })

      // Update shortcut icon
      const shortcutLink = document.createElement("link")
      shortcutLink.rel = "shortcut icon"
      shortcutLink.href = faviconPath
      document.head.appendChild(shortcutLink)

      // Update apple touch icon
      const appleLink = document.createElement("link")
      appleLink.rel = "apple-touch-icon"
      appleLink.href = faviconPath
      document.head.appendChild(appleLink)
    }

    // Update favicon on mount
    updateFavicon()

    // Listen for theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    mediaQuery.addEventListener("change", updateFavicon)

    // Listen for manual theme changes (if using a theme toggle)
    const observer = new MutationObserver(updateFavicon)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon)
      observer.disconnect()
    }
  }, [])

  return null
}
