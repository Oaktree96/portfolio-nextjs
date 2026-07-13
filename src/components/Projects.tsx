import Link from "next/link"

const projects = [
  {
    tag: "Web Development",
    title: "Portfolio Website — Next.js 16",
    desc: "Rebuilt from scratch in Next.js 16 with TypeScript and Tailwind CSS. Features interactive particle effects, 3D tilt cards, magnetic buttons, custom cursor, and a loading screen. Deployed on Vercel with automatic GitHub integration — every push deploys instantly.",
    tech: "Next.js 16 · TypeScript · Tailwind CSS · Vercel · Git",
    links: [
      { href: "https://oaktreeservices.net", label: "🌐 View Live →" },
      { href: "https://github.com/Oaktree96/portfolio-nextjs", label: "</> Source Code" },
    ],
  },
  {
    tag: "DNS & Infrastructure",
    title: "Custom Domain Migration to Vercel",
    desc: "Migrated oaktreeservices.net from GitHub Pages to Vercel hosting. Configured DreamHost DNS with A record (76.76.21.21) and CNAME (cname.vercel-dns.com) for the www subdomain. Transitioned from the old HTML-based site to a modern Next.js stack.",
    tech: "Vercel · DreamHost DNS · GitHub Pages · SSL/TLS",
    links: [],
  },
  {
    tag: "Full-Stack Web App",
    title: "Skincare Booking Dashboard",
    desc: "A complete booking management system for a medical aesthetics business. Built with FastAPI and SQLite, managing services (facials, Botox, fillers), client bookings, and providing real-time business analytics with revenue tracking.",
    tech: "FastAPI · SQLite · HTML/CSS/JS · Pydantic · REST API",
    links: [],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-emerald-400 uppercase">Portfolio</p>
      <h2 className="mb-12 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        What I&apos;ve <span className="bg-gradient-to-r from-emerald-400 to-[#5cc8ff] bg-clip-text text-transparent">Built</span>
      </h2>

      {projects.map((p, i) => (
        <div
          key={i}
          className="tilt-card group mb-5 rounded-2xl border border-[rgba(232,238,249,0.06)] bg-white/[0.02] p-8 transition-all duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.02]"
        >
          <div className="tilt-content">
            <span className="mb-3 inline-block rounded-md bg-emerald-400/8 px-3 py-1 text-[11px] font-semibold text-emerald-400">
              {p.tag}
            </span>
            <h3 className="mb-2 text-[22px] font-bold">{p.title}</h3>
            <p className="mb-3 max-w-[600px] text-sm leading-[1.7] text-[#7c8aab]">{p.desc}</p>
            <div className="mb-3 text-xs text-[#5cc8ff]">{p.tech}</div>
            {p.links.length > 0 && (
              <div className="mt-3 flex gap-5">
                {p.links.map((link, j) => (
                  <Link
                    key={j}
                    href={link.href}
                    target="_blank"
                    className="text-xs font-semibold text-emerald-400 no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}