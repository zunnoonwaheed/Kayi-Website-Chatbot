"use client"

import { useEffect, useState } from "react"

export default function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Handle hover effects for interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.getAttribute("role") === "button" ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true)
      }
    }

    const handleElementLeave = () => {
      setIsHovering(false)
    }

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add hover detection for interactive elements
    document.addEventListener("mouseover", handleElementHover)
    document.addEventListener("mouseout", handleElementLeave)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseover", handleElementHover)
      document.removeEventListener("mouseout", handleElementLeave)
    }
  }, [isVisible])

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${mousePosition.x + 25}px, ${mousePosition.y + 25}px)`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full transition-all duration-200 ease-out ${
            isHovering ? "scale-150" : "scale-100"
          }`}
          style={{
            backgroundColor: isHovering ? "#e879f9" : "#cf21c3",
            boxShadow: "0 0 15px rgba(207, 33, 195, 0.6), 0 0 30px rgba(207, 33, 195, 0.3)",
          }}
        />
      </div>
    </>
  )
}
