export default function SkillsMarquee() {
  const skills1 = [
    "Python", "FastAPI", "SQLite", "PostgreSQL",
    "Pandas", "Web Scraping", "API Integration", "Automation",
    "Excel Reports", "Dashboards", "Data Cleaning", "Git",
  ]
  const skills2 = [
    "REST APIs", "HTML/CSS/JS", "SQLAlchemy", "OpenPyXL",
    "PDF Processing", "Email Automation", "Webhooks", "JSON",
    "Next.js", "Vercel", "TypeScript", "Tailwind CSS",
  ]

  const row1 = [...skills1, ...skills1]
  const row2 = [...skills2, ...skills2]

  return (
    <div className="relative z-10 w-full overflow-hidden py-[60px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,127,0.05),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(92,200,255,0.04),transparent_50%)]" />

      <div className="flex animate-marquee gap-12 whitespace-nowrap border-y border-[rgba(232,238,249,0.05)] py-6">
        {row1.map((skill, i) => (
          <span key={`s1-${i}`} className="relative px-6 text-base text-[#7c8aab] before:absolute before:left-[-8px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-emerald-400">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex animate-marquee-reverse gap-12 whitespace-nowrap border-b border-[rgba(232,238,249,0.05)] py-6">
        {row2.map((skill, i) => (
          <span key={`s2-${i}`} className="relative px-6 text-base text-[#7c8aab] before:absolute before:left-[-8px] before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-emerald-400">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}