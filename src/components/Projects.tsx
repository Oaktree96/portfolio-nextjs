import Link from "next/link"

const projects = [
  {
    tag: "Full-Stack Web App",
    title: "Skincare Booking Dashboard",
    desc: "A complete booking management system for a medical aesthetics business. Manages services (facials, Botox, fillers), client bookings, and real-time business analytics with revenue tracking. Deployed as a production system for an active clinic.",
    tech: "FastAPI · SQLite · HTML/CSS/JS · Pydantic · REST API",
    links: [],
  },
  {
    tag: "DevOps & Infrastructure",
    title: "Custom Domain Deployment — Vercel + DNS",
    desc: "Full CI/CD deployment pipeline with custom domain management. Automated SSL/TLS via Vercel with continuous deployment from GitHub — every push deploys instantly. Production-grade setup for osborneoperations.uk.",
    tech: "Vercel · GitHub Actions · SSL/TLS",
    links: [
      { href: "https://osborneoperations.uk", label: "🌐 View Live →" },
    ],
  },
  {
    tag: "Automated Trading",
    title: "Crypto Trading Signal Pipeline",
    desc: "An automated trading signal system connected to Hyperliquid exchange. Features multi-strategy signal generation, 4-hour execution cycles, portfolio rebalancing, and Telegram-based delivery. Currently managing live trades with automated profit-sharing logic.",
    tech: "Python · Hyperliquid API · Cron · Telegram Bot · Linux",
    links: [],
  },
  {
    tag: "Web Development",
    title: "Lash & Brow Studio Website",
    desc: "A full business website for Lash Dolls Marbella — a lash and brow studio in Fuengirola, Spain. Service catalog with 10 services across 3 categories, WhatsApp booking integration, image gallery, and contact system. Built for a real operating business.",
    tech: "FastAPI · HTML/CSS/JS · WhatsApp API · JSON",
    links: [],
  },
  {
    tag: "Full-Stack Web App",
    title: "Portfolio Website — Next.js 16",
    desc: "This very site! Built from scratch in Next.js 16 with TypeScript and Tailwind CSS. Features interactive particle effects, 3D tilt cards, magnetic buttons, custom cursor, and loading screen. Deployed on Vercel with automatic GitHub integration.",
    tech: "Next.js 16 · TypeScript · Tailwind CSS · Vercel",
    links: [],
  },
  {
    tag: "CI/CD & Automation",
    title: "Automated Deployment Pipeline",
    desc: "GitHub Actions-based CI/CD pipeline that runs tests, lints code, and auto-deploys to production on every push. Includes automated dependency management with uv, type checking with mypy, and style enforcement with ruff.",
    tech: "GitHub Actions · uv · pytest · mypy · ruff · Vercel CLI",
    links: [],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto w-[94%] max-w-[1200px] px-0 py-[100px]">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#8898b0] uppercase">Portfolio</p>
      <h2 className="mb-12 text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px]">
        What <span className="text-white">Osborne Ops</span> Has Built
      </h2>

      {projects.map((p, i) => (
        <div
          key={i}
          className="tilt-card group mb-5 rounded-2xl border border-white/6 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
        >
          <div className="tilt-content">
            <span className="mb-3 inline-block rounded-md bg-white/8 px-3 py-1 text-[11px] font-semibold text-[#c8d6e5]">
              {p.tag}
            </span>
            <h3 className="mb-2 text-[22px] font-bold text-white">{p.title}</h3>
            <p className="mb-3 max-w-[600px] text-sm leading-[1.7] text-[#8898b0]">{p.desc}</p>
            <div className="mb-3 text-xs text-[#c8d6e5]">{p.tech}</div>
            {p.links.length > 0 && (
              <div className="mt-3 flex gap-5">
                {p.links.map((link, j) => (
                  <Link
                    key={j}
                    href={link.href}
                    target="_blank"
                    className="text-xs font-semibold text-white no-underline hover:text-[#c8d6e5]"
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