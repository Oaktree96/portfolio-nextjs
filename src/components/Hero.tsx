"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false })

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particles: {
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
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
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
            ctx!.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - dist / 150)})`
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
      {/* Particles canvas */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative z-10 w-full max-w-[700px]">
        <p className="mb-4 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">
          ✦ Software Engineering &amp; DevOps by Steven Osborne
        </p>
        <h1 className="mb-6 text-[clamp(48px,7vw,96px)] font-extrabold leading-[1.1] tracking-[-2px]">
          <span className="text-white">
            Osborne Ops
          </span>
        </h1>
        <div className="mb-8 text-[clamp(18px,2.5vw,36px)] font-bold tracking-[-0.5px]">
          <span className="text-[#c8d6e5]">
            Software
          </span>
          {" "}&middot;{" "}
          <span className="text-[#c8d6e5]">
            DevOps
          </span>
          {" "}&middot;{" "}
          <span className="text-[#c8d6e5]">
            Automation
          </span>
          {" "}&middot;{" "}
          <span className="text-[#c8d6e5]">
            Infrastructure
          </span>
        </div>
        <p className="mb-10 max-w-[550px] text-base leading-[1.7] text-[#8898b0]">
          We build software and the systems that deliver it. From full-stack web apps
          to deployment pipelines, cloud infrastructure to automation — you describe
          what you need, we build it, and it stays running.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#contact"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#0a1628] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
          >
            📩 Get Started
          </Link>
          <a
            href="#projects"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] px-8 py-3.5 text-sm font-medium text-[#f0f4f8] transition-colors duration-300 hover:border-white hover:bg-white/5"
          >
            ↓ View My Work
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[rgba(255,255,255,0.06)] pt-10 sm:flex-row sm:gap-12">
          <div>
            <div className="text-3xl font-extrabold text-white">4+</div>
            <div className="mt-1 text-xs text-[#8898b0]">Projects Built</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">Live</div>
            <div className="mt-1 text-xs text-[#8898b0]">In Production</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">DevOps</div>
            <div className="mt-1 text-xs text-[#8898b0]">Pipeline Focus</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">Git</div>
            <div className="mt-1 text-xs text-[#8898b0]">Version Control</div>
          </div>
        </div>
      </div>

        {/* 3D Scene — right side on desktop */}
        <div className="relative z-10 hidden h-[400px] w-[400px] flex-shrink-0 lg:block xl:h-[500px] xl:w-[500px]">
          <Scene3D />
        </div>
      </div>
    </section>
  )
}