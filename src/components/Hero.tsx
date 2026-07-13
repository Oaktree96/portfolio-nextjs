"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: {
      x: number; y: number; vx: number; vy: number
      size: number; alpha: number
    }[] = []
    let w = 0, h = 0
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const resize = () => {
      const parent = canvas.parentElement!.getBoundingClientRect()
      w = canvas.width = parent.width
      h = canvas.height = parent.height
    }
    resize()
    window.addEventListener("resize", resize)

    const mousemove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    document.addEventListener("mousemove", mousemove)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      })
    }

    const animate = () => {
      ctx!.clearRect(0, 0, w, h)

      for (const p of particles) {
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 300) {
          const force = (300 - dist) / 300
          p.vx += (dx / dist) * force * 0.005
          p.vy += (dy / dist) * force * 0.005
        }

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        p.vx *= 0.99
        p.vy *= 0.99

        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(0, 255, 127, ${p.alpha})`
        ctx!.fill()
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(0, 255, 127, ${0.06 * (1 - dist / 150)})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      document.removeEventListener("mousemove", mousemove)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-screen w-[94%] max-w-[1200px] items-center px-0 py-[120px]"
    >
      {/* Follow gradient */}
      <div
        ref={gradientRef}
        className="pointer-events-none absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/8 mix-blend-screen"
        style={{ transition: "left 0.3s ease-out, top 0.3s ease-out" }}
      />

      {/* Particles canvas */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="relative z-10 max-w-[800px]">
        <p className="mb-4 text-xs font-semibold tracking-[2px] text-emerald-400 uppercase">
          ✦ Available for freelance
        </p>
        <h1 className="mb-6 text-[clamp(48px,7vw,96px)] font-extrabold leading-[1.1] tracking-[-2px]">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-transparent">
            Steven James<br />Colin Osborne
          </span>
        </h1>
        <div className="mb-8 text-[clamp(18px,2.5vw,36px)] font-bold tracking-[-0.5px]">
          A{" "}
          <span className="bg-gradient-to-r from-[#ffa552] to-[#ff5e9f] bg-clip-text text-transparent">
            Python-Focused
          </span>{" "}
          Software Engineer &amp; Web Developer
        </div>
        <p className="mb-10 max-w-[550px] text-base leading-[1.7] text-[#7c8aab]">
          I build automation tools, data pipelines, and custom web applications that solve real business problems. Turning complex requirements into clean, working code.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-sm font-bold text-[#06080d] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,255,127,0.25)]"
          >
            📩 Hire Me
          </Link>
          <a
            href="#projects"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-[rgba(232,238,249,0.15)] px-8 py-3.5 text-sm font-medium text-[#e8eef9] transition-colors duration-300 hover:border-emerald-400"
          >
            ↓ View My Work
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[rgba(232,238,249,0.06)] pt-10 sm:flex-row sm:gap-12">
          <div>
            <div className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-3xl font-extrabold text-transparent">4</div>
            <div className="mt-1 text-xs text-[#7c8aab]">Projects Built</div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-3xl font-extrabold text-transparent">Live</div>
            <div className="mt-1 text-xs text-[#7c8aab]">Custom Domain</div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-3xl font-extrabold text-transparent">FastAPI</div>
            <div className="mt-1 text-xs text-[#7c8aab]">Backend Framework</div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-3xl font-extrabold text-transparent">Git</div>
            <div className="mt-1 text-xs text-[#7c8aab]">Version Control</div>
          </div>
        </div>
      </div>
    </section>
  )
}