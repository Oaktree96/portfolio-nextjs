"use client"

import { useEffect, useRef } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import CustomCursor from "@/components/CustomCursor"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import SkillsMarquee from "@/components/SkillsMarquee"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  // 3D Tilt on cards
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".tilt-card")
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>()

    cards.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      }
      const reset = () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
      }
      handlers.set(card, handler)
      card.addEventListener("mousemove", handler)
      card.addEventListener("mouseleave", reset)
    })

    return () => {
      handlers.forEach((handler, card) => {
        card.removeEventListener("mousemove", handler)
      })
    }
  }, [])

  // Magnetic buttons
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>(".magnetic-btn")

    btns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const dist = Math.sqrt(x * x + y * y)
        const maxDist = 100
        const strength = Math.min(dist, maxDist) / maxDist
        btn.style.transform = `translate(${x * strength * 0.3}px, ${y * strength * 0.3}px)`
      }
      const reset = () => {
        btn.style.transform = "translate(0, 0)"
      }
      btn.addEventListener("mousemove", move)
      btn.addEventListener("mouseleave", reset)
    })
  }, [])

  // Scroll fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("style", "")
            ;(entry.target as HTMLElement).style.opacity = "1"
            ;(entry.target as HTMLElement).style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )

    const els = document.querySelectorAll(
      ".service-card, .project-card, .timeline-item, .hero-stat, .contact-block",
    )
    els.forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = "0"
      htmlEl.style.transform = "translateY(30px)"
      htmlEl.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      observer.observe(htmlEl)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ambient-base absolute inset-0" />
        <div className="absolute left-[30%] top-[55%] h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(255,165,66,0.27),transparent_70%)]" />
        <div className="absolute left-[75%] top-[35%] h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(255,94,159,0.21),transparent_70%)]" />
        <div className="absolute left-[20%] top-[30%] h-[55vmax] w-[55vmax] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(92,200,255,0.17),transparent_70%)]" />
      </div>

      <Nav />
      <Hero />
      <About />
      <SkillsMarquee />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}