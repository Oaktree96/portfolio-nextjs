"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${mouseX}px`
        ringRef.current.style.top = `${mouseY}px`
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${mouseX}px`
        glowRef.current.style.top = `${mouseY}px`
      }
    }

    const handleHoverIn = () => ringRef.current?.classList.add("scale-150", "border-white", "bg-white/5")
    const handleHoverOut = () => ringRef.current?.classList.remove("scale-150", "border-white", "bg-white/5")

    document.addEventListener("mousemove", handleMouse)
    document.querySelectorAll("a, button, .tilt-card, .project-card").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn)
      el.addEventListener("mouseleave", handleHoverOut)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouse)
      document.querySelectorAll("a, button, .tilt-card, .project-card").forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn)
        el.removeEventListener("mouseleave", handleHoverOut)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-40 hidden h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 mix-blend-screen md:block"
        style={{ transition: "left 0.1s ease-out, top 0.1s ease-out" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.1)] mix-blend-screen md:block"
        style={{ transition: "left 0.15s ease-out, top 0.15s ease-out" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 mix-blend-screen transition-all duration-300 ease-out md:block"
        style={{ transition: "left 0.4s ease-out, top 0.4s ease-out, width 0.3s, height 0.3s, border-color 0.3s, background 0.3s" }}
      />
    </>
  )
}